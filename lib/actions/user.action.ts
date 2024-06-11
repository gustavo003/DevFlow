"use server";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { CreateUserParams, UpdateUserParams } from "../shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function findUser(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export async function createUser(params: CreateUserParams) {
  try {
    connectToDatabase();
    const user = await User.create(params);
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();
    const { clerkId, updateData, path } = params;
    const user = await User.findOneAndUpdate({ clerkId }, updateData, {
      new: true,
    });
    revalidatePath(path);
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export async function deleteUser(params: any) {
  try {
    connectToDatabase();
    const { clerkId } = params;
    const user = await User.findOneAndDelete({ clerkId });
    // const questionsIds = Question.find({ author: user?._id }).distinct("_id");
    await Question.deleteMany({ author: user?._id });
    return user;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
