import { Canvas, useFrame } from "react-three-fiber";
import React, { useRef, useState } from "react";
import { useSpring, a } from "react-spring/three";

const Thing = () => {
  // const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  // const [isIncreasing, setIsIncreasing] = useState(true);
  const props = useSpring({
    scale: active ? [2, 2, 2] : [1, 1, 1],
    color: active ? "hotpink" : "gray"
  });
  const ref = useRef(null);
  useFrame(() => {
    ref.current.rotation.x = ref.current.rotation.y += 0.01;
    // console.log(ref.current.scale.x);
    // ref.current.scale.x = ref.current.scale.x += isIncreasing ? 0.01 : -0.01;

    // if (ref.current.scale.x < 1) {
    //   setIsIncreasing(true);
    //   ref.current.scale.x = 1;
    // }

    // if (ref.current.scale.x > 5) {
    //   setIsIncreasing(false);
    //   ref.current.scale.x = 5;
    // }
  });

  return (
    <a.mesh ref={ref} onClick={() => setActive(!active)} scale={props.scale}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshNormalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

const App = () => (
  <>
    <h1 className="grad">Happy 2020</h1>
    <Canvas>
      <Thing />
    </Canvas>
  </>
);

export default App;
