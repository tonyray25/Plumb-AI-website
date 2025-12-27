"use client";

import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Center } from "@react-three/drei";
import * as THREE from "three";

interface PressureGaugeProps {
  scale?: number;
  rotationSpeed?: number;
}

export default function PressureGauge({
  scale = 1,
  rotationSpeed = 0.3,
}: PressureGaugeProps) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, animations } = useGLTF("/3D/pressure_gauge_animated.glb");
  const [calculatedScale, setCalculatedScale] = useState(scale);

  useEffect(() => {
    if (scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const autoScaleFactor = maxDim > 0 ? 2 / maxDim : 1;
      setCalculatedScale(scale * autoScaleFactor);
      console.log(`[PressureGauge] Loaded - Size: ${size.x.toFixed(2)} x ${size.y.toFixed(2)} x ${size.z.toFixed(2)}`);
      if (animations?.length) {
        console.log(`[PressureGauge] Has ${animations.length} animation(s)`);
      }
    }
  }, [scene, scale, animations]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += rotationSpeed * 0.01;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
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

useGLTF.preload("/3D/pressure_gauge_animated.glb");
