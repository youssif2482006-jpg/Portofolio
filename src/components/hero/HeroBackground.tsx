import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { CenterpieceMesh } from './CenterpieceMesh'
import { ParticleField } from './ParticleField'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

export function HeroBackground() {
  const prefersReducedMotion = usePrefersReducedMotion()

  if (prefersReducedMotion) {
    return (
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 60% at 50% 40%, rgba(34,229,255,0.16) 0%, rgba(5,5,10,0) 70%)',
        }}
      />
    )
  }

  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 45 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <pointLight position={[6, 4, 6]} intensity={40} color="#22e5ff" />
          <pointLight position={[-6, -3, -4]} intensity={15} color="#8ff6ff" />
          <fog attach="fog" args={['#05050a', 6, 13]} />
          <CenterpieceMesh />
          <ParticleField />
        </Suspense>
      </Canvas>
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, rgba(5,5,10,0) 30%, #05050a 100%)',
        }}
      />
    </div>
  )
}
