"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import { useInView } from "framer-motion";
import { Room } from "./room";

export default function RoomModelScene() {
  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { margin: "0px" });

  return (
    <div ref={wrapperRef} style={{ width: "100%", height: "100%", touchAction: "none" }}>
      <Canvas frameloop={isInView ? "always" : "demand"} shadows dpr={[1, 1.5]} camera={{ position: [25, 10, 25], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          
          <directionalLight
            position={[-5, 12, 5]}
            intensity={3}
            castShadow
            shadow-mapSize={[1024, 1024]}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
            shadow-camera-near={0.1}
            shadow-camera-far={50}
          />
          <Environment preset="city" />

          <group position={[0, -5, 0]} scale={0.8}>
            <Room />
          </group>

          <OrbitControls enableZoom={false} enablePan={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}