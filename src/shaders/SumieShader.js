// Custom GLSL Sumiro Ink-Wash Shader & Pressure-Gapped Pen-Line Outline Pass
// Implements Sumiro's 10-stop Cool-Slate-to-Warm-Paper Ink Ramp, 3D Voronoi Hewn Rock Planes,
// Chisel Crack Lines, Blue-Black Cavity Ink Pools, Notan Wet-Edge Glaze, Dry-Brush Scumble,
// and Pressure-Gapped Calligraphic Pen Outlines.

import * as THREE from 'three';
import { CONFIG } from '../config.js';

export const SUMIE_VERTEX_SHADER = /* glsl */ `
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

export const SUMIE_FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uInkDark;
  uniform vec3 uInkMid;
  uniform vec3 uInkLight;
  uniform vec3 uPaperLight;
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
  uniform float uFacetAmt;
  uniform float uFacetFreq;
  uniform float uCrackAmt;

  varying vec3 vNormal;
  varying vec3 vWorldNormal;
  varying vec3 vWorldPosition;
  varying vec3 vLocalPosition;
  varying vec2 vUv;
  varying vec3 vViewPosition;

  // 3D Value Noise & FBM (from Sumiro shader pipeline)
  float inkHash3(vec3 p) {
    p = fract(p * vec3(443.8975, 397.2973, 491.1871));
    p += dot(p, p.yxz + 19.19);
    return fract((p.x + p.y) * p.z);
  }

  vec3 inkHash33(vec3 p) {
    p = vec3(
      dot(p, vec3(127.1, 311.7, 74.7)),
      dot(p, vec3(269.5, 183.3, 246.1)),
      dot(p, vec3(113.5, 271.9, 124.6))
    );
    return fract(sin(p) * 43758.5453123);
  }

  float inkNoise3(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    vec3 u = f * f * (3.0 - 2.0 * f);
    float n000 = inkHash3(i + vec3(0,0,0));
    float n100 = inkHash3(i + vec3(1,0,0));
    float n010 = inkHash3(i + vec3(0,1,0));
    float n110 = inkHash3(i + vec3(1,1,0));
    float n001 = inkHash3(i + vec3(0,0,1));
    float n101 = inkHash3(i + vec3(1,0,1));
    float n011 = inkHash3(i + vec3(0,1,1));
    float n111 = inkHash3(i + vec3(1,1,1));
    return mix(
      mix(mix(n000, n100, u.x), mix(n010, n110, u.x), u.y),
      mix(mix(n001, n101, u.x), mix(n011, n111, u.x), u.y),
      u.z
    );
  }

  float inkFbm(vec3 p) {
    float v = 0.0;
    float a = 0.55;
    for (int i = 0; i < 3; i++) {
      v += a * inkNoise3(p);
      p = p * 2.07 + vec3(17.1, 31.7, 11.3);
      a *= 0.45;
    }
    return v;
  }

  // 3D Voronoi Hewn Rock Planes: returns (d1, edgeDist = d2-d1, cellNormalTilt.xyz)
  vec4 inkVoronoi(vec3 p) {
    vec3 n = floor(p);
    vec3 f = fract(p);
    float d1 = 8.0;
    float d2 = 8.0;
    vec3 bestId = vec3(0.0);
    for (int k = -1; k <= 1; k++) {
      for (int j = -1; j <= 1; j++) {
        for (int i = -1; i <= 1; i++) {
          vec3 g = vec3(float(i), float(j), float(k));
          vec3 id = n + g;
          vec3 o = inkHash33(id);
          vec3 r = g + o - f;
          float d = dot(r, r);
          if (d < d1) {
            d2 = d1;
            d1 = d;
            bestId = id;
          } else if (d < d2) {
            d2 = d;
          }
        }
      }
    }
    vec3 h = inkHash33(bestId + vec3(7.3, 19.1, 3.7)) * 2.0 - 1.0;
    return vec4(sqrt(d2) - sqrt(d1), h);
  }

  // Sumiro's 10-Stop Cool-Slate-to-Warm-Paper Ink Ramp
  vec3 sampleSumiroRamp(float t) {
    float x = clamp(t, 0.0, 1.0) * 9.0;
    int idx = int(floor(x));
    float f = fract(x);

    vec3 c0 = vec3(0.051, 0.063, 0.078); // Deep blue-black sumi
    vec3 c1 = vec3(0.098, 0.129, 0.157); // Dark indigo-slate
    vec3 c2 = vec3(0.176, 0.204, 0.227); // Cool slate shadow
    vec3 c3 = vec3(0.271, 0.282, 0.286); // Charcoal wash
    vec3 c4 = vec3(0.373, 0.376, 0.369); // Mid neutral stone
    vec3 c5 = vec3(0.475, 0.475, 0.455); // Warm stone wash
    vec3 c6 = vec3(0.588, 0.588, 0.557); // Diluted wash
    vec3 c7 = vec3(0.698, 0.694, 0.659); // Light warm wash
    vec3 c8 = vec3(0.769, 0.722, 0.620); // Aged silk/washi tone
    vec3 c9 = vec3(0.855, 0.816, 0.722); // Sunlit bare paper highlight

    if (idx <= 0) return mix(c0, c1, f);
    if (idx == 1) return mix(c1, c2, f);
    if (idx == 2) return mix(c2, c3, f);
    if (idx == 3) return mix(c3, c4, f);
    if (idx == 4) return mix(c4, c5, f);
    if (idx == 5) return mix(c5, c6, f);
    if (idx == 6) return mix(c6, c7, f);
    if (idx == 7) return mix(c7, c8, f);
    return mix(c8, c9, f);
  }

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 worldNormal = normalize(vWorldNormal);
    vec3 lightDir = normalize(uLightDirection);
    vec3 viewDir = normalize(vViewPosition);

    // 1. 3D Voronoi Hewn Rock Planes & Chisel Cracks
    vec3 vp = vWorldPosition * uFacetFreq;
    vp += (inkFbm(vp * 0.55) - 0.5) * 0.55;
    vec4 vor = inkVoronoi(vp);

    // Tilt surface normal per Voronoi rock plane (breaks smooth geometry into hand-hewn planes)
    float facetScale = (1.0 - clamp(uDarkBias * 1.1, 0.0, 0.85));
    worldNormal = normalize(worldNormal + vor.yzw * (uFacetAmt * facetScale));
    float cellTone = vor.y * 0.08 * facetScale;

    // 2. Illumination & Paper-Tooth Brush Edge
    float ndl = dot(worldNormal, lightDir) * 0.5 + 0.5;
    float hemiAO = clamp(worldNormal.y * 0.32 + 0.68, 0.25, 1.0);
    float tooth = (inkFbm(vWorldPosition * (2.6 * uNoiseScale)) - 0.5) * 0.24;
    float dry = (inkNoise3(vWorldPosition * 9.5) - 0.5) * 0.07;

    float lit = clamp(ndl * hemiAO + tooth + dry + cellTone - uDarkBias * 0.45, 0.0, 1.0);

    // 3. Notan Split: crisp wandering wet brush boundary between sunlit paper and cool shadow wash
    float notanCut = 0.50 + tooth * 0.65;
    float inLight = smoothstep(notanCut - 0.07, notanCut + 0.07, ndl + cellTone * 0.5);
    lit = mix(lit * 0.68, mix(lit, 0.88, 0.52), inLight * (1.0 - uDarkBias * 0.7));

    // Sample Sumiro 10-Stop Ramp & blend with custom material tint
    vec3 rampCol = sampleSumiroRamp(lit);
    vec3 tintTarget = mix(uInkDark, mix(uInkMid, uPaperLight, lit), lit);
    vec3 col = mix(rampCol, tintTarget, 0.28);

    // 4. Wet-Edge Ring (Pigment deposits along the light/shadow wash boundary)
    float notanEdge = exp(-pow((ndl + tooth * 0.5 - 0.50) * 10.5, 2.0));
    float b1 = exp(-pow((lit - 0.34) * 14.0, 2.0));
    float b2 = exp(-pow((lit - 0.62) * 14.0, 2.0));
    float wetEdge = max(max(b1, b2) * 0.55, notanEdge * 0.85);
    col *= 1.0 - wetEdge * 0.22;

    // 5. Voronoi Cell-Edge Chisel Crack Lines
    float crackMask = (1.0 - smoothstep(0.02, 0.085, vor.x)) * (0.35 + 0.65 * (1.0 - inLight));
    crackMask *= smoothstep(0.25, 0.6, inkNoise3(vWorldPosition * 3.5));
    col = mix(col, vec3(0.075, 0.090, 0.102), crackMask * uCrackAmt * facetScale * 0.45);

    // 6. Cavity Ink Pooling (Deep blue-black sumi settles into crevices and underside overhangs)
    float underhang = smoothstep(0.15, -0.55, worldNormal.y);
    float shadowPool = smoothstep(0.45, 0.15, ndl);
    float poolNoise = smoothstep(0.36, 0.70, inkFbm(vWorldPosition * 1.4 + vec3(3.1, 7.7, 1.9)));
    float pool = clamp((underhang * 0.55 + shadowPool * 0.55) * (0.45 + 0.55 * poolNoise), 0.0, 1.0);
    col = mix(col, vec3(0.137, 0.161, 0.176), pool * 0.38);

    // 7. Dry-Brush Scumble & Sunlit Top-Ledge Paper Highlight
    float NdotV = abs(dot(normal, viewDir));
    float graze = 1.0 - NdotV;
    float scumble = smoothstep(0.56, 0.76, inkNoise3(vWorldPosition * 13.0))
                  * smoothstep(0.48, 0.82, lit)
                  * smoothstep(0.2, 0.75, graze);
    col = mix(col, uRimHighlight, scumble * 0.42 * (1.0 - uDarkBias));

    if (worldNormal.y > 0.72) {
      float topWash = smoothstep(0.72, 0.96, worldNormal.y) * 0.26 * (1.0 - uDarkBias);
      col = mix(col, uRimHighlight, topWash);
    }

    // 8. Delicate Pressure-Gapped Pen Contour Line (#0e0d0a)
    float brushWobble = (inkNoise3(vWorldPosition * 3.6) - 0.5) * 0.09;
    float penLift = smoothstep(0.55, 0.92, worldNormal.y) * 0.45; // Pen lifts on sunlit upper edges
    float inkEdge = (1.0 - smoothstep(0.10, 0.27 + brushWobble, NdotV)) * (1.0 - penLift);
    vec3 finalColor = mix(col, vec3(0.055, 0.051, 0.039), inkEdge * uInkContourStrength * 0.82);

    // 9. Vermilion Hanko Seal Accent (#a8321f / #b8292f)
    if (uHasRedSeal > 0.5) {
      float pulse = 0.86 + 0.14 * sin(uSealPulse);
      finalColor = mix(finalColor, uVermilion * pulse, 0.90);
    }

    // 10. Aerial Perspective Mist (Cool grey-cream valley haze fading to warm antique silk)
    float zDist = max(0.0, length(vViewPosition) - 18.0);
    float fogFactor = 1.0 - exp(-uFogDensity * uFogDensity * zDist * zDist);
    vec3 valleyMistCol = mix(vec3(0.745, 0.729, 0.667), uFogColor, 0.65);
    finalColor = mix(finalColor, valleyMistCol, clamp(fogFactor, 0.0, 0.72));

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

// Pressure-Gapped Pen-Line Outline Pass (BackSide extrusion with brush-pressure lift on upper sunlit edges)
export const OUTLINE_VERTEX_SHADER = /* glsl */ `
  uniform float uOutlineThickness;
  varying vec3 vWorldPos;
  varying vec3 vWorldNorm;

  void main() {
    vec4 worldPos = modelMatrix * vec4(position, 1.0);
    vWorldPos = worldPos.xyz;
    vWorldNorm = normalize(mat3(modelMatrix) * normal);
    // Sinusoidal brush-pressure modulation (thinner on sunlit top faces, fuller in crevices)
    float pressure = (0.65 + 0.38 * sin(worldPos.x * 3.4 + worldPos.y * 5.1 + worldPos.z * 2.7))
                   * (1.05 - 0.35 * clamp(vWorldNorm.y, 0.0, 1.0));
    vec3 extruded = position + normalize(normal) * (uOutlineThickness * pressure);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(extruded, 1.0);
  }
`;

export const OUTLINE_FRAGMENT_SHADER = /* glsl */ `
  uniform vec3 uOutlineColor;
  varying vec3 vWorldPos;
  varying vec3 vWorldNorm;

  void main() {
    // Subtle dry-pen skip on top-facing sunlit edges
    float skipWave = sin(vWorldPos.x * 9.3 + vWorldPos.y * 7.1 + vWorldPos.z * 5.7);
    if (vWorldNorm.y > 0.75 && skipWave > 0.55) discard;
    gl_FragColor = vec4(uOutlineColor, 1.0);
  }
`;

export function createSumieMaterial(options = {}) {
  const defaults = {
    inkDark: CONFIG.PALETTE.inkDark,
    inkMid: CONFIG.PALETTE.inkMid,
    inkLight: CONFIG.PALETTE.inkLight,
    paperLight: CONFIG.PALETTE.parchment,
    parchment: CONFIG.PALETTE.parchment,
    rimHighlight: CONFIG.PALETTE.rimHighlight,
    vermilion: CONFIG.PALETTE.vermilion,
    lightDirection: new THREE.Vector3(-0.55, 0.78, 0.42).normalize(),
    hasRedSeal: 0.0,
    noiseScale: 1.8,
    fogDensity: 0.0055,
    fogColor: new THREE.Color(CONFIG.PALETTE.parchment),
    inkContourStrength: 0.72,
    darkBias: 0.0,
    facetAmt: 0.22,
    facetFreq: 1.1,
    crackAmt: 0.7,
  };

  const opt = { ...defaults, ...options };

  return new THREE.ShaderMaterial({
    vertexShader: SUMIE_VERTEX_SHADER,
    fragmentShader: SUMIE_FRAGMENT_SHADER,
    uniforms: {
      uInkDark: { value: new THREE.Color(opt.inkDark) },
      uInkMid: { value: new THREE.Color(opt.inkMid) },
      uInkLight: { value: new THREE.Color(opt.inkLight) },
      uPaperLight: { value: new THREE.Color(opt.paperLight || opt.parchment) },
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
      uFacetAmt: { value: opt.facetAmt },
      uFacetFreq: { value: opt.facetFreq },
      uCrackAmt: { value: opt.crackAmt },
    },
  });
}

export function createInkOutlineMaterial(thickness = 0.022, color = 0x0e0d0a) {
  return new THREE.ShaderMaterial({
    vertexShader: OUTLINE_VERTEX_SHADER,
    fragmentShader: OUTLINE_FRAGMENT_SHADER,
    side: THREE.BackSide,
    uniforms: {
      uOutlineThickness: { value: thickness },
      uOutlineColor: { value: new THREE.Color(color) },
    },
  });
}

export function addInkOutline(mesh, thickness = 0.022, color = 0x0e0d0a) {
  if (!mesh || !mesh.geometry) return mesh;
  const outlineMat = createInkOutlineMaterial(thickness * 0.58, color);
  const outlineMesh = new THREE.Mesh(mesh.geometry, outlineMat);
  outlineMesh.name = 'ink_outline';
  mesh.add(outlineMesh);
  return mesh;
}
