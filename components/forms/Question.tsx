"use client";
import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { usePathname, useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { QuestionSchema } from "@/lib/validation";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { createQuestion } from "@/lib/actions/question.action";
export default function Question({ mongoUserId }: { mongoUserId: string }) {
  const apiKey = process.env.NEXT_PUBLIC_TINYMCE_API_KEY;
  const editorRef = useRef(null);
  const type: string = "create";
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();

  function handleRemoveTag(tag: string, field: any) {
    form.setValue(
      "tags",
      field.value.filter((t: string) => t !== tag)
    );
  }

  function handleInputKeyDown(
    e: React.KeyboardEvent<HTMLInputElement>,
    field: any
  ) {
    if (e.key === "Enter" && field.name === "tags") {
      e.preventDefault();
      const tagInput = e.target as HTMLInputElement;
      const tagValue = tagInput.value.trim();
      if (tagValue) {
        if (tagValue.length > 15) {
          return form.setError("tags", {
            message: "Tags cannot be longer than 15 characters",
          });
        }
        if (!field.value.includes(tagValue)) {
          form.setValue("tags", [...field.value, tagValue]);
          tagInput.value = "";
          form.clearErrors();
        }
      } else {
        form.trigger();
      }
    }
  }

  const form = useForm<z.infer<typeof QuestionSchema>>({
    resolver: zodResolver(QuestionSchema),
    defaultValues: {
      title: "",
      explanation: "",
      tags: [],
    },
  });

  async function submit(values: z.infer<typeof QuestionSchema>) {
    setIsSubmitting(true);
    try {
      await createQuestion({
        title: values.title,
        explanation: values.explanation,
        tags: values.tags,
        author: JSON.parse(mongoUserId),
      });
    } catch (err) {
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(submit)}
          className="flex w-full flex-col gap-10"
        >
          {/* Question Title */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col gap-3">
                <FormLabel className="paragraph-semibold text-dark400_light900">
                  Question Title <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-2.5">
                  <Input
                    className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                    placeholder="shadcn"
                    {...field}
                  />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Be specific and imagine you&apos;re asking a question to
                  another person
                </FormDescription>
                <FormMessage className="text-red-900" />
              </FormItem>
            )}
          />

          {/* Explanation */}
          <FormField
            control={form.control}
            name="explanation"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light900">
                  Detail the explanation of your question
                  <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl>
                  <Editor
                    apiKey={apiKey}
                    // @ts-ignore
                    onInit={(_evt, editor) => (editorRef.current = editor)}
                    initialValue=""
                    onEditorChange={(content) => {
                      field.onChange(content);
                    }}
                    init={{
                      height: 350,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "codesample",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "codesample | bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist  ",
                      content_style:
                        "body { font-family:Inter; font-size:16px }",
                    }}
                  />
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Be specific and imagine you&apos;re asking a question to
                  another person
                </FormDescription>
                <FormMessage className="text-red-900" />
              </FormItem>
            )}
          />
          {/* Tags */}
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormItem className="flex w-full flex-col">
                <FormLabel className="paragraph-semibold text-dark400_light900">
                  Tags
                  <span className="text-primary-500">*</span>
                </FormLabel>
                <FormControl className="mt-2.5">
                  <>
                    <Input
                      className="no-focus paragraph-regular background-light700_dark300 light-border-2 text-dark300_light700 min-h-[56px] border"
                      placeholder="Add Tags"
                      onKeyDown={(e) => handleInputKeyDown(e, field)}
                    />
                    {field.value.length > 0 && (
                      <div className="flex-start mt-2.5 gap-2.5">
                        {field.value.map((tag: any) => (
                          <Badge
                            key={tag}
                            className="subtle-medium 
                            background-light700_dark300  text-light400_light500
                          flex items-center justify-center gap-2 rounded-md border-none px-4 py-2"
                          >
                            {tag}
                            <Image
                              onClick={() => {
                                handleRemoveTag(tag, field);
                              }}
                              src="/assets/icons/close.svg"
                              alt="close icon"
                              width={12}
                              height={12}
                              className="invert-colors cursor-pointer object-contain invert-0 dark:invert"
                            />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </>
                </FormControl>
                <FormDescription className="body-regular mt-2.5 text-light-500">
                  Add up to three tags that best describe your question. You
                  need to press Enter to add a tag
                </FormDescription>
                <FormMessage className="text-red-900" />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="primary-gradient w-fit !text-light-900 "
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>{type === "edit" ? "Editing..." : "Submitting..."}</>
            ) : (
              <>{type === "edit" ? "Edit Question" : "Ask a Question"}</>
            )}
          </Button>
        </form>
      </Form>
    </>
  );
}
