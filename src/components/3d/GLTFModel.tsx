"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

interface GLTFModelProps {
  url: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  rotationSpeed?: number;
  autoCenter?: boolean;
  autoScale?: boolean;
  onClick?: () => void;
}

export default function GLTFModel({
  url,
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  rotationSpeed = 0.3,
  autoCenter = true,
  autoScale = true,
  onClick,
}: GLTFModelProps) {
  const groupRef = useRef<THREE.Group>(null);
  const [calculatedScale, setCalculatedScale] = useState(scale);

  // Load the GLTF model - useGLTF uses Suspense
  const gltf = useGLTF(url) as GLTF & { scene: THREE.Group };

  // Auto-scale to fit view
  useEffect(() => {
    if (gltf?.scene && autoScale) {
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);

      // Scale to fit within a reasonable size (target ~2 units)
      const targetSize = 2;
      const autoScaleFactor = maxDim > 0 ? targetSize / maxDim : 1;

      setCalculatedScale(scale * autoScaleFactor);

      // Log model info for debugging
      console.log(`[GLTFModel] Loaded: ${url}`);
      console.log(`[GLTFModel] Original size: ${size.x.toFixed(2)} x ${size.y.toFixed(2)} x ${size.z.toFixed(2)}`);
      console.log(`[GLTFModel] Applied scale: ${(scale * autoScaleFactor).toFixed(3)}`);
    }
  }, [gltf, scale, autoScale, url]);

  // Animation frame for rotation and floating
  useFrame((state) => {
    if (groupRef.current) {
      // Slow auto-rotation
      groupRef.current.rotation.y += rotationSpeed * 0.01;
      // Gentle floating motion
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      scale={calculatedScale}
      onClick={onClick}
    >
      {autoCenter ? (
        <Center>
          <primitive object={gltf.scene.clone()} />
        </Center>
      ) : (
        <primitive object={gltf.scene.clone()} />
      )}
    </group>
  );
}

// Preload helper - call this to preload models
export function preloadModel(url: string) {
  useGLTF.preload(url);
}

// Model paths for easy access
export const MODEL_PATHS = {
  towerCrane: "/3D/tower_crane.glb",
  industrialAC: "/3D/industrial_air_conditioner.glb",
  pressureGauge: "/3D/pressure_gauge_animated.glb",
  barrel: "/3D/new_thin_barrel.glb",
  scene: "/3D/scene.gltf",
} as const;
