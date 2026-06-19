import { useEffect, useRef } from "react";
import * as THREE from "three";

const C1 = new THREE.Color("#F5C9A8");
const C2 = new THREE.Color("#F0A878");
const C3 = new THREE.Color("#E8927A");

function createShader(dpr: number) {
  return new THREE.ShaderMaterial({
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
        gl_PointSize = aSize * ${(dpr * 1.3).toFixed(1)} * (0.8 / -mvPos.z);
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
}

function buildHrv(): { positions: Float32Array; colors: Float32Array; alphas: Float32Array; sizes: Float32Array; total: number } {
  const U_STEPS = 300;
  const V_STEPS = 50;
  const total = U_STEPS * V_STEPS;
  const positions = new Float32Array(total * 3);
  const colors = new Float32Array(total * 3);
  const alphas = new Float32Array(total);
  const sizes = new Float32Array(total);

  const a = 0.35;
  const tubeR = 0.08;

  const uStep = (Math.PI * 2) / U_STEPS;
  const vStep = (Math.PI * 2) / V_STEPS;

  for (let ui = 0; ui < U_STEPS; ui++) {
    for (let vi = 0; vi < V_STEPS; vi++) {
      const u = (ui + Math.random()) * uStep;
      const v = (vi + Math.random()) * vStep;
      const idx = ui * V_STEPS + vi;

      const denom = 1 + Math.sin(u) * Math.sin(u);
      const spineX = a * Math.cos(u) / denom;
      const spineY = a * Math.sin(u) * Math.cos(u) / denom;

      const du = 0.01;
      const denomN = 1 + Math.sin(u + du) * Math.sin(u + du);
      const nx = a * Math.cos(u + du) / denomN - spineX;
      const ny = a * Math.sin(u + du) * Math.cos(u + du) / denomN - spineY;
      const len = Math.sqrt(nx * nx + ny * ny) || 1;
      const perpX = -(ny / len);
      const perpY = nx / len;

      positions[idx * 3] = spineX + perpX * Math.cos(v) * tubeR;
      positions[idx * 3 + 1] = spineY + perpY * Math.cos(v) * tubeR;
      positions[idx * 3 + 2] = Math.sin(v) * tubeR;

      const band = ui / U_STEPS;
      const c = band < 0.33 ? C1 : band < 0.66 ? C2 : C3;
      const cc = c.clone();
      cc.r += (Math.random() - 0.5) * 0.03;
      cc.g += (Math.random() - 0.5) * 0.02;
      colors[idx * 3] = cc.r;
      colors[idx * 3 + 1] = cc.g;
      colors[idx * 3 + 2] = cc.b;

      alphas[idx] = 0.5 + Math.random() * 0.5;
      sizes[idx] = 0.6 + Math.random() * 0.4;
    }
  }

  return { positions, colors, alphas, sizes, total };
}

function buildRhr(): { positions: Float32Array; colors: Float32Array; alphas: Float32Array; sizes: Float32Array; total: number } {
  const U_STEPS = 200;
  const V_STEPS = 60;
  const total = U_STEPS * V_STEPS;
  const positions = new Float32Array(total * 3);
  const colors = new Float32Array(total * 3);
  const alphas = new Float32Array(total);
  const sizes = new Float32Array(total);

  const R = 0.19;
  const r = 0.085;

  const uStep = (Math.PI * 2) / U_STEPS;
  const vStep = (Math.PI * 2) / V_STEPS;

  for (let ui = 0; ui < U_STEPS; ui++) {
    for (let vi = 0; vi < V_STEPS; vi++) {
      const u = (ui + Math.random()) * uStep;
      const v = (vi + Math.random()) * vStep;
      const idx = ui * V_STEPS + vi;

      positions[idx * 3] = (R + r * Math.cos(v)) * Math.cos(u);
      positions[idx * 3 + 1] = (R + r * Math.cos(v)) * Math.sin(u);
      positions[idx * 3 + 2] = r * Math.sin(v);

      const band = ui / U_STEPS;
      const c = band < 0.33 ? C1 : band < 0.66 ? C2 : C3;
      const cc = c.clone();
      cc.r += (Math.random() - 0.5) * 0.03;
      cc.g += (Math.random() - 0.5) * 0.02;
      colors[idx * 3] = cc.r;
      colors[idx * 3 + 1] = cc.g;
      colors[idx * 3 + 2] = cc.b;

      alphas[idx] = 0.5 + Math.random() * 0.5;
      sizes[idx] = 0.6 + Math.random() * 0.4;
    }
  }

  return { positions, colors, alphas, sizes, total };
}

function buildSpo2(): { positions: Float32Array; colors: Float32Array; alphas: Float32Array; sizes: Float32Array; total: number } {
  const RINGS = 100;
  const PTS_PER = 120;
  const total = RINGS * PTS_PER;
  const positions = new Float32Array(total * 3);
  const colors = new Float32Array(total * 3);
  const alphas = new Float32Array(total);
  const sizes = new Float32Array(total);

  const R = 0.28;

  const phiStep = Math.PI / RINGS;
  const thetaStep = (Math.PI * 2) / PTS_PER;

  for (let ring = 0; ring < RINGS; ring++) {
    for (let p = 0; p < PTS_PER; p++) {
      const idx = ring * PTS_PER + p;
      const phi = (ring + Math.random()) * phiStep;
      const theta = (p + Math.random()) * thetaStep;
      const ringR = R * Math.sin(phi);

      positions[idx * 3] = ringR * Math.cos(theta);
      positions[idx * 3 + 1] = ringR * Math.sin(theta);
      positions[idx * 3 + 2] = R * Math.cos(phi);

      const band = ring / RINGS;
      const c = band < 0.33 ? C1 : band < 0.66 ? C2 : C3;
      const cc = c.clone();
      cc.r += (Math.random() - 0.5) * 0.03;
      cc.g += (Math.random() - 0.5) * 0.02;
      colors[idx * 3] = cc.r;
      colors[idx * 3 + 1] = cc.g;
      colors[idx * 3 + 2] = cc.b;

      alphas[idx] = 0.5 + Math.random() * 0.5;
      sizes[idx] = 0.6 + Math.random() * 0.4;
    }
  }

  return { positions, colors, alphas, sizes, total };
}

function buildResp(): { positions: Float32Array; colors: Float32Array; alphas: Float32Array; sizes: Float32Array; total: number } {
  const U_STEPS = 200;
  const V_STEPS = 60;
  const DONUTS = 2;
  const total = DONUTS * U_STEPS * V_STEPS;
  const positions = new Float32Array(total * 3);
  const colors = new Float32Array(total * 3);
  const alphas = new Float32Array(total);
  const sizes = new Float32Array(total);

  const r = 0.085;
  const uStep = (Math.PI * 2) / U_STEPS;
  const vStep = (Math.PI * 2) / V_STEPS;

  const donuts = [
    { R: 0.12, color: C3 },
    { R: 0.22, color: C1 },
  ];

  let idx = 0;
  for (let d = 0; d < DONUTS; d++) {
    const { R, color } = donuts[d];

    for (let ui = 0; ui < U_STEPS; ui++) {
      for (let vi = 0; vi < V_STEPS; vi++) {
        const u = (ui + Math.random()) * uStep;
        const v = (vi + Math.random()) * vStep;

        positions[idx * 3] = (R + r * Math.cos(v)) * Math.cos(u);
        positions[idx * 3 + 1] = (R + r * Math.cos(v)) * Math.sin(u);
        positions[idx * 3 + 2] = r * Math.sin(v);

        const cc = color.clone();
        cc.r += (Math.random() - 0.5) * 0.03;
        cc.g += (Math.random() - 0.5) * 0.02;
        colors[idx * 3] = cc.r;
        colors[idx * 3 + 1] = cc.g;
        colors[idx * 3 + 2] = cc.b;

        alphas[idx] = 0.5 + Math.random() * 0.5;
        sizes[idx] = 0.6 + Math.random() * 0.4;
        idx++;
      }
    }
  }

  return { positions, colors, alphas, sizes, total };
}

interface ParticleVizProps {
  type: "hrv" | "rhr" | "spo2" | "resp";
}

export function VitalParticles({ type }: ParticleVizProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const W = container.offsetWidth || 150;
    const H = container.offsetHeight || 90;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(50, W / H, 0.1, 100);
    const camZ = 0.7;
    camera.position.set(0, 0, camZ);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const builders: Record<string, () => ReturnType<typeof buildHrv>> = {
      hrv: buildHrv,
      rhr: buildRhr,
      spo2: buildSpo2,
      resp: buildResp,
    };

    const { positions, colors, alphas, sizes } = builders[type]();

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("alpha", new THREE.BufferAttribute(alphas, 1));
    geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

    const material = createShader(window.devicePixelRatio);
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    if (type === "spo2") {
      points.rotation.x = -0.45;
      points.rotation.y = 0.3;
    }

    renderer.render(scene, camera);

    cleanupRef.current = () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
    };

    return () => cleanupRef.current?.();
  }, [type]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
