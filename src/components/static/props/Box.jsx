import { useRef } from 'react';

export default function Box(props) {
  const ref = useRef();

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={props.position}
      frustumCulled={false}
    >
      <boxGeometry
        args={props.size}
      />
      <meshStandardMaterial color={props.color} />
    </mesh>

  );
};
