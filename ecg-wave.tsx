import { useEffect, useRef } from "react";
import * as THREE from "three";

const ROWS = 120;
const COLS = 200;
const TOTAL = ROWS * COLS;

export function EcgWave() {
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

    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    camera.position.set(0, 0, 1.3);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const positions = new Float32Array(TOTAL * 3);
    const colors = new Float32Array(TOTAL * 3);
    const alphas = new Float32Array(TOTAL);
    const sizesArr = new Float32Array(TOTAL);

    const c1 = new THREE.Color("#F5C9A8");
    const c2 = new THREE.Color("#F0A878");
    const c3 = new THREE.Color("#E8927A");

    const R = 0.4;

    const gridTheta = new Float32Array(TOTAL);
    const gridPhi = new Float32Array(TOTAL);

    for (let row = 0; row < ROWS; row++) {
      const phi = (row / (ROWS - 1)) * Math.PI;
      for (let col = 0; col < COLS; col++) {
        const idx = row * COLS + col;
        const theta = (col / COLS) * Math.PI * 2;

        gridTheta[idx] = theta;
        gridPhi[idx] = phi;

        const nx = Math.sin(phi) * Math.cos(theta);
        const ny = Math.sin(phi) * Math.sin(theta);
        const nz = Math.cos(phi);

        positions[idx * 3] = R * nx;
        positions[idx * 3 + 1] = R * ny;
        positions[idx * 3 + 2] = R * nz;

        const band = row / ROWS;
        const c = band < 0.33 ? c1.clone() : band < 0.66 ? c2.clone() : c3.clone();
        c.r += (Math.random() - 0.5) * 0.03;
        c.g += (Math.random() - 0.5) * 0.02;

        colors[idx * 3] = c.r;
        colors[idx * 3 + 1] = c.g;
        colors[idx * 3 + 2] = c.b;

        alphas[idx] = 0.35 + Math.random() * 0.3;
        sizesArr[idx] = 0.6 + Math.random() * 0.4;
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
          gl_PointSize = aSize * ${(window.devicePixelRatio * 1.3).toFixed(1)} * (1.5 / -mvPos.z);
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
      t += 0.005;

      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

      for (let i = 0; i < TOTAL; i++) {
        const theta = gridTheta[i];
        const phi = gridPhi[i];

        const nx = Math.sin(phi) * Math.cos(theta);
        const ny = Math.sin(phi) * Math.sin(theta);
        const nz = Math.cos(phi);

        const wave1 = Math.sin(theta * 3 + phi * 2 + t * 2) * 0.03;
        const wave2 = Math.sin(theta * 5 - phi * 3 + t * 1.5) * 0.02;
        const wave3 = Math.cos(theta * 2 + phi * 4 + t * 2.5) * 0.015;
        const wave4 = Math.sin(theta * 7 + phi * 1 - t * 1.8) * 0.01;

        const d = wave1 + wave2 + wave3 + wave4;
        const r = R + d;

        posAttr.setXYZ(i, r * nx, r * ny, r * nz);
      }

      posAttr.needsUpdate = true;

      points.rotation.y = t * 0.3;
      points.rotation.x = t * 0.12;

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
