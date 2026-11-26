"use client";

import React, { Component, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/components/providers/ThemeProvider";

interface ErrorBoundaryState {
  hasError: boolean;
}

class WebGLErrorBoundary extends Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  state: ErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function TopologicalMesh({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const particlePositions = useMemo(() => {
    const count = 260;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / count);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 1.95;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = t * 0.1 + state.pointer.x * 0.25;
      groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.1 + state.pointer.y * 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -t * 0.05;
    }
  });

  const wireColor = isDark ? "#7fa085" : "#5b6e5e";
  const ringColor = isDark ? "#9ec0a4" : "#758978";

  return (
    <group ref={groupRef}>
      <mesh>
        <icosahedronGeometry args={[1.45, 2]} />
        <meshBasicMaterial
          color={wireColor}
          wireframe
          transparent
          opacity={isDark ? 0.28 : 0.24}
        />
      </mesh>
      <mesh rotation={[Math.PI / 3, 0, Math.PI / 5]}>
        <torusGeometry args={[1.85, 0.012, 16, 90]} />
        <meshBasicMaterial
          color={ringColor}
          transparent
          opacity={isDark ? 0.35 : 0.3}
        />
      </mesh>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlePositions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.032}
          color={wireColor}
          transparent
          opacity={isDark ? 0.65 : 0.55}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export function HeroCanvas() {
  const { theme } = useTheme();
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (gl) {
        setCanRender3D(true);
      }
    } catch {
      setCanRender3D(false);
    }
  }, []);

  if (!canRender3D) {
    return (
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div className="h-56 w-56 rounded-full border border-[var(--accent-primary)]/25 bg-[var(--accent-soft)]" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="h-full w-full">
      <WebGLErrorBoundary>
        <Canvas
          camera={{ position: [0, 0, 4.7], fov: 44 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
        >
          <TopologicalMesh isDark={theme === "dark"} />
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
}
