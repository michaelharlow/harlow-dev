"use client";

import React, { Suspense, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
} from "@react-three/drei";
import * as THREE from "three";

function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
      geometry={new THREE.IcosahedronGeometry(0.6, 0)}
      rotation={[0.4, 0.2, 0]}
    >
      <meshStandardMaterial color={hovered ? "hotpink" : "cyan"} />
    </mesh>
  );
}

export function Tree(props) {
  const { nodes, materials } = useGLTF("assets/pine-tree2.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.332}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials["tree-leaf"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials["tree-bark"]}
        />
      </group>
    </group>
  );
}

const MovingCamera = () => {
  const ref = useRef();
  return (
    <PerspectiveCamera
      ref={ref}
      makeDefault
      position={[0, 0, 4]}
      rotation={[0, 0, 0]}
    />
  );
};

export default function Shapes() {
  return (
    <div className="flex items-center justify-center relative lg:w-3/4 lg:h-3/4 w-full h-[50vh]">
      <Canvas>
        <MovingCamera />
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <Float speed={2} rotationIntensity={2}>
          <Box position={[-0.1, 0, 0]} />
        </Float>
        <Tree position={[1, -1, 1]} scale={0.6} rotation={[0, 137, 0]} />
        <Tree position={[-1, -1, -1]} scale={0.7} rotation={[0, 90, 0]} />
        <Tree position={[-1.5, -1, 0]} scale={0.6} rotation={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
