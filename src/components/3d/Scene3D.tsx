"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";

interface Scene3DProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
}

export default function Scene3D({
  children,
  className = "",
  cameraPosition = [0, 0, 5],
}: Scene3DProps) {
  return (
    <div className={`${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <Suspense fallback={null}>
          {/* Ambient lighting */}
          <ambientLight intensity={0.4} />

          {/* Key light - main light source */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={0.8}
            color="#ffffff"
          />

          {/* Fill light - softer, from opposite side */}
          <directionalLight
            position={[-3, 2, -2]}
            intensity={0.3}
            color="#ff6b35"
          />

          {/* Rim light - accent from behind */}
          <pointLight
            position={[0, -2, -3]}
            intensity={0.4}
            color="#4a90e2"
          />

          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
