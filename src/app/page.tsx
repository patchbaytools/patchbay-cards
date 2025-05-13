"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas } from "@react-three/fiber"
import { useScroll, useSpring, motion, useTransform } from "framer-motion"
import BusinessCard from "@/components/business-card"
import DetailedView from "@/components/detailed-view"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollY, setScrollY] = useState(0)

  // Set up smooth scrolling with spring physics
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  // Track scroll progress for animations
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((v) => {
      setScrollY(v)
    })
    return unsubscribe
  }, [scrollYProgress])

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-auto snap-y snap-mandatory hide-scrollbar"
    >
      <section className="h-screen w-full relative snap-start flex flex-col items-center justify-center">
        {/* Parallax background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
          style={{ 
            y: useTransform(smoothScrollProgress, [0, 1], [0, -100]) 
          }}
        />
        
        {/* Card container */}
        <div className="relative w-full max-w-md h-64 md:h-96 z-10">
          <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
            <BusinessCard rotation={[0, scrollY * Math.PI * 2, 0]} />
          </Canvas>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-0 right-0 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
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
              className="text-gray-700 dark:text-gray-200"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      <section className="min-h-screen w-full bg-gray-50 dark:bg-gray-900 snap-start">
        <DetailedView />
      </section>
    </div>
  )
}
