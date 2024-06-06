import Image from "next/image";
import { Input } from "@/components/ui/input";

interface Props {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses: string;
}
const SearchQuestion = ({ props }: { props: Props }) => {
  return (
    <div
      className={`background-light800_darkgradient 
      relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4 ${props.otherClasses}`}
    >
      {props.iconPosition === "left" && (
        <Image
          src={props.imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
      <Input
        type="text"
        placeholder={props.placeholder}
        className="paragraph-regular no-focus placeholder background-light800_darkgradient border-none shadow-none outline-none"
      />
      {props.iconPosition === "right" && (
        <Image
          src={props.imgSrc}
          alt="search icon"
          width={24}
          height={24}
          className="cursor-pointer"
        />
      )}
    </div>
  );
};

export default SearchQuestion;
