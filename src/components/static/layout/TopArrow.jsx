import { RiArrowDropUpLine } from "react-icons/ri";

export default function TopArrow(props) {
  return (
    <a href={props.anchor} className="absolute top-8">
      <RiArrowDropUpLine className="text-4xl hover:animate-pulse hover:scale-150 duration-200" />
    </a>
  );
};
