import { Html, Loader, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import BottomArrow from "../components/static/layout/BottomArrow";
import Blob from "../components/static/props/Blob";
import TopArrow from "../components/static/layout/TopArrow";

export default function Why() {
  return (
    <section id="proof-of-concept" className="snap-start h-screen w-screen text-neutral-900">
      <Canvas
        shadows
      >
        <Html fullscreen>
          <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8">
            <div className="flex flex-col items-center justify-center space-y-8">
              <h3 className="lg:text-8xl md:text-6xl text-4xl font-display duration-200">Proof of concept</h3>
            </div>
            <TopArrow anchor="#landing" />
            <BottomArrow anchor="#pricing" />
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
