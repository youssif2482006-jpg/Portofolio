import { useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei'
import * as THREE from 'three'

export function CenterpieceMesh() {
  const groupRef = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Mesh>(null)
  const { pointer } = useThree()

  useFrame((_state, delta) => {
    if (groupRef.current) {
      // gentle parallax toward the pointer
      const targetY = pointer.x * 0.5
      const targetX = pointer.y * 0.3
      groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.03
      groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.03
    }
    if (meshRef.current) {
      meshRef.current.rotation.z += delta * 0.06
      meshRef.current.rotation.y += delta * 0.04
    }
  })

  return (
    <group ref={groupRef}>
      <Icosahedron ref={meshRef} args={[2.1, 12]}>
        <MeshDistortMaterial
          color="#0d1b1f"
          emissive="#22e5ff"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.6}
          distort={0.35}
          speed={1.4}
          wireframe
        />
      </Icosahedron>
      <Icosahedron args={[1.55, 8]}>
        <meshBasicMaterial color="#22e5ff" wireframe transparent opacity={0.12} />
      </Icosahedron>
    </group>
  )
}
