import { useRef } from 'react';

export default function Plane(props) {
  const ref = useRef();

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={props.position}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={props.scale}
      frustumCulled={false}
    >
      <planeBufferGeometry />
      <meshPhongMaterial color={props.color} receiveShadow />
    </mesh>
  );
};
