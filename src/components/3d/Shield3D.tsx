"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Shield3DProps {
  scale?: number;
  rotationSpeed?: number;
}

export default function Shield3D({
  scale = 1,
  rotationSpeed = 0.3,
}: Shield3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Create shield shape
  const shieldShape = useMemo(() => {
    const shape = new THREE.Shape();

    // Shield outline
    shape.moveTo(0, 1.5);
    shape.bezierCurveTo(0.8, 1.5, 1.2, 1.2, 1.2, 0.5);
    shape.bezierCurveTo(1.2, -0.3, 0.8, -1.0, 0, -1.5);
    shape.bezierCurveTo(-0.8, -1.0, -1.2, -0.3, -1.2, 0.5);
    shape.bezierCurveTo(-1.2, 1.2, -0.8, 1.5, 0, 1.5);

    return shape;
  }, []);

  const extrudeSettings = useMemo(() => ({
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 3,
  }), []);

  useFrame((state) => {
    if (groupRef.current) {
      // Slow auto-rotation
      groupRef.current.rotation.y += rotationSpeed * 0.01;
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Main shield body */}
      <mesh>
        <extrudeGeometry args={[shieldShape, extrudeSettings]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* Inner shield accent */}
      <mesh position={[0, 0, 0.15]} scale={0.75}>
        <extrudeGeometry args={[shieldShape, { ...extrudeSettings, depth: 0.05 }]} />
        <meshStandardMaterial
          color="#ff6b35"
          metalness={0.7}
          roughness={0.2}
          emissive="#ff6b35"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Center checkmark */}
      <group position={[0, 0, 0.25]}>
        <mesh position={[-0.15, -0.1, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <boxGeometry args={[0.3, 0.08, 0.05]} />
          <meshStandardMaterial color="#22c55e" metalness={0.5} roughness={0.3} />
        </mesh>
        <mesh position={[0.15, 0.15, 0]} rotation={[0, 0, Math.PI / 4]}>
          <boxGeometry args={[0.5, 0.08, 0.05]} />
          <meshStandardMaterial color="#22c55e" metalness={0.5} roughness={0.3} />
        </mesh>
      </group>

      {/* Glow ring */}
      <mesh position={[0, 0, -0.15]} scale={1.1}>
        <ringGeometry args={[1.1, 1.25, 64]} />
        <meshBasicMaterial
          color="#ff6b35"
          opacity={0.15}
          transparent
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}
