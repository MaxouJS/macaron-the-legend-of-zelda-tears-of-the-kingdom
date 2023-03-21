import { RiArrowDropDownLine } from "react-icons/ri";

export default function BottomArrow(props) {
  return (
    <a href={props.anchor} className="fixed bottom-8">
      <RiArrowDropDownLine className="text-4xl hover:animate-pulse hover:scale-150 duration-200" />
    </a>
  );
};
