import { Schema, models, model, Document } from "mongoose";

export interface ITag extends Document {
  name: string;
  questions: Schema.Types.ObjectId[];
  description: string;
  folowers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const TagSchema = new Schema<ITag>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  folowers: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default models.Tag || model<ITag>("Tag", TagSchema);
