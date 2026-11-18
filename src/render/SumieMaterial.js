// Sumi-e Ink-Wash Custom Shader Material — Realistic Painterly Ink Wash & Calligraphic Outlines
// Smooth multi-octave ink wash gradients, directional rock/fabric micro-texture,
// hemisphere ambient occlusion, specular rim sheen, and variable-width ink outlines.

import * as THREE from 'three';
import { CONFIG } from '../config.js';

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec3 vLocalPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vLocalPosition = position;
    vNormal = normalize(normalMatrix * normal);
    vWorldNormal = normalize(mat3(modelMatrix) * normal);
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPos.xyz;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    vViewPosition = -mvPosition.xyz;
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = /* glsl */ `
  uniform vec3 uInkDark;
  uniform vec3 uInkMid;
  uniform vec3 uInkLight;
  uniform vec3 uParchment;
  uniform vec3 uRimHighlight;
  uniform vec3 uVermilion;
  uniform vec3 uLightDirection;
  uniform float uHasRedSeal;
  uniform float uSealPulse;
  uniform float uNoiseScale;
  uniform float uFogDensity;
  uniform vec3 uFogColor;
  uniform float uInkContourStrength;
  uniform float uDarkBias;

  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec3 vLocalPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  // Smooth gradient value noise for natural paper & brush wash (no blocky artifacts)
  float hash(vec2 p) {
    vec3 p3 = fract(vec3(p.xyx) * 0.1031);
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.x + p3.y) * p3.z);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0); // Quintic C2 continuous interpolation
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    mat2 rot = mat2(0.8, -0.6, 0.6, 0.8);
    for (int i = 0; i < 4; i++) {
      v += amp * noise(p);
      p = rot * p * 2.05;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 worldNormal = normalize(vWorldNormal);
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(vViewPosition);

    // Realistic half-Lambert diffuse lighting + sky-ground hemisphere ambient occlusion
    float NdotL = dot(worldNormal, lightDir);
    float halfLambert = clamp(NdotL * 0.5 + 0.5, 0.0, 1.0);
    float hemiAO = clamp(worldNormal.y * 0.35 + 0.65, 0.25, 1.0);
    float baseLight = clamp(halfLambert * hemiAO * 1.15 - uDarkBias * 0.4, 0.0, 1.0);

    // Fine directional brush & stone strata texture (subtle, realistic, non-blotchy)
    vec2 strataCoord = vec2(vWorldPosition.x * 0.45, vWorldPosition.y * 1.8) * uNoiseScale;
    float washVariation = (fbm(strataCoord) - 0.5) * 0.14;
    float paperGrain = (noise(vWorldPosition.xy * 18.0) - 0.5) * 0.045;
    float lit = clamp(baseLight + washVariation + paperGrain, 0.0, 1.0);

    // Painterly Sumi-e Continuous Multi-Tone Wash with soft wet-ink transitions
    vec3 tone;
    if (lit < 0.32) {
      tone = mix(uInkDark, uInkMid, smoothstep(0.08, 0.32, lit));
    } else if (lit < 0.66) {
      tone = mix(uInkMid, uInkLight, smoothstep(0.32, 0.66, lit));
    } else {
      tone = mix(uInkLight, uParchment, smoothstep(0.66, 0.96, lit));
    }

    // Subtle specular sheen on upper edges (moonlight / sunlight graze)
    vec3 halfVec = normalize(lightDir + viewDir);
    float spec = pow(max(dot(normal, halfVec), 0.0), 24.0) * 0.18;
    tone = mix(tone, uRimHighlight, spec * (1.0 - uDarkBias));

    // Fine Calligraphic Ink Edge Contour (Fresnel silhouette darkening)
    float NdotV = abs(dot(normal, viewDir));
    float brushWobble = (fbm(vWorldPosition.xy * 3.0) - 0.5) * 0.08;
    float inkEdge = 1.0 - smoothstep(0.12, 0.32 + brushWobble, NdotV);
    vec3 finalColor = mix(tone, uInkDark, inkEdge * uInkContourStrength * 0.85);

    // Top-ledge paper highlight
    if (worldNormal.y > 0.75) {
      float topLight = smoothstep(0.75, 0.98, worldNormal.y) * 0.25;
      finalColor = mix(finalColor, uRimHighlight, topLight * (1.0 - uDarkBias));
    }

    // Vermilion Seal Accent
    if (uHasRedSeal > 0.5) {
      float pulse = 0.84 + 0.16 * sin(uSealPulse);
      finalColor = mix(finalColor, uVermilion * pulse, 0.88);
    }

    // Atmospheric Depth Mist
    float zDist = max(0.0, length(vViewPosition) - 28.0);
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * zDist * zDist);
    finalColor = mix(finalColor, uFogColor, clamp(fogFactor, 0.0, 0.65));

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Calligraphic Inverted-Hull Outline Shader (refined brush thickness)
const outlineVertexShader = /* glsl */ `
  uniform float uOutlineThickness;
  varying vec3 vWorldPos;

  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    float pressure = 0.8 + 0.35 * sin(worldPos.x * 2.9 + worldPos.y * 4.1);
    vec3 extruded = position + normalize(normal) * (uOutlineThickness * pressure);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(extruded, 1.0);
  }
`;

const outlineFragmentShader = /* glsl */ `
  uniform vec3 uOutlineColor;
  void main() {
    gl_FragColor = vec4(uOutlineColor, 1.0);
  }
`;

export function createSumieMaterial(options = {}) {
  const defaults = {
    inkDark: CONFIG.PALETTE.inkDark,
    inkMid: CONFIG.PALETTE.inkMid,
    inkLight: CONFIG.PALETTE.inkLight,
    parchment: CONFIG.PALETTE.parchment,
    rimHighlight: CONFIG.PALETTE.rimHighlight,
    vermilion: CONFIG.PALETTE.vermilion,
    lightDirection: new THREE.Vector3(0.45, 0.82, 0.62).normalize(),
    hasRedSeal: 0.0,
    noiseScale: 1.8,
    fogDensity: 0.004,
    fogColor: new THREE.Color(CONFIG.PALETTE.parchment),
    inkContourStrength: 0.75,
    darkBias: 0.0,
  };

  const opt = { ...defaults, ...options };

  return new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      uInkDark: { value: new THREE.Color(opt.inkDark) },
      uInkMid: { value: new THREE.Color(opt.inkMid) },
      uInkLight: { value: new THREE.Color(opt.inkLight) },
      uParchment: { value: new THREE.Color(opt.parchment) },
      uRimHighlight: { value: new THREE.Color(opt.rimHighlight) },
      uVermilion: { value: new THREE.Color(opt.vermilion) },
      uLightDirection: { value: opt.lightDirection },
      uHasRedSeal: { value: opt.hasRedSeal },
      uSealPulse: { value: 0.0 },
      uNoiseScale: { value: opt.noiseScale },
      uFogDensity: { value: opt.fogDensity },
      uFogColor: { value: opt.fogColor },
      uInkContourStrength: { value: opt.inkContourStrength },
      uDarkBias: { value: opt.darkBias },
    },
  });
}

export function createInkOutlineMaterial(thickness = 0.024, color = 0x141413) {
  return new THREE.ShaderMaterial({
    vertexShader: outlineVertexShader,
    fragmentShader: outlineFragmentShader,
    side: THREE.BackSide,
    uniforms: {
      uOutlineThickness: { value: thickness },
      uOutlineColor: { value: new THREE.Color(color) },
    },
  });
}

export function addInkOutline(mesh, thickness = 0.024, color = 0x141413) {
  if (!mesh || !mesh.geometry) return mesh;
  const outlineMat = createInkOutlineMaterial(thickness * 0.65, color);
  const outlineMesh = new THREE.Mesh(mesh.geometry, outlineMat);
  outlineMesh.name = 'ink_outline';
  mesh.add(outlineMesh);
  return mesh;
}
