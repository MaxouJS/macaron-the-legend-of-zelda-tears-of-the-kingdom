import { RiPlayFill, RiTimerFill } from "react-icons/ri";

export default function Timer(props) {
  return (
    <div className={`flex items-center justify-center ${props.isActive ? 'bg-red-600 scale-100' : 'bg-neutral-900 scale-75 hover:scale-100 hover:animate-pulse'} rounded-full h-12 w-12 duration-200`}>
      <p className="text-neutral-50 font-black">
        {
          (
            props.isActive
          ) ? (
            <span className="flex items-center text-md">
              {props.time} <RiTimerFill />
            </span>
          ) : (
            <span className="flex items-center text-2xl ">
              <RiPlayFill />
            </span>
          )
        }
      </p>
    </div>
  );
};
