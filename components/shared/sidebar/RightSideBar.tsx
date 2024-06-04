import { questionsExample, tagsExample } from "@/constants";
import { Question, Tag } from "@/types";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

function QuestionComponent({ question }: { question: Question }) {
  return (
    <Link
      href={`/questions/${question.id}`}
      className="flex cursor-pointer items-center justify-between gap-7"
    >
      <p className="body-medium text-dark500_light700">{question.name}</p>
      <Image
        src="/assets/icons/chevron-right.svg"
        alt="arrow right icon"
        width={26}
        height={26}
        className="invert-colors"
      />
    </Link>
  );
}
function TagComponent({ tag }: { tag: Tag }) {
  return (
    <Link href={`/tags/${tag.id}`} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {tag.name}
      </Badge>
      <p className="small-medium text-dark500_light700">{tag.totalQuestions}</p>
    </Link>
  );
}

const RightSideBar = () => {
  return (
    <aside
      className="background-light900_dark200
    light-border sticky right-0 top-0 flex h-screen 
    flex-col justify-between overflow-y-auto border-r
     p-6 pt-36 shadow-light-300 dark:shadow-none max-lg:items-start max-sm:hidden lg:w-[350px]"
    >
      <div>
        <h3 className="h3-bold pb-6">Top Questions</h3>
        <div className="text-dark200_light900 mt-7 flex w-full flex-col gap-[30px]">
          {questionsExample.map((question, index) => (
            <QuestionComponent key={question.id} question={question} />
          ))}
        </div>
      </div>
      <div className="mt-7 flex flex-col gap-4">
        <h3 className="h3-bold mt-8 pb-6">Popular Tags</h3>
        {tagsExample.map((tag, index) => (
          <TagComponent key={index} tag={tag} />
        ))}
      </div>
    </aside>
  );
};

export default RightSideBar;
