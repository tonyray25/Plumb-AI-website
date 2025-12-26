"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Icosahedron, Octahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

interface GeometricAccentProps {
  scale?: number;
  rotationSpeed?: number;
  variant?: "icosahedron" | "octahedron" | "cube";
}

export default function GeometricAccent({
  scale = 1,
  rotationSpeed = 0.5,
  variant = "icosahedron",
}: GeometricAccentProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Multi-axis slow rotation
      meshRef.current.rotation.x += rotationSpeed * 0.008;
      meshRef.current.rotation.y += rotationSpeed * 0.01;
    }
    if (groupRef.current) {
      // Gentle floating
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.05;
    }
  });

  const renderShape = () => {
    switch (variant) {
      case "octahedron":
        return (
          <Octahedron ref={meshRef} args={[1, 0]}>
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.8}
              roughness={0.2}
              emissive="#ff6b35"
              emissiveIntensity={0.1}
            />
          </Octahedron>
        );
      case "cube":
        return (
          <mesh ref={meshRef}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial
              color="#ff6b35"
              metalness={0.8}
              roughness={0.2}
              emissive="#ff6b35"
              emissiveIntensity={0.1}
            />
          </mesh>
        );
      case "icosahedron":
      default:
        return (
          <Icosahedron ref={meshRef} args={[1, 1]}>
            <MeshDistortMaterial
              color="#ff6b35"
              metalness={0.8}
              roughness={0.2}
              distort={0.2}
              speed={2}
            />
          </Icosahedron>
        );
    }
  };

  return (
    <group ref={groupRef} scale={scale}>
      {renderShape()}

      {/* Wireframe overlay */}
      <mesh ref={meshRef} scale={1.02}>
        {variant === "octahedron" ? (
          <octahedronGeometry args={[1, 0]} />
        ) : variant === "cube" ? (
          <boxGeometry args={[1, 1, 1]} />
        ) : (
          <icosahedronGeometry args={[1, 1]} />
        )}
        <meshBasicMaterial
          color="#ffffff"
          wireframe
          opacity={0.1}
          transparent
        />
      </mesh>

      {/* Glow effect */}
      <pointLight
        position={[0, 0, 0]}
        intensity={0.5}
        distance={3}
        color="#ff6b35"
      />
    </group>
  );
}
