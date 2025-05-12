"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { useScroll, useSpring, motion } from "framer-motion"
import BusinessCard from "@/components/business-card"
import DetailedView from "@/components/detailed-view"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)
  const [_windowHeight, setWindowHeight] = useState(0)

  // Set up smooth scrolling with spring physics
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const _smoothScrollY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowHeight(window.innerHeight)

      const handleResize = () => {
        setWindowHeight(window.innerHeight)
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setScrollY(v)
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div ref={containerRef} className="h-screen overflow-auto snap-y snap-mandatory">
      <section className="h-screen w-full relative snap-start">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full max-w-md h-64 md:h-80">
            <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
              <BusinessCard rotation={[0, scrollY * Math.PI * 2, 0]} />
            </Canvas>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            className="animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-700"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </section>

      <section className="min-h-screen w-full bg-gray-50 snap-start">
        <DetailedView />
      </section>
    </div>
  )
}
