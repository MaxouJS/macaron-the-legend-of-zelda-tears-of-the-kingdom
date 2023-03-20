import { Html, Loader, PerspectiveCamera, PresentationControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Logo from "../../public/images/Logo.png";
import NintendoSwitch from "../../public/images/NintendoSwitch.svg";

import Model from "../components/dynamic/Model";
import Navigation from "../components/static/navigation/Navigation";
import BottomArrow from "../components/static/layout/BottomArrow";

export default function What() {
  return (
    <section id="home" className="snap-start h-screen w-screen text-neutral-900">
      <Canvas
        shadows
      >
        <Html fullscreen>
          <Navigation isFixed={true} />
          <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8 text-neutral-50">
            <header className="flex flex-col items-center justify-center space-y-8">
              <h1><img src={Logo} className="md:h-[33.33vh] h-[25vh] pointer-events-none duration-200" /></h1>
              <div className="flex md:space-x-8 space-x-4 duration-200 lg:text-2xl md:text-xl text-lg font-black ">
                <a href="#pricing" className="flex items-center bg-gradient-to-br from-teal-600 to-teal-800 lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 hover:scale-110 duration-200">Explore</a>
                <a href="#pre-order" className="flex items-center bg-gradient-to-br from-neutral-50 to-neutral-200 text-teal-800 lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 hover:scale-110 duration-200">Pre-Order</a>
              </div>
            </header>
            <BottomArrow anchor="#explore" />
          </div>
        </Html>
        <PresentationControls
          polar={[-0.2, 0.2]}
          azimuth={[-0.2, 0.2]}
        >
          <PerspectiveCamera>
            <ambientLight />
            <directionalLight position={[5, 20, 10]} />
            <Sky />
            <Model
              name="Box"
              scale={[20, 2, 10]}
              position={[15, -4, -10]}
            />
            <Model
              name="Box"
              scale={[75, 10, 50]}
              position={[-75, -40, -100]}
            />
            <Model
              name="Box"
              scale={[10, 10, 10]}
              position={[-100, -20, -150]}
            />
            <Model
              name="Box"
              scale={[10, 10, 10]}
              position={[-125, -15, -150]}
            />
            <Model
              name="Cloud"
              scale={[100, 200, 100]}
              position={[-400, -100, -400]}
              rotation={[0, Math.PI * 2.5, 0]}
            />
            <Model
              name="Cloud"
              scale={[100, 200, 100]}
              position={[200, -50, -200]}
              rotation={[0, -Math.PI * 2.5, 0]}
            />
          </PerspectiveCamera>
        </PresentationControls>
      </Canvas>
      <Loader />
    </section>
  );
};
