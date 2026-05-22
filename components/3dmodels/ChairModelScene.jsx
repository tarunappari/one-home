"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import { Model as Chair } from "./chair";

export default function ChairModelScene() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px" });

  return (
    <div ref={ref} style={{ width: "100%", height: "100%" }}>
      <Canvas frameloop={isInView ? "always" : "demand"} shadows dpr={[1, 1.5]} camera={{ position: [3, 2, 4], fov: 40 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <directionalLight
            position={[5, 5, 5]}
            intensity={2}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <Environment preset="studio" />

          <group position={[0, -0.7, 0]} scale={1.5}>
            <Chair />

          </group>

          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
        </Suspense>
      </Canvas>
    </div>
  );
}
