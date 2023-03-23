import { Html, Loader, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Footer from "../components/static/navigation/Footer";

export default function Where() {
  return (
    <section id="pre-order" className="snap-start h-screen w-screen text-neutral-900">
      <Canvas
        shadows
      >
        <Html fullscreen>
          <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8">
            <header className="flex flex-col items-center justify-center space-y-8">
              <h2 className="lg:text-4xl md:text-2xl text-xl scale-150 font-black duration-200">Pre-Order</h2>
              <h2 className="lg:text-lg md:text-md text-sm font-mono duration-200">Lorem ipsum</h2>
              <a href="#pricing" className="flex items-center bg-gradient-to-br from-indigo-600 to-sky-600 lg:px-16 md:px-12 px-8 lg:py-6 md:py-4 py-3 rounded-full border-b border-white lg:text-4xl md:text-2xl text-neutral-50 text-xl font-black hover:scale-110 duration-200">Start</a>
            </header>
          </div>
          <Footer />
        </Html>
        <PerspectiveCamera>
          <ambientLight />
          <directionalLight position={[5, 20, 10]} />
          <Sky />
        </PerspectiveCamera>
      </Canvas>
      <Loader />
    </section>
  );
};
