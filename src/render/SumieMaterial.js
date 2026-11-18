// Sumi-e Ink-Wash Custom Shader Material & Calligraphic Ink Outline System
// High-contrast 4-step sumi-e tonal wash, dark ink silhouette Fresnel contours,
// dry-brush paper tooth grain, and inverted-hull calligraphic black ink outlines.

import * as THREE from 'three';
import { CONFIG } from '../config.js';

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
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
  varying vec2 vUv;
  varying vec3 vViewPosition;

  // Procedural 2D hash & FBM brush-stroke noise
  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    float a = hash(i);
    float b = hash(i + vec2(1.0, 0.0));
    float c = hash(i + vec2(0.0, 1.0));
    float d = hash(i + vec2(1.0, 1.0));
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float amp = 0.5;
    for (int i = 0; i < 3; i++) {
      v += amp * noise(p);
      p *= 2.15;
      amp *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 worldNormal = normalize(vWorldNormal);
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(vViewPosition);

    // Directional sumi-e lighting with strong front-top illumination for crisp tonal separation
    float NdotL = dot(worldNormal, lightDir);
    float lightIntensity = clamp((NdotL + 1.05) * 0.56 - uDarkBias * 0.45, 0.0, 1.0);

    // Directional dry-brush streak noise (stretched horizontally like brush strokes)
    vec2 brushCoord = vec2(vWorldPosition.x * 0.65, vWorldPosition.y * 1.4) * uNoiseScale;
    float brushGrain = (fbm(brushCoord) - 0.5) * 0.22;
    float fineTooth = (noise(vWorldPosition.xy * uNoiseScale * 3.5) - 0.5) * 0.10;
    float perturbed = lightIntensity + brushGrain + fineTooth;

    // 4-Step Sumi-e Tonal Wash Quantization (Balanced Ink & Paper Washes)
    vec3 tone;
    if (perturbed < 0.22) {
      tone = uInkDark;
    } else if (perturbed < 0.48) {
      tone = mix(uInkDark, uInkMid, smoothstep(0.20, 0.36, perturbed));
    } else if (perturbed < 0.72) {
      tone = mix(uInkMid, uInkLight, smoothstep(0.46, 0.62, perturbed));
    } else {
      tone = mix(uInkLight, uParchment, smoothstep(0.70, 0.88, perturbed));
    }

    // Internal masonry / brush crevice darkened lines
    float crevice = abs(fract(vWorldPosition.y * 0.85 + brushGrain * 0.5) - 0.5);
    if (crevice < 0.035 && uInkContourStrength > 0.5) {
      tone = mix(uInkDark, tone, 0.35);
    }

    // Sumi-e Dark Ink Silhouette Edge (Fresnel contour darkening on grazing angles)
    float NdotV = abs(dot(normal, viewDir));
    float edgeNoise = (noise(vWorldPosition.xy * 6.0) - 0.5) * 0.14;
    float inkEdge = 1.0 - smoothstep(0.18, 0.42 + edgeNoise, NdotV);
    vec3 finalColor = mix(tone, uInkDark, inkEdge * uInkContourStrength);

    // Top-facing snow/paper highlight on sharp upward ledges
    if (worldNormal.y > 0.72) {
      float topWash = smoothstep(0.72, 0.95, worldNormal.y) * 0.35;
      finalColor = mix(finalColor, uRimHighlight, topWash * (1.0 - uDarkBias));
    }

    // Vermilion Seal Accent
    if (uHasRedSeal > 0.5) {
      float pulse = 0.82 + 0.18 * sin(uSealPulse);
      finalColor = mix(finalColor, uVermilion * pulse, 0.88);
    }

    // Subtle distance mist (only far depths, preserving foreground contrast)
    float zDist = max(0.0, length(vViewPosition) - 26.0);
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * zDist * zDist);
    finalColor = mix(finalColor, uFogColor, clamp(fogFactor, 0.0, 0.65));

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Inverted-Hull Calligraphic Black Ink Outline Shader
const outlineVertexShader = /* glsl */ `
  uniform float uOutlineThickness;
  varying vec3 vWorldPos;

  float hash(vec2 p) {
    p = fract(p * vec2(123.34, 456.21));
    p += dot(p, p + 45.32);
    return fract(p.x * p.y);
  }

  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    // Organic brush pressure variation along world position
    float pressure = 0.75 + 0.5 * sin(worldPos.x * 3.7 + worldPos.y * 5.3);
    vec3 extruded = position + normalize(normal) * (uOutlineThickness * pressure);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(extruded, 1.0);
  }
`;

const outlineFragmentShader = /* glsl */ `
  uniform vec3 uOutlineColor;
  varying vec3 vWorldPos;

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
    lightDirection: new THREE.Vector3(0.4, 0.85, 0.55).normalize(),
    hasRedSeal: 0.0,
    noiseScale: 3.5,
    fogDensity: 0.0045,
    fogColor: new THREE.Color(CONFIG.PALETTE.parchment),
    inkContourStrength: 0.85,
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

export function createInkOutlineMaterial(thickness = 0.038, color = 0x111110) {
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

/**
 * Attaches an inverted-hull calligraphic black ink outline child mesh to any THREE.Mesh
 */
export function addInkOutline(mesh, thickness = 0.038, color = 0x111110) {
  if (!mesh || !mesh.geometry) return mesh;
  const outlineMat = createInkOutlineMaterial(thickness, color);
  const outlineMesh = new THREE.Mesh(mesh.geometry, outlineMat);
  outlineMesh.name = 'ink_outline';
  mesh.add(outlineMesh);
  return mesh;
}
