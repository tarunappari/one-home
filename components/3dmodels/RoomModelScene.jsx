"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Room } from "./room";

/**
 * Mobile touch + gyro controller.
 *
 * How it works with `touch-action: pan-y` on the canvas:
 * - Vertical swipe → browser handles scrolling natively (no JS needed)
 * - Horizontal swipe → browser does NOT scroll, touchmove events fire → we rotate the model
 *
 * Also adds subtle gyroscope tilt for a premium passive effect.
 * Includes momentum/inertia so the model keeps spinning briefly after a swipe.
 */
function MobileControls({ children }) {
  const groupRef = useRef();
  const rotationY = useRef(0);
  const velocity = useRef(0);
  const lastTouchX = useRef(null);
  const gyroTarget = useRef({ x: 0 });
  const { gl } = useThree();

  useEffect(() => {
    const canvas = gl.domElement;

    // --- Horizontal touch → Y-axis rotation ---
    const onTouchStart = (e) => {
      if (e.touches.length === 1) {
        lastTouchX.current = e.touches[0].clientX;
        velocity.current = 0; // stop momentum when user touches
      }
    };

    const onTouchMove = (e) => {
      if (lastTouchX.current === null || !e.touches.length) return;
      const x = e.touches[0].clientX;
      const deltaX = x - lastTouchX.current;
      velocity.current = deltaX * 0.008; // sensitivity
      rotationY.current += velocity.current;
      lastTouchX.current = x;
    };

    const onTouchEnd = () => {
      lastTouchX.current = null;
      // velocity persists → momentum/inertia effect
    };

    canvas.addEventListener("touchstart", onTouchStart, { passive: true });
    canvas.addEventListener("touchmove", onTouchMove, { passive: true });
    canvas.addEventListener("touchend", onTouchEnd, { passive: true });

    // --- Gyroscope → subtle passive tilt on X-axis ---
    const onOrientation = (e) => {
      const beta = (e.beta || 0) - 45; // center around natural holding angle
      gyroTarget.current.x = (beta / 90) * 0.2;
    };
    window.addEventListener("deviceorientation", onOrientation, {
      passive: true,
    });

    return () => {
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("deviceorientation", onOrientation);
    };
  }, [gl]);

  useFrame(() => {
    if (!groupRef.current) return;

    // Apply momentum decay when not actively touching
    if (lastTouchX.current === null) {
      velocity.current *= 0.95; // friction
      rotationY.current += velocity.current;
    }

    // Smooth lerp toward target Y rotation (from swipe)
    groupRef.current.rotation.y +=
      (rotationY.current - groupRef.current.rotation.y) * 0.1;

    // Subtle gyro tilt on X axis
    groupRef.current.rotation.x +=
      (gyroTarget.current.x - groupRef.current.rotation.x) * 0.05;
  });

  return <group ref={groupRef}>{children}</group>;
}

export default function RoomModelScene() {
  const [isMobile, setIsMobile] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const mobile = window.matchMedia("(pointer: coarse)").matches;
    setIsMobile(mobile);
    if (!mobile) return;

    const patchCanvas = () => {
      if (!wrapperRef.current) return false;
      const canvas = wrapperRef.current.querySelector("canvas");
      if (canvas) {
        canvas.style.touchAction = "pan-y";
        return true;
      }
      return false;
    };

    if (patchCanvas()) return;

    const observer = new MutationObserver(() => {
      if (patchCanvas()) observer.disconnect();
    });
    if (wrapperRef.current) {
      observer.observe(wrapperRef.current, { childList: true, subtree: true });
    }

    const timer = setTimeout(() => {
      patchCanvas();
      observer.disconnect();
    }, 1000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const isInView = useInView(wrapperRef, { margin: "0px" });

  return (
    <div ref={wrapperRef} style={{ width: "100%", height: "100%" }}>
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
            {isMobile ? (
              <MobileControls>
                <Room />
              </MobileControls>
            ) : (
              <Room />
            )}
          </group>

          {!isMobile && (
            <OrbitControls enableZoom={false} enablePan={false} />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}