"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface IndustrialACProps {
  scale?: number;
  rotationSpeed?: number;
}

export default function IndustrialAC({
  scale = 1,
  rotationSpeed = 0.2,
}: IndustrialACProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/3D/industrial_air_conditioner.glb");
  const [calculatedScale, setCalculatedScale] = useState(scale);

  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const autoScaleFactor = maxDim > 0 ? 2 / maxDim : 1;
      setCalculatedScale(scale * autoScaleFactor);
      console.log(`[IndustrialAC] Loaded - Size: ${size.x.toFixed(2)} x ${size.y.toFixed(2)} x ${size.z.toFixed(2)}`);
    }
  }, [scene, scale]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed * 0.01;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.08;
    }
  });

  return (
    <group ref={groupRef} scale={calculatedScale}>
      <Center>
        <primitive object={scene.clone()} />
      </Center>
    </group>
  );
}

useGLTF.preload("/3D/industrial_air_conditioner.glb");
