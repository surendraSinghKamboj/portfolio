import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Decal, OrbitControls, useTexture } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <mesh scale={2.75}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial color="#c0b8b8" flatShading />
      <Decal position={[0, 0, 1]} rotation={[2 * Math.PI, 0, 0]} map={decal} />
    </mesh>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas shadowMap frameloop="demand" gl={{ alpha: false }}>
      <ambientLight intensity={0.25} />
      <directionalLight intensity={0.5} position={[0, 10, 0]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
    </Canvas>
  );
};

export default BallCanvas;
