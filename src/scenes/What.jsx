import { useState } from "react";
import { Vector3 } from "three";
import { CameraShake, Loader, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Noise, Vignette } from "@react-three/postprocessing";

import Logo from "/images/Logo.png";

import Model from "../components/dynamic/Model";
import Navigation from "../components/static/navigation/Navigation";
import BottomArrow from "../components/static/layout/BottomArrow";

{/* Creates a 3D Rig that shake the camera automatically and the camera smoothly follows the mouse */}
function Rig() {
  const [vector3] = useState(() => new Vector3());

  useFrame(({state, camera, mouse}) => {
    camera.position.lerp(vector3.set(mouse.x * 1, mouse.y * 1, 5), 1);
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
        className="bg-gradient-to-b from-blue-800 via-teal-400 to-sky-50"
      >
        {/* Postprocessing effects */}
        {/*
        <EffectComposer>
          <HueSaturation saturation={0.125} />
          <Noise opacity={0.05} />
          <DepthOfField focusDistance={0} focalLength={0.1} bokehScale={10} height={1024} />
          <Bloom intensity={1} luminanceThreshold={1} luminanceSmoothing={1} height={1024} />
          <Vignette offset={0.1} darkness={0.75} />
        </EffectComposer>
        */}
        {/* 2D UI */}
        {/* Camera and camera effects */}
        <Rig />
        <PerspectiveCamera>
          {/* Lights */}
          <ambientLight intensity={0.75} />
          <pointLight position={[5, 20, 10]} intensity={0.75} />
          {/* 3D Models */}
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
            <h1 className="backdrop-blur-none pointer-events-none">
              <img src={Logo} className="md:h-[50vh] h-[25vh] duration-200" />
            </h1>
            <div className="flex md:space-x-8 space-x-4 lg:text-2xl md:text-xl text-lg font-black duration-200">
              <a href="#explore" className="text-center bg-gradient-to-br from-emerald-400/75 to-teal-800/75 text-neutral-50 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-white/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 hover:scale-110 hover:animate-pulse ease-out duration-200">Explore</a>
              <a href="#pre-order" className="text-center bg-gradient-to-b from-[red]/90 to-[red]/75 text-neutral-50 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-white/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 hover:scale-110 hover:animate-pulse ease-out duration-200">Pre-Order</a>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};
