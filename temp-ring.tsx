import { useEffect, useRef } from "react";
import * as THREE from "three";

const peaks = [0.05, 0.15, 0.6, 1.0, 0.4, -0.3, -0.7, -0.35, 0.1, 0.45, 0.2, -0.15, -0.4, -0.1, 0.05];

function getHeight(xNorm: number): number {
  const t = xNorm * (peaks.length - 1);
  const i = Math.floor(t);
  const f = t - i;
  const a = peaks[Math.min(i, peaks.length - 1)];
  const b = peaks[Math.min(i + 1, peaks.length - 1)];
  const s = f * f * (3 - 2 * f);
  return a + (b - a) * s;
}

export function TempRing() {
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
    const viewH = 1.1;
    const viewW = viewH * aspect;
    const camera = new THREE.OrthographicCamera(-viewW / 2, viewW / 2, viewH * 0.45, -viewH * 0.45, 0.1, 10);
    camera.position.set(0, 0, 1);

    const scene = new THREE.Scene();

    const OUTLINE_PTS = 1000;
    const FILL_PTS = 6000;
    const PEAK_FILL = 3000;
    const TOTAL = OUTLINE_PTS + FILL_PTS + PEAK_FILL;

    const positions = new Float32Array(TOTAL * 3);
    const colors = new Float32Array(TOTAL * 3);
    const alphas = new Float32Array(TOTAL);
    const sizesArr = new Float32Array(TOTAL);

    const c1 = new THREE.Color("#F5C9A8");
    const c2 = new THREE.Color("#F0A878");
    const c3 = new THREE.Color("#E8927A");

    const AMP = viewH * 0.4;
    let idx = 0;

    for (let i = 0; i < OUTLINE_PTS; i++) {
      const xNorm = i / (OUTLINE_PTS - 1);
      const x = (xNorm - 0.5) * viewW;
      const y = getHeight(xNorm) * AMP;

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y + (Math.random() - 0.5) * 0.015;
      positions[idx * 3 + 2] = 0;

      const cc = c3.clone();
      cc.r += (Math.random() - 0.5) * 0.04;
      cc.g += (Math.random() - 0.5) * 0.03;
      colors[idx * 3] = cc.r;
      colors[idx * 3 + 1] = cc.g;
      colors[idx * 3 + 2] = cc.b;

      alphas[idx] = 0.7 + Math.random() * 0.3;
      sizesArr[idx] = 1.0 + Math.random() * 0.5;
      idx++;
    }

    for (let i = 0; i < FILL_PTS; i++) {
      const xNorm = Math.random();
      const x = (xNorm - 0.5) * viewW;
      const curveY = getHeight(xNorm) * AMP;

      const y = Math.random() * curveY;

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = 0;

      const dist = Math.abs(curveY) > 0 ? Math.abs(y / curveY) : 0;
      const c = dist > 0.7 ? c3.clone() : dist > 0.4 ? c2.clone() : c1.clone();
      c.r += (Math.random() - 0.5) * 0.05;
      c.g += (Math.random() - 0.5) * 0.04;
      c.b += (Math.random() - 0.5) * 0.03;

      colors[idx * 3] = c.r;
      colors[idx * 3 + 1] = c.g;
      colors[idx * 3 + 2] = c.b;

      alphas[idx] = 0.5 + Math.random() * 0.5;
      sizesArr[idx] = 1.0 + Math.random() * 0.6;
      idx++;
    }

    for (let i = 0; i < PEAK_FILL; i++) {
      const xNorm = 0.15 + Math.random() * 0.2;
      const x = (xNorm - 0.5) * viewW;
      const curveY = getHeight(xNorm) * AMP;
      const y = Math.random() * curveY;

      positions[idx * 3] = x;
      positions[idx * 3 + 1] = y;
      positions[idx * 3 + 2] = 0;

      const dist = Math.abs(curveY) > 0 ? Math.abs(y / curveY) : 0;
      const c = dist > 0.7 ? c3.clone() : dist > 0.4 ? c2.clone() : c1.clone();
      c.r += (Math.random() - 0.5) * 0.05;
      c.g += (Math.random() - 0.5) * 0.04;
      c.b += (Math.random() - 0.5) * 0.03;

      colors[idx * 3] = c.r;
      colors[idx * 3 + 1] = c.g;
      colors[idx * 3 + 2] = c.b;

      alphas[idx] = 0.5 + Math.random() * 0.5;
      sizesArr[idx] = 1.0 + Math.random() * 0.6;
      idx++;
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
          gl_PointSize = aSize * ${(dpr * 0.8).toFixed(1)};
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
    <div
      ref={containerRef}
      style={{ width: "calc(100% + 38px)", height: "100%", display: "block", marginLeft: "-19px", marginRight: "-19px" }}
    />
  );
}
