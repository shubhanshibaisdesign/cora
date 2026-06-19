import { useEffect, useRef } from "react";
import * as THREE from "three";

const COLS = 180;
const ROWS = 80;
const TOTAL = COLS * ROWS;

export function FluidWave() {
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

    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 1.8, 5.5);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const positions = new Float32Array(TOTAL * 3);
    const colors = new Float32Array(TOTAL * 3);
    const alphas = new Float32Array(TOTAL);
    const sizesArr = new Float32Array(TOTAL);

    const c1 = new THREE.Color("#E8927A");
    const c2 = new THREE.Color("#F0A878");
    const c3 = new THREE.Color("#F5C9A8");

    const spreadX = 14;
    const spreadZ = 6;

    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        const idx = row * COLS + col;

        const x = (col / (COLS - 1) - 0.5) * spreadX;
        const z = (row / (ROWS - 1) - 0.5) * spreadZ;

        positions[idx * 3] = x;
        positions[idx * 3 + 1] = 0;
        positions[idx * 3 + 2] = z;

        const band = row / ROWS;
        const c = band < 0.33 ? c1.clone() : band < 0.66 ? c2.clone() : c3.clone();
        c.r += (Math.random() - 0.5) * 0.03;
        c.g += (Math.random() - 0.5) * 0.02;

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        alphas[idx] = 0.4 + Math.random() * 0.35;
        sizesArr[idx] = 1.2 + Math.random() * 0.8;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizesArr, 1));

    const material = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      depthTest: true,
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
          gl_PointSize = aSize * ${(window.devicePixelRatio * 1.3).toFixed(1)} * (3.0 / -mvPos.z);
          gl_Position = projectionMatrix * mvPos;
        }
      `,
      fragmentShader: `
        varying float vAlpha;
        varying vec3 vColor;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float soft = 1.0 - smoothstep(0.1, 0.5, d);
          gl_FragColor = vec4(vColor, vAlpha * soft);
        }
      `,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let t = 0;
    let frameId = 0;

    function animate() {
      t += 0.008;

      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

      for (let row = 0; row < ROWS; row++) {
        for (let col = 0; col < COLS; col++) {
          const idx = row * COLS + col;
          const x = posAttr.getX(idx);
          const z = posAttr.getZ(idx);

          const w1 = Math.sin(x * 0.8 + t * 1.2) * Math.cos(z * 0.6 + t * 0.8) * 0.4;
          const w2 = Math.sin(x * 1.5 + z * 0.9 + t * 1.5) * 0.25;
          const w3 = Math.cos(x * 0.4 - z * 1.2 + t * 0.9) * 0.15;
          const w4 = Math.sin(x * 2.5 + z * 2.0 + t * 2.0) * 0.08;
          const ripple = Math.sin(Math.sqrt(x * x + z * z) * 2 - t * 1.5) * 0.12;

          posAttr.setY(idx, w1 + w2 + w3 + w4 + ripple);
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
