import { useEffect, useRef } from "react";
import * as THREE from "three";

const sleepData1 = [0.7, 0.85, 0.95, 0.8, 0.55, 0.4, 0.35, 0.45, 0.5, 0.6, 0.7, 0.75];
const sleepData2 = [0.5, 0.55, 0.65, 0.5, 0.35, 0.2, 0.15, 0.25, 0.3, 0.4, 0.45, 0.5];

function polarCurve(data: number[], angle: number, maxR: number, minR: number): number {
  const t = (angle / (Math.PI * 2)) * data.length;
  const i = Math.floor(t) % data.length;
  const j = (i + 1) % data.length;
  const f = t - Math.floor(t);
  const s = f * f * (3 - 2 * f);
  return minR + (data[i] + (data[j] - data[i]) * s) * (maxR - minR);
}

const C1 = new THREE.Color("#F5C9A8");
const C2 = new THREE.Color("#F0A878");
const C3 = new THREE.Color("#E8927A");

export function SleepWave() {
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

    const dpr = window.devicePixelRatio;
    const aspect = W / H;
    const viewH = 1.0;
    const viewW = viewH * aspect;
    const camera = new THREE.OrthographicCamera(-viewW / 2, viewW / 2, viewH / 2, -viewH / 2, 0.1, 10);
    camera.position.set(0, 0, 1);

    const scene = new THREE.Scene();

    const DISC_PTS = 10000;
    const GRID_CIRCLES = 3;
    const GRID_PTS = 200;
    const GRID_RADIALS = 12;
    const RADIAL_PTS = 40;
    const CURVE_PTS = 600;

    const TOTAL = DISC_PTS + GRID_CIRCLES * GRID_PTS + GRID_RADIALS * RADIAL_PTS + 2 * CURVE_PTS;

    const positions = new Float32Array(TOTAL * 3);
    const colors = new Float32Array(TOTAL * 3);
    const alphas = new Float32Array(TOTAL);
    const sizesArr = new Float32Array(TOTAL);

    const R = 0.336;
    let idx = 0;

    for (let i = 0; i < DISC_PTS; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = Math.pow(Math.random(), 1.5) * R;

      positions[idx * 3] = Math.cos(angle) * r;
      positions[idx * 3 + 1] = Math.sin(angle) * r;
      positions[idx * 3 + 2] = 0;

      const rNorm = r / R;
      const c = rNorm < 0.3 ? C3 : rNorm < 0.6 ? C2 : C1;
      const cc = c.clone();
      cc.r += (Math.random() - 0.5) * 0.03;
      cc.g += (Math.random() - 0.5) * 0.02;
      colors[idx * 3] = cc.r;
      colors[idx * 3 + 1] = cc.g;
      colors[idx * 3 + 2] = cc.b;

      alphas[idx] = 0.5 + Math.random() * 0.5;
      sizesArr[idx] = 0.6 + Math.random() * 0.4;
      idx++;
    }

    const gridColor = new THREE.Color("#D4A88A");
    const innerR = 0.05;

    for (let c = 0; c < GRID_CIRCLES; c++) {
      const r = innerR + (R - innerR) * ((c + 1) / (GRID_CIRCLES + 1));
      for (let p = 0; p < GRID_PTS; p++) {
        const angle = (p / GRID_PTS) * Math.PI * 2;
        positions[idx * 3] = Math.cos(angle) * r;
        positions[idx * 3 + 1] = Math.sin(angle) * r;
        positions[idx * 3 + 2] = 0;
        colors[idx * 3] = gridColor.r;
        colors[idx * 3 + 1] = gridColor.g;
        colors[idx * 3 + 2] = gridColor.b;
        alphas[idx] = 0.18;
        sizesArr[idx] = 0.4;
        idx++;
      }
    }

    for (let ri = 0; ri < GRID_RADIALS; ri++) {
      const angle = (ri / GRID_RADIALS) * Math.PI * 2;
      for (let p = 0; p < RADIAL_PTS; p++) {
        const dist = innerR + (R - innerR) * (p / (RADIAL_PTS - 1));
        positions[idx * 3] = Math.cos(angle) * dist;
        positions[idx * 3 + 1] = Math.sin(angle) * dist;
        positions[idx * 3 + 2] = 0;
        colors[idx * 3] = gridColor.r;
        colors[idx * 3 + 1] = gridColor.g;
        colors[idx * 3 + 2] = gridColor.b;
        alphas[idx] = 0.14;
        sizesArr[idx] = 0.35;
        idx++;
      }
    }

    const curveConfigs = [
      { data: sleepData1, color: C3, size: 1.4 },
      { data: sleepData2, color: new THREE.Color("#C04A2A"), size: 1.1 },
    ];

    for (const cfg of curveConfigs) {
      for (let p = 0; p < CURVE_PTS; p++) {
        const angle = (p / CURVE_PTS) * Math.PI * 2;
        const r = polarCurve(cfg.data, angle, R * 0.85, innerR * 2);

        positions[idx * 3] = Math.cos(angle) * r;
        positions[idx * 3 + 1] = Math.sin(angle) * r;
        positions[idx * 3 + 2] = 0;

        const cc = cfg.color.clone();
        cc.r += (Math.random() - 0.5) * 0.02;
        colors[idx * 3] = cc.r;
        colors[idx * 3 + 1] = cc.g;
        colors[idx * 3 + 2] = cc.b;

        alphas[idx] = 0.9;
        sizesArr[idx] = cfg.size;
        idx++;
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
          gl_PointSize = aSize * ${(dpr * 1.3).toFixed(1)};
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
    renderer.render(scene, camera);

    cleanupRef.current = () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };

    return () => cleanupRef.current?.();
  }, []);

  return (
    <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none", overflow: "visible" }}>
      <div
        ref={containerRef}
        style={{ width: "218px", height: "218px", flexShrink: 0 }}
      />
    </div>
  );
}
