import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const FloatingElements = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const heartsRef = useRef<THREE.Group>(null);

  // Generate random positions for floating particles
  const particleCount = 100;
  const particles = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 1] = (Math.random() - 0.5) * 20;
    particles[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
    
    if (heartsRef.current) {
      heartsRef.current.rotation.y = -state.clock.elapsedTime * 0.03;
      heartsRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <>
      {/* Ambient light */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color="#f8b5d0" />

      {/* Floating particles */}
      <Points ref={pointsRef} positions={particles} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#f8b5d0"
          size={0.1}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Floating hearts */}
      <group ref={heartsRef}>
        {Array.from({ length: 5 }, (_, i) => (
          <mesh
            key={i}
            position={[
              Math.sin(i * 2) * 3,
              Math.cos(i * 1.5) * 2,
              Math.sin(i * 0.8) * 2
            ]}
          >
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="#f8b5d0" transparent opacity={0.6} />
          </mesh>
        ))}
      </group>

      {/* Cat silhouettes */}
      {Array.from({ length: 3 }, (_, i) => (
        <mesh
          key={`cat-${i}`}
          position={[
            Math.cos(i * 2.5) * 4,
            Math.sin(i * 1.8) * 1,
            Math.cos(i * 1.2) * 3
          ]}
        >
          <boxGeometry args={[0.2, 0.1, 0.1]} />
          <meshBasicMaterial color="#c084fc" transparent opacity={0.4} />
        </mesh>
      ))}
    </>
  );
};