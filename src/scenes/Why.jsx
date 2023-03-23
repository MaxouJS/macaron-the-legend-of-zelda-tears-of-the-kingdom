import { useState } from "react";
import { Vector3 } from "three";
import { CameraShake, Loader, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Noise, Vignette } from "@react-three/postprocessing";

import Trailer from "/videos/Trailer.mp4";

import Animation from "../components/dynamic/Animation";
import Model from "../components/dynamic/Model";

{/* Creates a 3D Rig that shake the camera automatically and the camera smoothly follows the mouse */}
function Rig() {
  const [vector3] = useState(() => new Vector3());

  useFrame(({state, camera, mouse}) => {
    camera.position.lerp(vector3.set(mouse.x * 0.1, mouse.y * 0.1, 0), 0.1);
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
        className="bg-gradient-to-b from-neutral-50 to-neutral-200"
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
        <PerspectiveCamera
          position={[0, -1.75, 0]}
        >
          {/* Lights */}
          <ambientLight intensity={0.75} />
          <pointLight position={[5, 20, 10]} intensity={0.75} />
          {/* 3D Models */}
          <Animation
            name="MaleDummyIdle"
            scale={[1, 1, 1]}
            position={[0.5, 0, -0.5]}
            rotation={[0, Math.PI * 1.5, 0]}
          />
        </PerspectiveCamera>
      </Canvas>
      <Loader />
      {/* TailwindCSS UI */}
      <div className="-mt-[100vh]">
        <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-4 grid-cols-1 h-screen w-screen items-center justify-center text-center container mx-auto p-8 text-neutral-900 duration-200">
          <div className="flex flex-col items-center justify-center space-y-8 xl:col-span-1 lg:col-span-2 md:col-span-3 col-span-1 backdrop-blur-none md:p-16 p-8">
            <h2 className="flex flex-col font-black lg:text-4xl md:text-2xl text-xl">
              <span>Explore the vast land</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-teal-800">—and skies—</span>
              <span>of Hyrule</span>
            </h2>
            <h3 className="text-neutral-900/50 lg:text-md md:text-sm text-xs">Watch the trailer below to see what Link’s latest quest has in store, including never before seen weapons and mysterious vehicles…</h3>
            <iframe src={Trailer} className="h-[25vh]" allowfullscreen />
            <a href="#pre-order" className="text-center bg-gradient-to-b from-[red]/90 to-[red]/75 text-neutral-50 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-[red]/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 lg:text-2xl md:text-xl text-lg font-black hover:scale-110 hover:animate-pulse ease-out duration-200">Pre-Order</a>
          </div>
        </div>
      </div>
    </section>
  );
};
