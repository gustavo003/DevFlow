"use server";

import Question from "@/database/question.model";
import Tag from "@/database/tag.model";
import { connectToDatabase } from "../mongoose";
export async function createQuestion(params: any) {
  try {
    connectToDatabase();
    const { title, explanation, tags, author } = params;
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
    console.log("?", question);
  } catch (err) {
    console.log(err);
  }
}
