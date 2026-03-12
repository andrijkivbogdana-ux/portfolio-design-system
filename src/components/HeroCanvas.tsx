"use client";

import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

const fragmentShader = `
  precision mediump float;

  varying vec2 vUv;

  uniform float uTime;
  uniform vec2 uMouse;
  uniform vec2 uResolution;
  uniform float uScrollProgress;
  uniform vec3 uColorAcid;
  uniform vec3 uColorMist;
  uniform vec3 uColorBase;

  // Simplex 2D noise
  vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1;
    i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod(i, 289.0);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
      + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy),
      dot(x12.zw, x12.zw)), 0.0);
    m = m*m;
    m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  float fbm(vec2 p, float time) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 3; i++) {
      value += amplitude * snoise(p * frequency + time * 0.15);
      frequency *= 2.0;
      amplitude *= 0.5;
    }
    return value;
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 st = uv * aspect * 3.0;

    // Mouse influence
    vec2 mousePos = uMouse * aspect * 3.0;
    float dist = length(st - mousePos);
    float mouseInfluence = smoothstep(1.5, 0.0, dist) * 0.1;

    // Noise
    float noise = fbm(st, uTime);
    noise += mouseInfluence;

    // Color mapping - very subtle
    float acidMask = smoothstep(0.2, 0.6, noise) * 0.15;
    float mistMask = smoothstep(-0.3, 0.1, noise) * smoothstep(0.3, 0.0, noise) * 0.1;

    vec3 color = uColorBase;
    color = mix(color, uColorAcid, acidMask);
    color = mix(color, uColorMist, mistMask);

    // Scroll fade-out
    float alpha = 1.0 - smoothstep(0.0, 1.0, uScrollProgress);

    gl_FragColor = vec4(color, alpha);
  }
`;

function NoisePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const mouseTarget = useRef(new THREE.Vector2(0.5, 0.5));
  const mouseCurrent = useRef(new THREE.Vector2(0.5, 0.5));

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
      uScrollProgress: { value: 0 },
      uColorAcid: { value: new THREE.Vector3(200 / 255, 255 / 255, 0 / 255) },
      uColorMist: { value: new THREE.Vector3(167 / 255, 139 / 255, 250 / 255) },
      uColorBase: { value: new THREE.Vector3(10 / 255, 10 / 255, 10 / 255) },
    }),
    []
  );

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseTarget.current.set(e.clientX / window.innerWidth, 1.0 - e.clientY / window.innerHeight);
    };
    const handleResize = () => {
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [uniforms]);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: document.querySelector("#hero-section"),
      start: "top top",
      end: "bottom top",
      onUpdate: (self) => {
        uniforms.uScrollProgress.value = self.progress;
      },
    });
    return () => {
      trigger.kill();
    };
  }, [uniforms]);

  useFrame((_, delta) => {
    if (prefersReducedMotion) {
      uniforms.uTime.value = 5.0;
      return;
    }
    uniforms.uTime.value += delta;

    mouseCurrent.current.lerp(mouseTarget.current, 0.05);
    uniforms.uMouse.value.copy(mouseCurrent.current);
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  );
}

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.8 }
    );
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 opacity-0" style={{ pointerEvents: "none" }}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: false }}
        camera={{ position: [0, 0, 1] }}
      >
        <NoisePlane />
      </Canvas>
    </div>
  );
}
