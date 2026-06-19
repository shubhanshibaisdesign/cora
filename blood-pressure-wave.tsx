import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLS = 160;
const ROWS = 60;
const TOTAL = COLS * ROWS;

export function BloodPressureWave() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.offsetWidth || 300;
    const H = container.offsetHeight || 90;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const aspect = W / H;
    const viewH = 4;
    const viewW = viewH * aspect;
    const camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 100);
    camera.position.set(0, 1.8, 5.5);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const positions = new Float32Array(TOTAL * 3);
    const colors = new Float32Array(TOTAL * 3);
    const alphas = new Float32Array(TOTAL);
    const sizes = new Float32Array(TOTAL);

    const waveColors = [
      new THREE.Color("#F5C9A8"),
      new THREE.Color("#F0A878"),
      new THREE.Color("#E8927A"),
    ];

    const spreadX = 14;
    const spreadZ = 4;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const idx = row * COLS + col;

        const x = (col / (COLS - 1) - 0.5) * spreadX;
        const z = (row / (ROWS - 1) - 0.5) * spreadZ;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = z;

        const rowBand = Math.floor((row / ROWS) * 3);
        const c = waveColors[rowBand].clone();
        c.r += (Math.random() - 0.5) * 0.05;
        c.g += (Math.random() - 0.5) * 0.04;
        c.b += (Math.random() - 0.5) * 0.03;

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        const edgeFade = 1.0 - Math.pow(Math.abs(row / (ROWS - 1) - 0.5) * 2, 2) * 0.3;
        alphas[idx] = (0.5 + Math.random() * 0.5) * edgeFade;
        sizes[idx] = 1.2 + Math.random() * 0.8;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      depthTest: false,
      vertexColors: true,
      vertexShader: `
        attribute float alpha;
        attribute float aSize;
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          vAlpha = alpha;
          vColor = color;
          vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = aSize * ${(window.devicePixelRatio * 1.5).toFixed(1)} * (3.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float soft = 1.0 - smoothstep(0.2, 0.5, d);
          gl_FragColor = vec4(vColor, vAlpha * soft);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let t = 0;
    let frameId = 0;

    function noise(x: number, z: number, time: number): number {
      const w1 = Math.sin(x * 0.8 + time) * Math.cos(z * 1.2 + time * 0.6);
      const w2 = Math.sin(x * 1.5 + z * 0.5 + time * 0.8) * 0.5;
      const w3 = Math.cos(x * 0.4 - z * 0.8 + time * 1.2) * 0.35;
      const w4 = Math.sin(x * 2.0 + z * 1.5 + time * 0.5) * 0.15;
      const w5 = Math.sin((x + z) * 0.6 + time * 0.9) * Math.sin(x * 0.3 - time * 0.4) * 0.4;
      return (w1 + w2 + w3 + w4 + w5);
    }

    function animate() {
      t += 0.008;

      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const idx = row * COLS + col;
          const x = posAttr.getX(idx);
          const z = posAttr.getZ(idx);

          const y = noise(x, z, t) * 0.7;
          posAttr.setY(idx, y);
        }
      }

      posAttr.needsUpdate = true;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }

    animate();

    cleanupRef.current = () => {
      cancelAnimationFrame(frameId);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };

    return () => cleanupRef.current?.();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
