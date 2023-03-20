import Logo from "../../../../public/images/Logo.svg";

export default function Navigation() {
  return (
    <div className="absolute w-full bg-[#E60012] text-white z-10">
      <nav className="flex items-center">
        <div className="flex container mx-auto p-4">
          <a href="/" className="font-black md:flex hidden hover:scale-110 duration-200">
            <img src={Logo} className="h-8" />
          </a>
          <div className="ml-auto space-x-8 md:flex hidden items-center text-xs font-medium">
            <a href="#explore" className="hover:scale-110 duration-200">Explore</a>
            <a href="#pre-order" className="hover:scale-110 duration-200">Pre-Order</a>
          </div>
          <div className="mx-auto space-x-8 md:hidden flex items-center text-xs font-medium">
            <a href="#explore" className="hover:scale-110 duration-200">Explore</a>
            <a href="#pre-order" className="hover:scale-110 duration-200">Pre-Order</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
