"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, Text } from "@react-three/drei";
import * as THREE from "three";

interface ContractDocumentProps {
  scale?: number;
  rotationSpeed?: number;
}

export default function ContractDocument({
  scale = 1,
  rotationSpeed = 0.3,
}: ContractDocumentProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow auto-rotation
      groupRef.current.rotation.y += rotationSpeed * 0.01;
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Main document body */}
      <RoundedBox args={[2, 2.8, 0.08]} radius={0.02} smoothness={4}>
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.3}
          roughness={0.7}
        />
      </RoundedBox>

      {/* Document front face with lines */}
      <group position={[0, 0, 0.05]}>
        {/* Header area */}
        <mesh position={[0, 1.1, 0]}>
          <planeGeometry args={[1.6, 0.15]} />
          <meshStandardMaterial color="#ff6b35" metalness={0.5} roughness={0.5} />
        </mesh>

        {/* Text lines */}
        {[-0.6, -0.3, 0, 0.3, 0.6].map((yPos, i) => (
          <mesh key={i} position={[0, yPos, 0]}>
            <planeGeometry args={[1.6, 0.06]} />
            <meshStandardMaterial
              color="#3a3a3a"
              metalness={0.2}
              roughness={0.8}
            />
          </mesh>
        ))}

        {/* Signature line */}
        <mesh position={[0.4, -1.0, 0]}>
          <planeGeometry args={[0.8, 0.02]} />
          <meshStandardMaterial color="#ff6b35" metalness={0.5} roughness={0.5} />
        </mesh>

        {/* Checkmark / approval indicator */}
        <mesh position={[-0.6, -1.0, 0]}>
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial color="#22c55e" metalness={0.5} roughness={0.5} />
        </mesh>
      </group>

      {/* Glowing edge effect */}
      <mesh position={[0, 0, -0.05]}>
        <planeGeometry args={[2.1, 2.9]} />
        <meshBasicMaterial color="#ff6b35" opacity={0.1} transparent />
      </mesh>
    </group>
  );
}
