import { questionsExample, tagsExample } from "@/constants";
import Image from "next/image";

function Question({ question }: { question: string }) {
  return (
    <div className="flex w-full justify-between gap-2 ">
      <p>{question}</p>
      <Image
        src="/assets/icons/arrow-right.svg"
        alt="arrow right icon"
        width={26}
        height={26}
      />
    </div>
  );
}
function Tag() {
  return <div className="bg-blue-400 px-2 py-1"></div>;
}

const RightSideBar = () => {
  return (
    <aside className="background-light900_dark200 flex flex-col items-start px-6 pt-36 text-white  lg:w-[266px]">
      <section className=" flex w-full flex-col gap-4 ">
        <h3 className="h3-bold pb-6">Top Questions</h3>

        {questionsExample.map((question, index) => (
          <Question key={index} question={question} />
        ))}
      </section>
      <section>
        <h3 className="h3-bold mt-8 pb-6">Popular Tags</h3>
        {tagsExample.map((tag, index) => (
          <Tag key={index} />
        ))}
      </section>
    </aside>
  );
};

export default RightSideBar;
