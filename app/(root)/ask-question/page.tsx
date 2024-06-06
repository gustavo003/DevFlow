import Question from "@/components/forms/Question";
import { findUser } from "@/lib/actions/user.action";
const page = async () => {
  // const userId = auth().userId;
  // if (!userId) redirect("/sign-in");
  const userId = "1234567890";
  const mongoUser = await findUser({ userId });
  console.log(mongoUser._id);
  return (
    <div>
      <div>
        <h1 className="h1-bold text-dark100_light900">Ask a question</h1>
        <div className="mt-9 ">
          <Question mongoUserId={JSON.stringify(mongoUser._id)} />
        </div>
      </div>
    </div>
  );
};

export default page;
