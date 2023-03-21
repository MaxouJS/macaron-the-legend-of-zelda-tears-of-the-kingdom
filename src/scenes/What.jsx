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
      </Canvas>
      <Loader />
      <div className="-mt-[100vh]">
        <Navigation />
        <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8 text-neutral-50">
          <header className="flex flex-col items-center justify-center space-y-8">
            <h1 className="backdrop-blur-none pointer-events-none">
              <img src={Logo} className="md:h-[50vh] h-[25vh] duration-200" />
            </h1>
            <div className="flex md:space-x-8 space-x-4 duration-200 lg:text-2xl md:text-xl text-lg font-black ">
              <a href="#explore" className="flex items-center bg-gradient-to-br from-teal-600/75 to-teal-800/75 backdrop-blur-md shadow-xl shadow-white/10 ring-2 ring-teal-600/75 ring-offset-neutral-50/100 ring-offset-2 lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 hover:scale-110 hover:animate-pulse hover:ring-offset-teal-200/100 hover:text-teal-200 ease-out duration-200">Explore</a>
              <a href="#pre-order" className="flex items-center bg-gradient-to-br from-neutral-50/75 to-neutral-200/75 text-teal-800 backdrop-blur-md shadow-xl shadow-white/10 ring-2 ring-neutral-50/75 ring-offset-teal-800/75 ring-offset-2 lg:px-8 md:px-6 px-4 lg:py-4 md:py-3 py-2 hover:scale-110 hover:animate-pulse hover:ring-offset-teal-400/100 hover:text-teal-400 ease-out duration-200">Pre-Order</a>
            </div>
          </header>
          <BottomArrow anchor="#explore" />
        </div>
      </div>
    </section>
  );
};
