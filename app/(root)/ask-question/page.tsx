import Question from "@/components/forms/Question";
const page = () => {
  return (
    <div>
      <div>
        <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
        <div className="mt-9 ">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default page;
