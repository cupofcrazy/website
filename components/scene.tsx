"use client";

import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { GradientTexture, MeshDistortMaterial } from "@react-three/drei";

import { Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const Scene = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Canvas camera={{ fov: 75, position: [0, 0, 3], far: 1000, near: 0.5 }}>
      <ambientLight intensity={1} />
      <directionalLight color="#ffffff" position={[0, 0, 5]} />

      {children}
      <spotLight position={[0, 20, 0]} penumbra={1} castShadow angle={0.2} />
      <SceneContainer />
      <Environment preset="city" />
    </Canvas>
  );
}


const SceneContainer = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);
  const distortMaterialRef = useRef<any>();


  useFrame((state, delta) => {
    if (meshRef.current && groupRef.current) {
      groupRef.current.rotation.y = lerp(groupRef.current.rotation.y, state.pointer.x, 0.1);
      groupRef.current.rotation.x = lerp(groupRef.current.rotation.x, -state.pointer.y * 0.5, 0.1);

    }
  });
  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh ref={meshRef}
        scale={1.25}
        castShadow
        receiveShadow
      >
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial ref={distortMaterialRef} distort={0.5} speed={3} factor={1}>
          <GradientTexture stops={[0, 1]} colors={["#9ed3ff", "#0062ca"]} />
        </MeshDistortMaterial>
      </mesh>
    </group>
  );
}


const lerp = (start: number, end: number, amount: number) => {
  return (1 - amount) * start + amount * end;
}