import { Html, Loader, PerspectiveCamera, PresentationControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Blob from "../components/static/props/Blob";
import Box from "../components/static/props/Box";
import TopArrow from "../components/static/layout/TopArrow";
import Footer from "../components/static/navigation/Footer";

export default function How() {
  return (
    <section id="pricing" className="snap-start h-screen w-screen text-neutral-900">
      <Canvas>
        <Html fullscreen>
          <div className="flex h-screen w-screen items-center justify-center text-center container mx-auto p-8">
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center bg-white/25 bg-clip-padding backdrop-filter backdrop-blur-md rounded-xl shadow-xl shadow-white/10 border border-white/50 lg:p-12 md:p-10 p-8 space-y-8"> 
                <div className="h-[25vh] w-[25vh]">
                  <Canvas>
                    <PresentationControls
                      snap={<Box />}
                    >
                      <PerspectiveCamera>
                        <ambientLight />
                        <directionalLight position={[5, 20, 10]} />
                        <Box
                          position={[0, 0, 0]}
                          size={[3, 3, 3]}
                          color={'blue'}
                        />
                      </PerspectiveCamera>
                    </PresentationControls>
                  </Canvas>
                </div>
                <span className="text-xs text-neutral-900/25">(Drag around the product to move it)</span>
                <h2 className="lg:text-6xl md:text-4xl text-2xl font-display duration-200">Lorem Ipsum</h2>
                <p className="lg:text-md md:text-sm text-xs">Lorem Ipsum</p>
                <p className="lg:text-4xl md:text-2xl text-xl font-black">29 A$</p>
              </div>
            </div>
            <Footer />
            <TopArrow anchor="#proof-of-concept" />
          </div>
        </Html>
        <PerspectiveCamera>
          <ambientLight />
          <directionalLight position={[20, 20, 20]} />
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
