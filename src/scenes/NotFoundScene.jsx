import { Html, Loader, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { RiArrowGoBackFill } from "react-icons/ri";

import Footer from "../components/static/navigation/Footer";
import Navigation from "../components/static/navigation/Navigation";
import Blob from "../components/static/props/Blob";

export default function NotFoundScene() {
  return (
    <section id="landing" className="snap-start h-screen w-screen text-neutral-900">
      <Canvas
        shadows
      >
        <Html fullscreen>
          <Navigation isFixed={true} />
          <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8">
            <header className="flex flex-col items-center justify-center space-y-8">
              <h1 className="lg:text-8xl md:text-6xl text-4xl scale-150 font-display">404 Not Found</h1>
              <h2 className="lg:text-lg md:text-md text-sm font-mono">Lorem ipsum</h2>
              <a href="/" className="flex items-center bg-gradient-to-br from-indigo-600 to-sky-600 lg:px-16 md:px-12 px-8 lg:py-6 md:py-4 py-3 rounded-full lg:text-4xl md:text-2xl text-neutral-50 text-xl font-black hover:scale-110 duration-200">Back <RiArrowGoBackFill className="ml-2"/></a>
            </header>
            <Footer />
          </div>
        </Html>
        <PerspectiveCamera>
          <ambientLight
            castShadow
          />
          <directionalLight
            castShadow
            position={[20, 20, 20]}
            shadow-mapSize-height={1024}
            shadow-mapSize-width={1024}
          />
          <Blob
            position={[0, 0, -50]}
            scale={[10, 10, 10]}
            color={'white'}
          />
        </PerspectiveCamera>
      </Canvas>
      <Loader />
    </section>
  );
};
