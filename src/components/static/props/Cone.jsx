import { useRef } from 'react';

export default function Cone(props) {
  const ref = useRef();

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow
      position={props.position}
      frustumCulled={false}
    >
      <coneGeometry
        args={props.size}
      />
      <meshStandardMaterial color={props.color} />
    </mesh>

  );
};
