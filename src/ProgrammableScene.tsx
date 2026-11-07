import { useMemo, useRef, useState } from 'react';
import { Canvas, ThreeEvent, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

const EMERALD = new THREE.Color('#34D399');
const PURPLE = new THREE.Color('#A855F7');
const PEARL = new THREE.Color('#F4F7F6');

function LogoMonolith({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const svg = useLoader(SVGLoader, `${process.env.PUBLIC_URL}/logo.svg`);
  const logoParts = useMemo(() => {
    const scale = 0.015;

    return svg.paths.slice(1).flatMap((path, pathIndex) => {
      const spine = pathIndex === 1;
      const depth = spine ? 34 : 28;

      return SVGLoader.createShapes(path).map((shape) => {
        const geometry = new THREE.ExtrudeGeometry(shape, {
          depth,
          bevelEnabled: true,
          bevelSegments: 4,
          bevelSize: spine ? 1.8 : 2.5,
          bevelThickness: spine ? 2.2 : 3,
          curveSegments: 18,
        });

        geometry.scale(scale, -scale, scale);
        geometry.translate(-150 * scale, 150 * scale, -(depth * scale) / 2);
        geometry.computeVertexNormals();

        return { geometry, spine };
      });
    });
  }, [svg]);

  useFrame((state) => {
    if (!group.current) return;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = reducedMotion ? 0 : Math.min(window.scrollY / maxScroll, 1);
    const dissolve = THREE.MathUtils.smoothstep(progress, 0.008, 0.17);
    const opacity = 1 - dissolve;

    group.current.visible = opacity > 0.005;
    group.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.08, dissolve));
    group.current.position.z = THREE.MathUtils.lerp(0.2, -0.25, dissolve);

    group.current.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      const material = object.material as THREE.MeshPhysicalMaterial;
      material.opacity = opacity;
      material.emissiveIntensity = object.name === 'logo-spine'
        ? THREE.MathUtils.lerp(0.68, 1.25, dissolve)
        : THREE.MathUtils.lerp(0.08, 0.34, dissolve);
    });

    if (!reducedMotion) {
      const time = state.clock.elapsedTime;
      const targetRotationY = -0.12 + Math.sin(time * 0.38) * 0.07 + state.pointer.x * 0.07;
      const targetRotationX = 0.025 + Math.sin(time * 0.46) * 0.025 - state.pointer.y * 0.035;
      const targetRotationZ = Math.sin(time * 0.3) * 0.012;

      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.035);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.035);
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, targetRotationZ, 0.025);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(time * 0.52) * 0.055, 0.03);
    }
  });

  return (
    <group ref={group} position={[2, 0, 0.2]} rotation={[0.03, -0.16, -0.015]}>
      {logoParts.map(({ geometry, spine }, index) => (
        <mesh
          key={index}
          name={spine ? 'logo-spine' : 'logo-shell'}
          geometry={geometry}
          position={spine ? [0, 0, 0.08] : [0, 0, 0]}
          castShadow
          receiveShadow
        >
          <meshPhysicalMaterial
            color={spine ? '#70ffaf' : '#f9f9f9'}
            emissive={spine ? '#34d399' : '#ffffff'}
            emissiveIntensity={spine ? 0.52 : 0.12}
            metalness={spine ? 0.08 : 0.12}
            roughness={spine ? 0.16 : 0.24}
            clearcoat={spine ? 0.9 : 0.65}
            clearcoatRoughness={spine ? 0.1 : 0.18}
            transparent
          />
        </mesh>
      ))}
      <pointLight position={[0, 0.15, 1.4]} color={EMERALD} intensity={2.2} distance={4.5} />
      <pointLight position={[0.7, -0.8, -0.5]} color={PURPLE} intensity={2.4} distance={4} />
    </group>
  );
}

type ModuleProps = {
  index: number;
  origin: [number, number, number];
  destination: [number, number, number];
  part: 'shell' | 'spine';
  reducedMotion: boolean;
};

function Module({ index, origin, destination, part, reducedMotion }: ModuleProps) {
  const mesh = useRef<THREE.Mesh>(null);
  const material = useRef<THREE.MeshPhysicalMaterial>(null);
  const [hovered, setHovered] = useState(false);
  const destinationColor = useMemo(() => (index % 7 === 0 ? PURPLE : EMERALD), [index]);

  useFrame((state) => {
    if (!mesh.current) return;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = reducedMotion ? 0 : Math.min(window.scrollY / maxScroll, 1);
    const unfold = THREE.MathUtils.smoothstep(progress, 0.03, 0.34);
    const reveal = THREE.MathUtils.smoothstep(progress, 0.15, 0.24);
    const ecosystem = THREE.MathUtils.smoothstep(progress, 0.58, 0.94);
    const x = THREE.MathUtils.lerp(origin[0], destination[0], unfold);
    const y = THREE.MathUtils.lerp(origin[1], destination[1], unfold);
    const z = THREE.MathUtils.lerp(origin[2], destination[2], unfold);
    const orbit = reducedMotion ? 0 : state.clock.elapsedTime * (0.08 + (index % 4) * 0.012);

    mesh.current.visible = reveal > 0.005;
    mesh.current.position.set(
      x + Math.sin(orbit + index) * 0.08 * unfold,
      y + Math.cos(orbit * 0.8 + index) * 0.07 * unfold,
      z + Math.sin(orbit * 0.6 + index) * 0.08 * unfold,
    );
    mesh.current.rotation.x += reducedMotion ? 0 : 0.0015 + index * 0.000015;
    mesh.current.rotation.y += reducedMotion ? 0 : 0.002;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4 + index) * 0.025 * (1 - ecosystem);
    const scale = (hovered ? 1.28 : 1) * pulse;
    mesh.current.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.08);

    if (material.current) {
      const sourceColor = part === 'spine' ? EMERALD : PEARL;
      material.current.color.lerpColors(sourceColor, destinationColor, unfold);
      material.current.emissive.lerpColors(sourceColor, destinationColor, unfold);
      material.current.emissiveIntensity = hovered ? 2.4 : THREE.MathUtils.lerp(part === 'spine' ? 1.1 : 0.16, 0.85, unfold);
      material.current.opacity = reveal * THREE.MathUtils.lerp(0.04, index % 7 === 0 ? 0.62 : 0.92, unfold);
    }
  });

  const handlePointer = (event: ThreeEvent<PointerEvent>, active: boolean) => {
    event.stopPropagation();
    setHovered(active);
    document.body.style.cursor = active ? 'crosshair' : '';
  };

  return (
    <mesh
      ref={mesh}
      position={origin}
      visible={false}
      onPointerOver={(event) => handlePointer(event, true)}
      onPointerOut={(event) => handlePointer(event, false)}
    >
      {part === 'spine' ? (
        <boxGeometry args={[0.22, 0.3, 0.3]} />
      ) : index % 3 === 0 ? (
        <octahedronGeometry args={[0.19 + (index % 4) * 0.025, 0]} />
      ) : (
        <boxGeometry args={[0.28, 0.28, 0.28]} />
      )}
      <meshPhysicalMaterial
        ref={material}
        color={part === 'spine' ? EMERALD : PEARL}
        emissive={part === 'spine' ? EMERALD : PEARL}
        emissiveIntensity={part === 'spine' ? 1.1 : 0.16}
        roughness={0.22}
        metalness={0.72}
        transparent
        opacity={0}
        depthWrite={false}
      />
    </mesh>
  );
}

function Universe({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const line = useRef<THREE.LineSegments>(null);

  const modules = useMemo(() => {
    const upperLeft: Array<[number, number]> = [
      [1.78, 1.52], [1.48, 1.52], [1.18, 1.48], [0.94, 1.32], [0.8, 1.06],
      [0.78, 0.76], [0.88, 0.51], [1.1, 0.36], [1.4, 0.31], [1.72, 0.31],
    ];
    const upperRight: Array<[number, number]> = [
      [2.22, 1.52], [2.53, 1.52], [2.83, 1.48], [3.07, 1.32], [3.2, 1.06],
      [3.22, 0.76], [3.12, 0.51], [2.9, 0.36], [2.61, 0.31], [2.28, 0.31],
    ];
    const mirror = (points: Array<[number, number]>) => points.map(([x, y]) => [x, -y] as [number, number]);
    const shell = [...upperLeft, ...upperRight, ...mirror(upperLeft), ...mirror(upperRight)];
    const spine = Array.from({ length: 11 }, (_, index) => [2, 1.5 - index * 0.3] as [number, number]);
    const logo = [
      ...shell.map(([x, y], index) => ({
        origin: [x, y, (index % 4) * 0.025] as [number, number, number],
        part: 'shell' as const,
      })),
      ...spine.map(([x, y]) => ({
        origin: [x, y, 0.12] as [number, number, number],
        part: 'spine' as const,
      })),
    ];

    return logo.map((module, index) => {
      const angle = index * 2.39996;
      const radius = 1.8 + (index % 7) * 0.36;
      return {
        origin: module.origin,
        part: module.part,
        destination: [
          Math.cos(angle) * radius + 0.75,
          Math.sin(angle) * radius * 0.7,
          Math.sin(angle * 0.62) * 1.65 - 0.4,
        ] as [number, number, number],
      };
    });
  }, []);

  const connectionGeometry = useMemo(() => {
    const positions = new Float32Array(18 * 2 * 3);
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame((state) => {
    if (!group.current || !line.current) return;
    const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const progress = reducedMotion ? 0 : Math.min(window.scrollY / maxScroll, 1);
    const unfold = THREE.MathUtils.smoothstep(progress, 0.03, 0.34);
    const connect = THREE.MathUtils.smoothstep(progress, 0.14, 0.46);
    const pointerX = reducedMotion ? 0 : state.pointer.x * 0.2;
    const pointerY = reducedMotion ? 0 : state.pointer.y * 0.12;

    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, pointerX + progress * 0.8, 0.025);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -pointerY + progress * 0.12, 0.025);
    group.current.position.x = THREE.MathUtils.lerp(0, -0.7, THREE.MathUtils.smoothstep(progress, 0.2, 0.65));

    const positions = line.current.geometry.attributes.position.array as Float32Array;
    for (let edge = 0; edge < 18; edge += 1) {
      const a = modules[edge];
      const b = modules[(edge * 3 + 5) % modules.length];
      const base = edge * 6;
      positions[base] = THREE.MathUtils.lerp(a.origin[0], a.destination[0], unfold);
      positions[base + 1] = THREE.MathUtils.lerp(a.origin[1], a.destination[1], unfold);
      positions[base + 2] = THREE.MathUtils.lerp(a.origin[2], a.destination[2], unfold);
      positions[base + 3] = THREE.MathUtils.lerp(b.origin[0], b.destination[0], unfold);
      positions[base + 4] = THREE.MathUtils.lerp(b.origin[1], b.destination[1], unfold);
      positions[base + 5] = THREE.MathUtils.lerp(b.origin[2], b.destination[2], unfold);
    }
    line.current.geometry.attributes.position.needsUpdate = true;
    (line.current.material as THREE.LineBasicMaterial).opacity = connect * 0.42;
  });

  return (
    <group ref={group}>
      <LogoMonolith reducedMotion={reducedMotion} />
      {modules.map((module, index) => (
        <Module
          key={index}
          index={index}
          origin={module.origin}
          destination={module.destination}
          part={module.part}
          reducedMotion={reducedMotion}
        />
      ))}
      <lineSegments ref={line} geometry={connectionGeometry}>
        <lineBasicMaterial
          color={EMERALD}
          transparent
          opacity={0}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
      <mesh position={[1.95, 0, -0.6]}>
        <sphereGeometry args={[2.8, 32, 32]} />
        <meshBasicMaterial color={PURPLE} transparent opacity={0.018} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}

export default function ProgrammableScene() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="scene-canvas" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8.2], fov: 48 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      >
        <ambientLight intensity={0.22} />
        <pointLight position={[4, 3, 5]} color={EMERALD} intensity={12} distance={14} />
        <pointLight position={[-4, -2, 2]} color={PURPLE} intensity={9} distance={12} />
        <fog attach="fog" args={['#000000', 7, 16]} />
        <Universe reducedMotion={reducedMotion} />
      </Canvas>
    </div>
  );
}
