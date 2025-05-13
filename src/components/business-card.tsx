"use client"

import { useRef, useState } from "react"
import { useFrame } from "@react-three/fiber"
import { Text, useTexture } from "@react-three/drei"
import type { Group } from "three"

interface BusinessCardProps {
  rotation?: [number, number, number]
}

export default function BusinessCard({ rotation = [0, 0, 0] }: BusinessCardProps) {
  const cardRef = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)

  // Use a placeholder texture for now - will be replaced with actual design
  const texture = useTexture("/placeholder.svg")

  useFrame((state, delta) => {
    if (cardRef.current) {
      // Apply the rotation from props (controlled by scroll)
      cardRef.current.rotation.x = rotation[0]
      cardRef.current.rotation.y = rotation[1]
      cardRef.current.rotation.z = rotation[2]

      // Add a subtle floating animation
      cardRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }
  })

  return (
    <group
      ref={cardRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      {/* Card base with subtle gradient */}
      <mesh castShadow receiveShadow position={[0, 0, 0]}>
        <boxGeometry args={[3.5, 2, 0.05]} />
        <meshStandardMaterial color="#ffffff" metalness={0.1} roughness={0.2} />
      </mesh>

      {/* Front face content */}
      <group position={[0, 0, 0.03]}>
        <Text 
          position={[-1.2, 0.6, 0]} 
          fontSize={0.25}
          color="#262626" 
          anchorX="left"
          font="/fonts/Inter-Bold.woff"
          letterSpacing={0.02}
        >
          PAUL MCCARTNEY
        </Text>

        <Text 
          position={[-1.2, 0.3, 0]} 
          fontSize={0.12} 
          color="#404040" 
          anchorX="left"
          font="/fonts/Inter-Regular.woff"
        >
          Artist, Producer, Songwriter • BMI
        </Text>

        {/* Profile image */}
        <mesh position={[1.2, 0.5, 0]} castShadow>
          <circleGeometry args={[0.4, 32]} />
          <meshStandardMaterial map={texture} />
        </mesh>

        {/* Dots in the corner */}
        <group position={[1.2, 0, 0]}>
          <mesh position={[-0.1, 0, 0]}>
            <circleGeometry args={[0.05, 32]} />
            <meshStandardMaterial color="#262626" />
          </mesh>
          <mesh position={[0.1, 0, 0]}>
            <circleGeometry args={[0.05, 32]} />
            <meshStandardMaterial color="#262626" />
          </mesh>
          <mesh position={[-0.1, -0.2, 0]}>
            <circleGeometry args={[0.05, 32]} />
            <meshStandardMaterial color="#262626" />
          </mesh>
          <mesh position={[0.1, -0.2, 0]}>
            <circleGeometry args={[0.05, 32]} />
            <meshStandardMaterial color="#262626" />
          </mesh>
        </group>

        {/* Contract info */}
        <Text 
          position={[-1.2, -0.2, 0]} 
          fontSize={0.12} 
          color="#262626" 
          anchorX="left" 
          font="/fonts/Inter-Bold.woff"
        >
          CONTRACTING INFO
        </Text>

        <Text
          position={[-1.2, -0.4, 0]}
          fontSize={0.08}
          color="#404040"
          anchorX="left"
          maxWidth={1.5}
          font="/fonts/Inter-Regular.woff"
        >
          Paul McCartney 10 Downing St. London, UK SW1A2AA
        </Text>

        {/* Publishing info */}
        <Text 
          position={[0.5, -0.2, 0]} 
          fontSize={0.12} 
          color="#262626" 
          anchorX="left" 
          font="/fonts/Inter-Bold.woff"
        >
          PUB LINE
        </Text>

        <Text 
          position={[0.5, -0.4, 0]} 
          fontSize={0.08} 
          color="#404040" 
          anchorX="left"
          font="/fonts/Inter-Regular.woff"
        >
          James Paul McCartney BMI IPI 12345678909
        </Text>
      </group>
    </group>
  )
}
