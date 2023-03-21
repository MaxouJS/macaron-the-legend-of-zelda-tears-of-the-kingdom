import Logo from "../../../../public/images/Logo.svg";

export default function Navigation() {
  return (
    <div className="w-full bg-gradient-to-r from-[red] via-transparent to-[red] bg-clip-padding backdrop-filter backdrop-blur-md shadow-xl shadow-white/10 border-b border-white/50 l text-white z-10 font-sans">
      <nav className="flex items-center">
        <div className="flex container mx-auto p-4">
          <a href="/" className="font-black md:flex hidden hover:scale-125 duration-200 ease-out">
            <img src={Logo} className="h-8" />
          </a>
          <div className="ml-auto space-x-8 md:flex hidden items-center text-xs font-medium">
            <a href="#explore" className="hover:scale-125 duration-200 ease-out">Explore</a>
            <a href="#pre-order" className="hover:scale-125 duration-200 ease-out">Pre-Order</a>
          </div>
          <div className="mx-auto space-x-8 md:hidden flex items-center text-xs font-medium">
            <a href="#explore" className="hover:scale-125 duration-200 ease-out">Explore</a>
            <a href="#pre-order" className="hover:scale-125 duration-200 ease-out">Pre-Order</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
