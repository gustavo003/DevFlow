"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
import { CreateQuestionParams, GetQuestionsParams } from "../shared.types";
import { revalidatePath } from "next/cache";

export async function getQuestions(params: GetQuestionsParams) {
  try {
    connectToDatabase();
    const questions = await Question.find({})
      .populate({
        path: "tags",
        model: "Tag",
      })
      .populate({
        path: "author",
        model: "User",
      });
    return { questions };
  } catch (err) {
    console.log(err);
  }
}
export async function createQuestion(params: CreateQuestionParams) {
  try {
    connectToDatabase();
    const { title, explanation, tags, author, path } = params;
    const question = await Question.create({ title, explanation, author });
    const tagsDocument = [];
    for (const tag of tags) {
      const existingTag = await Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tag}$`, "i") } },
        { $setOnInsert: { name: tag }, $push: { questions: question._id } },
        { upsert: true, new: true }
      );
      tagsDocument.push(existingTag._id);
    }

    await Question.findByIdAndUpdate(question._id, {
      $push: { tags: { $each: tagsDocument } },
    });
    revalidatePath(path);
  } catch (err) {
    console.log(err);
  }
}
