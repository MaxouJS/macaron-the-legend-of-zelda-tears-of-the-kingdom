import { useState } from "react";
import { Vector3 } from "three";
import { CameraShake, Loader, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

import Animation from "../components/dynamic/Animation";
import Model from "../components/dynamic/Model";
import Navigation from "../components/static/navigation/Navigation";
import YouTube from "react-youtube";

{/* Creates a 3D Rig that shake the camera automatically and the camera smoothly follows the mouse */}
function Rig() {
  const [vector3] = useState(() => new Vector3());

  useFrame(({state, camera, mouse}) => {
    camera.position.lerp(vector3.set(mouse.x * 0.5, mouse.y * 0.5, 5), 0.1);
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

export default function What() {
  return (
    <section id="home" className="snap-start h-screen w-screen text-neutral-900">
      {/* 3D Canvas */}
      <Canvas
        className="bg-gradient-to-b from-blue-800 via-teal-400 to-neutral-50"
      >
        {/* 2D UI */}
        {/* Camera and camera effects */}
        <Rig />
        <PerspectiveCamera>
          {/* Lights */}
          <ambientLight intensity={0.75} />
          <pointLight position={[5, 20, 10]} intensity={0.75} />
          {/* 3D Models */}
          <Animation
            name="MaleDummyIdle"
            scale={[1, 1, 1]}
            position={[3, -1, -0.5]}
            rotation={[0, Math.PI * 1.5, 0]}
          />
          <Model
            name="Box"
            scale={[8, 1, 4]}
            position={[6, -2, -0.5]}
          />
          <Model
            name="Box"
            scale={[75, 10, 50]}
            position={[-75, -40, -100]}
          />
          <Model
            name="Box"
            scale={[75, 10, 50]}
            position={[50, -80, -200]}
          />
          <Model
            name="LeftCloud"
            scale={[50, 100, 50]}
            position={[-200, 50, -200]}
            rotation={[0, Math.PI * 2.5, 0]}
          />
          <Model
            name="LeftCloud"
            scale={[50, 50, 50]}
            position={[-200, 150, -400]}
            rotation={[0, Math.PI * 2.5, 0]}
          />
          <Model
            name="LeftCloud"
            scale={[200, 200, 200]}
            position={[-400, -200, -400]}
            rotation={[0, Math.PI * 2.5, 0]}
          />
          <Model
            name="RightCloud"
            scale={[50, 100, 50]}
            position={[200, 0, -200]}
            rotation={[0, -Math.PI * 2.5, 0]}
          />
          <Model
            name="RightCloud"
            scale={[50, 50, 50]}
            position={[200, 100, -400]}
            rotation={[0, -Math.PI * 2.5, 0]}
          />
          <Model
            name="RightCloud"
            scale={[200, 200, 200]}
            position={[400, -400, -400]}
            rotation={[0, -Math.PI * 2.5, 0]}
          />
        </PerspectiveCamera>
      </Canvas>
      <Loader />
      <div className="-mt-[100vh]">
        <Navigation />
        <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8 text-neutral-50">
          <header className="flex flex-col items-center justify-center space-y-8 md:-mt-32 -mt-24">
            <h2 className="bg-gradient-to-r from-transparent via-emerald-600/75 to-transparent backdrop-blur-none font-black lg:text-2xl border-y border-neutral-50/50 py-4">
              <span className="drop-shadow-[2px_2px_rgba(0,0,0,0.5)]">The adventure begins on May 12</span>
            </h2>
            <h3 className="bg-gradient-to-r from-transparent via-emerald-600/75 to-transparent backdrop-blur-none lg:text-md md:text-sm text-xs border-y border-neutral-50/50 py-4">
              <span className="drop-shadow-[1px_1px_rgba(0,0,0,0.5)]">Watch the trailer below to see what Link’s latest quest has in store, including never before seen weapons and mysterious vehicles…</span>
            </h3>
            <YouTube videoId="fYZuiFDQwQw" className="backdrop-blur-none px-8" opts={{ height: 180, width: 320 }} />
            <div className="flex md:space-x-8 space-x-4 lg:text-2xl md:text-xl text-lg font-black duration-200">
              <a href="#explore" className="text-center bg-gradient-to-br from-emerald-400/75 to-teal-800/75 text-neutral-50 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-teal-800/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 hover:scale-110 hover:animate-pulse ease-out duration-200">Explore</a>
              <a href="#pre-order" className="text-center bg-gradient-to-b from-[red]/90 to-[red]/75 text-neutral-50 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-[red]/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 hover:scale-110 hover:animate-pulse ease-out duration-200">Pre-Order</a>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
