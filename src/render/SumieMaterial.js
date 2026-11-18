// Sumi-e Ink-Wash Custom Shader Material
// 3-step tonal wash, world-space lighting, brush-grain noise edge breakup, rim highlight & vermilion seal

import * as THREE from 'three';
import { CONFIG } from '../config.js';

const vertexShader = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  void main() {
    vUv = uv;
    vNormal = normalize(normalMatrix * normal);
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

  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  // Simple procedural 2D/3D pseudo-noise for brush grain tooth
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

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(vViewPosition);

    // Diffuse lighting intensity
    float NdotL = dot(normal, lightDir);
    float lightIntensity = clamp((NdotL + 1.0) * 0.5, 0.0, 1.0);

    // World-space brush tooth noise on tonal transitions
    vec2 noiseCoord = vWorldPosition.xy * uNoiseScale;
    float grain = (noise(noiseCoord) - 0.5) * 0.18;
    float perturbed = lightIntensity + grain;

    // 3-Step Tonal Wash Quantization with Soft Tooth
    vec3 tone;
    if (perturbed < 0.35) {
      // Dark Ink
      tone = mix(uInkDark, uInkMid, smoothstep(0.20, 0.35, perturbed));
    } else if (perturbed < 0.70) {
      // Mid Wash
      tone = mix(uInkMid, uInkLight, smoothstep(0.35, 0.70, perturbed));
    } else {
      // Light Wash / Parchment
      tone = mix(uInkLight, uParchment, smoothstep(0.70, 0.90, perturbed));
    }

    // Subtle Rim Highlight on grazing angles
    float fresnel = 1.0 - clamp(dot(normal, viewDir), 0.0, 1.0);
    float rim = smoothstep(0.65, 0.95, fresnel) * 0.45;
    vec3 finalColor = mix(tone, uRimHighlight, rim);

    // Vermilion Seal Accent
    if (uHasRedSeal > 0.5) {
      float pulse = 0.8 + 0.2 * sin(uSealPulse);
      finalColor = mix(finalColor, uVermilion * pulse, 0.85);
    }

    // FogExp2 blending
    float depth = length(vViewPosition);
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * depth * depth);
    finalColor = mix(finalColor, uFogColor, clamp(fogFactor, 0.0, 1.0));

    gl_FragColor = vec4(finalColor, 1.0);
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
    lightDirection: new THREE.Vector3(0.5, 1.0, 0.7).normalize(),
    hasRedSeal: 0.0,
    noiseScale: 4.5,
    fogDensity: 0.022,
    fogColor: new THREE.Color(CONFIG.PALETTE.parchment),
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
    },
  });
}
