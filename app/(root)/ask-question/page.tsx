import Question from "@/components/forms/Question";
import { findUser } from "@/lib/actions/user.action";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const page = async () => {
  // const userId = auth().userId;
  // if (!userId) redirect("/sign-in");
  const userId = "1234567890";
  const mongoUser = await findUser({ userId });
  console.log(mongoUser);
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
