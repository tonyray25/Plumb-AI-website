"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, ReactNode } from "react";
import { Environment, Html } from "@react-three/drei";

interface Scene3DProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
}

// Loading spinner fallback
function LoadingFallback() {
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-8 h-8 border-2 border-[#ff6b35] border-t-transparent rounded-full animate-spin" />
        <span className="text-xs text-[#8a8a8a]">Loading...</span>
      </div>
    </Html>
  );
}

export default function Scene3D({
  children,
  className = "",
  cameraPosition = [0, 0, 5],
}: Scene3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: cameraPosition, fov: 45 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Environment lighting for PBR materials */}
          <Environment preset="city" />

          {/* Ambient lighting */}
          <ambientLight intensity={0.5} />

          {/* Key light - main light source */}
          <directionalLight
            position={[5, 5, 5]}
            intensity={1}
            color="#ffffff"
            castShadow
          />

          {/* Fill light - softer, from opposite side */}
          <directionalLight
            position={[-3, 2, -2]}
            intensity={0.4}
            color="#ff6b35"
          />

          {/* Rim light - accent from behind */}
          <pointLight
            position={[0, -2, -3]}
            intensity={0.5}
            color="#4a90e2"
          />

          {/* Bottom fill to prevent dark undersides */}
          <pointLight
            position={[0, -3, 2]}
            intensity={0.3}
            color="#ffffff"
          />

          {children}
        </Suspense>
      </Canvas>
    </div>
  );
}
