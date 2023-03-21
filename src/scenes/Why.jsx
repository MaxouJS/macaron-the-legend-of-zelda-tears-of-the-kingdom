import { Html, Loader, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import BottomArrow from "../components/static/layout/BottomArrow";
import TopArrow from "../components/static/layout/TopArrow";

export default function Why() {
  return (
    <section id="explore" className="snap-start h-screen w-screen text-neutral-900">
      <Canvas
        className="bg-gradient-to-b from-sky-50 via-teal-200 to-blue-400"
      >
        <Html fullscreen>
          <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8">
            <TopArrow anchor="#home" />
            <header className="flex flex-col items-center justify-center space-y-8">
              <h2 className="lg:text-6xl md:text-4xl text-2xl scale-150 font-black duration-200">Explore</h2>
              <h3 className="lg:text-lg md:text-md text-sm font-mono duration-200">Lorem ipsum</h3>
              <a href="#pricing" className="text-center bg-gradient-to-b from-[red]/90 to-[red]/75 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-white/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 text-neutral-50 lg:text-2xl md:text-xl text-lg font-black hover:scale-110 hover:animate-pulse ease-out duration-200">Pre-Order</a>
            </header>
            <BottomArrow anchor="#pre-order" />
          </div>
        </Html>
        <PerspectiveCamera>
          <ambientLight />
          <directionalLight position={[5, 20, 10]} />
        </PerspectiveCamera>
      </Canvas>
      <Loader />
    </section>
  );
};
