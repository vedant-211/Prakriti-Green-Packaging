"use client"

// organic-topography.tsx — Prakriti Generative 3D Background
// ─────────────────────────────────────────────────────────────
// Original source: "GenerativeMountainScene" (blue mountain on dark slate)
// Refactored to: "GenerativeOrganicTopography" — Prakriti "High-End Organic" aesthetic
//
// Key brand changes from original:
//   • Color: #7dd3fc (sky blue) → dual-gradient between #A3B19B (Muted Sage)
//             and #2A4B3C (Rich Forest Green), animated by the noise displacement
//   • Background: alpha: true — blends into prakriti-bg (#F7F5F0) linen background
//   • Noise: reduced amplitude + added a third octave for a more tactile,
//             corrugated kraft-paper feel (dense ridges, not mountain peaks)
//   • Camera: pitched lower and closer for a horizontal "paper surface" look
//   • Lighting: warm ambient bias to simulate directional window light
//   • Animation: slower time multiplier (0.0001 vs 0.0003) — "buttery, unhurried"
//
// shadcn-compatible: exported as named function, uses cn() from lib/utils

import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { cn } from "@/lib/utils"

// ── Prakriti Brand Colors (from brand.md) ─────────────────────
const PRAKRITI_SAGE = "#A3B19B" // Muted Sage — primary surface color
const PRAKRITI_GREEN = "#2A4B3C" // Rich Forest Green — deep shadow color
// ──────────────────────────────────────────────────────────────

const VERTEX_SHADER = /* glsl */ `
  uniform float time;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement; 

  // ── Simplex 3D Noise (Ashima Arts) ──
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g  = step(x0.yzx, x0.xyz);
    vec3 l  = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 0.142857142857;
    vec3  ns = n_ * D.wyz - D.xzx;
    vec4 j  = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x  = x_ * ns.x + ns.yyyy;
    vec4 y  = y_ * ns.x + ns.yyyy;
    vec4 h  = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vNormal   = normal;
    vPosition = position;

    // ── Kraft-paper ridges: 3 octaves of noise ──
    float n1 = snoise(vec3(position.x * 0.6, position.y * 0.6 - time * 0.15, 0.0)) * 0.5;
    float n2 = snoise(vec3(position.x * 1.4, position.y * 1.4 - time * 0.2, 0.5)) * 0.25;
    float n3 = snoise(vec3(position.x * 3.0, position.y * 3.0 - time * 0.3, 1.0)) * 0.10;

    float displacement = n1 + n2 + n3;
    vDisplacement = displacement; 

    vec3 newPosition = position + normal * displacement;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
  }
`

const FRAGMENT_SHADER = /* glsl */ `
  uniform vec3  colorRidge;         
  uniform vec3  colorValley;        
  uniform vec3  pointLightPosition;
  varying vec3  vNormal;
  varying vec3  vPosition;
  varying float vDisplacement;

  void main() {
    vec3 normal   = normalize(vNormal);
    vec3 lightDir = normalize(pointLightPosition - vPosition);

    float diffuse = max(dot(normal, lightDir), 0.0) * 0.7 + 0.3; // 0.3 ambient floor

    float fresnel = 1.0 - dot(normal, vec3(0.0, 0.0, 1.0));
    fresnel = pow(fresnel, 3.0) * 0.4;

    float t = clamp(vDisplacement * 0.6 + 0.5, 0.0, 1.0);
    vec3 baseColor = mix(colorValley, colorRidge, t);

    vec3 finalColor = baseColor * diffuse + colorRidge * fresnel;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`

interface OrganicTopographyProps extends React.HTMLAttributes<HTMLDivElement> {}

export function GenerativeOrganicTopography({
  className,
  ...props
}: OrganicTopographyProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<THREE.PointLight | null>(null)

  useEffect(() => {
    const currentMount = mountRef.current
    if (!currentMount) return

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(
      65,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      100
    )
    camera.position.set(0, 2.2, 3.5)
    camera.rotation.x = -0.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setClearColor(0x000000, 0)
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    currentMount.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(14, 9, 192, 192)

    const material = new THREE.ShaderMaterial({
      side: THREE.DoubleSide,
      wireframe: false,
      uniforms: {
        time: { value: 0 },
        pointLightPosition: { value: new THREE.Vector3(2, 3, 4) },
        colorRidge: { value: new THREE.Color(PRAKRITI_SAGE) },
        colorValley: { value: new THREE.Color(PRAKRITI_GREEN) },
      },
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      transparent: true,
    })

    const mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 2
    scene.add(mesh)

    const pointLight = new THREE.PointLight(0xfff8ef, 1.2, 120)
    pointLight.position.set(2, 3, 4)
    lightRef.current = pointLight
    scene.add(pointLight)

    let frameId: number
    const animate = (t: number) => {
      material.uniforms.time.value = t * 0.0001
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)

    const handleResize = () => {
      if (!currentMount) return
      const w = currentMount.clientWidth
      const h = currentMount.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    const resizeObserver = new ResizeObserver(handleResize)
    resizeObserver.observe(currentMount)

    const handleMouseMove = (e: MouseEvent) => {
      if (!lightRef.current) return
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      const pos = new THREE.Vector3(x * 4, 2.5 + y * 1.5, 3 - y * 1.5)
      lightRef.current.position.copy(pos)
      if (material.uniforms.pointLightPosition) {
        material.uniforms.pointLightPosition.value = pos
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      cancelAnimationFrame(frameId)
      resizeObserver.disconnect()
      window.removeEventListener("mousemove", handleMouseMove)
      if (currentMount && renderer.domElement.parentNode === currentMount) {
        currentMount.removeChild(renderer.domElement)
      }
      geometry.dispose()
      material.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={mountRef}
      className={cn("absolute inset-0 w-full h-full z-0", className)}
      {...props}
    />
  )
}
