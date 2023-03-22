import { useState } from "react";
import { Vector3 } from "three";
import { CameraShake, Loader, PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Bloom, DepthOfField, EffectComposer, HueSaturation, Noise, Vignette } from "@react-three/postprocessing";

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
        className="bg-gradient-to-b from-sky-50 via-teal-400 to-blue-800"
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
            position={[0.5, 0, -1.5]}
          />
          <Model
            name="Box"
            scale={[600, 1, 200]}
            position={[0, -1, 0]}
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
        </PerspectiveCamera>
      </Canvas>
      <Loader />
      <div className="-mt-[100vh]">
        <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8 text-neutral-50">
          <div className="flex flex-col items-center justify-center space-y-8">
            <a href="#pre-order" className="text-center bg-gradient-to-b from-[red]/90 to-[red]/75 text-neutral-50 backdrop-blur-md border border-neutral-50/75 shadow-xl shadow-white/25 lg:w-48 md:w-40 w-32 lg:py-4 md:py-3 py-2 hover:scale-110 hover:animate-pulse ease-out duration-200">Pre-Order</a>
          </div>
        </div>
      </div>
    </section>
  );
};
