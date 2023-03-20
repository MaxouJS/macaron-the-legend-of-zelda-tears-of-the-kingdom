import { useRef } from 'react';
import { MeshDistortMaterial } from '@react-three/drei';

export default function Blob(props) {
  const ref = useRef()

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={props.position}
      scale={props.scale}
      frustumCulled={false}
    >
      <sphereBufferGeometry args={[2.5, 100, 100]} />
      <MeshDistortMaterial
        speed={1}
        distort={0.5}
        radius={1}
        color={props.color}
      />
    </mesh>
  );
};
