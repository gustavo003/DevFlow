"use server";
import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";

export async function findUser(params: any) {
  try {
    connectToDatabase();
    const { userId } = params;
    const users = await User.findOne({ clerkId: userId });
    return users;
  } catch (err) {
    console.log(err);
    throw err;
  }
}
