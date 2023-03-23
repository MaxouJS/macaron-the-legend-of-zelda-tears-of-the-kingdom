import { useState } from "react";
import { Vector3 } from "three";
import { CameraShake, Loader, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import Screenshot1 from "/images/screenshots/Screenshot1.jpg";
import Screenshot2 from "/images/screenshots/Screenshot2.jpg";
import Screenshot3 from "/images/screenshots/Screenshot3.jpg";
import Screenshot4 from "/images/screenshots/Screenshot4.jpg";

import Animation from "../components/dynamic/Animation";

{/* Creates a 3D Rig that shake the camera automatically and the camera smoothly follows the mouse */}
function Rig() {
  const [vector3] = useState(() => new Vector3());

  useFrame(({state, camera, mouse}) => {
    camera.position.lerp(vector3.set(mouse.x * 0.1, mouse.y * 0.1, 5), 0.1);
  });

  return (
    <CameraShake
      maxXaw={0.01}
      maxYaw={0.01}
      maxPitch={0.01}
      maxRoll={0.01}
      yawFrequency={0.5}
      pitchFrequency={0.5}
      rollFrequency={0.5}
    />
  );
}

export default function Why() {
  return (
    <section id="explore" className="snap-start h-screen w-screen text-neutral-900">
      {/* 3D Canvas */}
      <Canvas
        className="bg-gradient-to-b from-neutral-50 to-neutral-50"
      >
        {/* 2D UI */}
        {/* Camera and camera effects */}
        <Rig />
        <PerspectiveCamera
          position={[0, -1.75, 5]}
        >
          {/* Lights */}
          <ambientLight intensity={0.75} />
          <pointLight position={[5, 20, 10]} intensity={0.75} />
          {/* 3D Models */}
          <Animation
            name="MaleDummyIdle"
            scale={[1, 1, 1]}
            position={[0.4, 0, -0.5]}
            rotation={[0, Math.PI * 1.5, 0]}
          />
        </PerspectiveCamera>
      </Canvas>
      <Loader />
      {/* TailwindCSS UI */}
      <div className="-mt-[100vh]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 grid-cols-1 h-screen w-screen items-center justify-center text-center container mx-auto p-8 text-neutral-900 duration-200">
          <div className="flex flex-col items-center justify-center space-y-8 xl:col-span-1 lg:col-span-2 md:col-span-3 col-span-1 backdrop-blur-none">
            <h2 className="flex flex-col font-black lg:text-4xl md:text-2xl text-xl mx-auto">
              <span>Explore the vast land</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-800">—and skies—</span>
              <span>of Hyrule</span>
            </h2>
            <div className="grid grid-cols-2 md:gap-4 gap-2">
              <a href={Screenshot1} target="_blank">
                <img src={Screenshot1} className="border border-neutral-50/75 hover:shadow-xl hover:shadow-emerald-800/25 duration-200" />
              </a>
              <a href={Screenshot2} target="_blank">
                <img src={Screenshot2} className="border border-neutral-50/75 hover:shadow-xl hover:shadow-emerald-800/25 duration-200" />
              </a>
              <a href={Screenshot3} target="_blank">
                <img src={Screenshot3} className="border border-neutral-50/75 hover:shadow-xl hover:shadow-emerald-800/25 duration-200" />
              </a>
              <a href={Screenshot4} target="_blank">
                <img src={Screenshot4} className="border border-neutral-50/75 hover:shadow-xl hover:shadow-emerald-800/25 duration-200" />
              </a>
            </div>
            <a href="#pre-order" className="text-center bg-gradient-to-b from-[red]/90 to-[red]/75 text-neutral-50 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-[red]/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 lg:text-2xl md:text-xl text-lg font-black hover:scale-110 hover:animate-pulse ease-out duration-200">Pre-Order</a>
          </div>
        </div>
      </div>
    </section>
  );
};
