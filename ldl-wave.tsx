import { useEffect, useRef } from "react";
import * as THREE from "three";

const STRANDS = 4;
const SPINE_POINTS = 200;
const RING_POINTS = 12;
const TOTAL = STRANDS * SPINE_POINTS * RING_POINTS;

export function LdlWave() {
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
    camera.position.set(0, 0.3, 2.5);
    camera.lookAt(0, 0, 0);

    const scene = new THREE.Scene();

    const positions = new Float32Array(TOTAL * 3);
    const colors = new Float32Array(TOTAL * 3);
    const alphas = new Float32Array(TOTAL);
    const sizesArr = new Float32Array(TOTAL);

    const strandDefs = [
      { basePhase: 0, radius: 0.45, twistFreq: 1.5, yOffset: 0 },
      { basePhase: Math.PI * 0.5, radius: 0.42, twistFreq: 1.3, yOffset: 0.04 },
      { basePhase: Math.PI * 1.0, radius: 0.48, twistFreq: 1.7, yOffset: -0.03 },
      { basePhase: Math.PI * 1.5, radius: 0.44, twistFreq: 1.4, yOffset: 0.05 },
    ];

    const c1 = new THREE.Color("#F5C9A8");
    const c2 = new THREE.Color("#F0A878");
    const c3 = new THREE.Color("#E8927A");
    const strandColors = [c1, c2, c3, c1];

    const TUBE_RADIUS = 0.12;

    const pStrand = new Uint8Array(TOTAL);
    const pSpineNorm = new Float32Array(TOTAL);
    const pRingAngle = new Float32Array(TOTAL);

    let idx = 0;
    for (let s = 0; s < STRANDS; s++) {
      const c = strandColors[s];
      for (let sp = 0; sp < SPINE_POINTS; sp++) {
        const xNorm = sp / (SPINE_POINTS - 1);
        for (let r = 0; r < RING_POINTS; r++) {
          const angle = (r / RING_POINTS) * Math.PI * 2;

          pStrand[idx] = s;
          pSpineNorm[idx] = xNorm;
          pRingAngle[idx] = angle;

          positions[idx * 3] = (xNorm - 0.5) * 8;
          positions[idx * 3 + 1] = 0;
          positions[idx * 3 + 2] = 0;

          const cc = c.clone();
          cc.r += (Math.random() - 0.5) * 0.03;
          cc.g += (Math.random() - 0.5) * 0.02;
          colors[idx * 3] = cc.r;
          colors[idx * 3 + 1] = cc.g;
          colors[idx * 3 + 2] = cc.b;

          alphas[idx] = 0.35 + Math.random() * 0.3;
          sizesArr[idx] = 1.0 + Math.random() * 0.6;

          idx++;
        }
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
          gl_PointSize = aSize * ${(window.devicePixelRatio * 1.3).toFixed(1)} * (2.5 / -mvPos.z);
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
      t += 0.006;

      const posAttr = geometry.getAttribute("position") as THREE.BufferAttribute;

      for (let i = 0; i < TOTAL; i++) {
        const s = pStrand[i];
        const xNorm = pSpineNorm[i];
        const ringAngle = pRingAngle[i];
        const strand = strandDefs[s];

        const x = (xNorm - 0.5) * 8;

        const twist = xNorm * Math.PI * 2 * strand.twistFreq + t * 2 + strand.basePhase;
        const spineY = Math.sin(twist) * strand.radius + strand.yOffset;
        const spineZ = Math.cos(twist) * strand.radius * 0.5;

        const wave = Math.sin(xNorm * Math.PI * 2 + t * 1.5) * 0.06;

        const ry = Math.sin(ringAngle) * TUBE_RADIUS;
        const rz = Math.cos(ringAngle) * TUBE_RADIUS;

        posAttr.setXYZ(i, x, spineY + wave + ry, spineZ + rz);
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
