import Logo from "../../../../public/images/Logo.svg";

export default function Navigation() {
  return (
    <div className="w-full bg-gradient-to-r from-[red] via-transparent to-[red] backdrop-blur-md shadow-xl shadow-white/10 border-b border-white/50 text-white font-sans">
      <nav className="flex items-center">
        <div className="flex items-center container mx-auto md:h-16 h-12 px-4">
          <a href="/" className="font-black md:flex hidden hover:scale-125 duration-200 ease-out">
            <img src={Logo} className="h-8" />
          </a>
          <div className="flex md:ml-auto md:mx-0 mx-auto space-x-8 items-center text-xs font-medium">
            <a href="#home" className="hover:scale-125 duration-200 ease-out">Home</a>
            <a href="#explore" className="hover:scale-125 duration-200 ease-out">Explore</a>
            <a href="#pre-order" className="hover:scale-125 duration-200 ease-out">Pre-Order</a>
          </div>
        </div>
      </nav>
    </div>
  );
};
