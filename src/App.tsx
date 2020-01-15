import { extend, Canvas, useFrame } from "react-three-fiber";
import React, { useRef, useState } from "react";
import { useSpring, a } from "react-spring/three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
extend({ EffectComposer, RenderPass });

const Thing = () => {
  // const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  // const [isIncreasing, setIsIncreasing] = useState(true);
  const props = useSpring({
    scale: active ? [2, 2, 2] : [1, 1, 1],
    color: active ? "blue" : "hotpink"
  });
  const ref = useRef(null);
  useFrame(() => {
    ref.current.rotation.y += 0.01;
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
    <a.mesh
      position={[0, 0, -5]}
      ref={ref}
      onClick={() => setActive(!active)}
      scale={props.scale}
    >
      <sphereBufferGeometry attach="geometry" args={[1, 16, 16]} />
      <a.meshPhysicalMaterial attach="material" color={props.color} />
    </a.mesh>
  );
};

const Floor = () => {
  const ref = useRef(null);
  useFrame(() => {
    // ref.current.rotation.x = ref.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={ref} position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry />} attach="gemmetry" args={[100, 100]} />
      <meshPhysicalMaterial attach="material" color="red" />
    </mesh>
  );
};

const App = () => (
  <>
    <h1 className="grad">Happy 2020</h1>
    <Canvas>
      <ambientLight />
      <spotLight position={[0, 5, 10]} penumbra={1} />
      <Floor />
      <Thing />
      <effectComposer>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
      </effectComposer>
    </Canvas>
  </>
);

export default App;
