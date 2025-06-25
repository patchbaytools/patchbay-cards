"use client"

import { useRef, useEffect, useState } from "react"
import { useScroll, useSpring, motion, useTransform } from "framer-motion"
import { useParams } from "next/navigation"
import CardTemplate from "@/components/business-card/card-template"
import DetailedView from "@/components/detailed-view"

// Define CardData type
export type CardData = {
  id: string
  name: string
  title: string
  subtitle: string
  email: string
  phone: string
  location: string
  image: string
  contractingInfo: string[]
  pubLine: string[]
  metadata: {
    isrc: string[]
    upc: string
    rights: string
    publisher: string
  }
}

// Mock API call
const fetchCardData = async (id: string): Promise<CardData> => {
  // Simulate network delay
  await new Promise((res) => setTimeout(res, 500))
  // Return Paul McCartney's data regardless of id
  return {
    id,
    name: "Paul McCartney",
    title: "Musician & Songwriter",
    subtitle: "The Beatles • Wings",
    email: "paul@patchbay.com",
    phone: "+44 20 7946 0958",
    location: "London, UK",
    image: "/images/paul-3.png",
    contractingInfo: [
      "Paul McCartney (fso James Paul McCartney)",
      "10 Downing St.",
      "London, UK SW1A2AA"
    ],
    pubLine: [
      "James Paul McCartney",
      "BMI",
      "IPI 12345678909"
    ],
    metadata: {
      isrc: ["USRC12345678", "GBRC98765432"],
      upc: "602567924128",
      rights: "BMI",
      publisher: "MPL Communications"
    }
  }
}

const LicensePage = () => {
  const { id } = useParams<{ id: string }>()
  const [data, setData] = useState<CardData | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const containerRef = useRef<HTMLDivElement>(null)

  // Smooth scroll
  const { scrollYProgress } = useScroll({ container: containerRef })
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  // Always call useTransform, even if loading
  const yTransform = useTransform(smoothScrollProgress, [0, 1], [0, -100])

  useEffect(() => {
    setLoading(true)
    fetchCardData(id).then((d) => {
      setData(d)
      setLoading(false)
    })
  }, [id])

  if (loading) return <div className="flex h-screen items-center justify-center">Loading...</div>

  return (
    <div 
      ref={containerRef} 
      className="h-screen overflow-auto snap-y snap-mandatory hide-scrollbar"
    >
      <section className="h-screen w-full relative snap-start flex flex-col justify-between items-center">
        {/* Parallax background */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
          style={{ y: yTransform }}
        />
        {/* Spacer for top */}
        <div></div>
        {/* Card container - centered */}
        <div className="relative w-full flex items-center justify-center max-w-md h-64 md:h-96 z-10">
          <CardTemplate data={data} />
        </div>
        {/* Scroll indicator - at bottom */}
        <motion.div
          className="relative mb-[18px] z-20"
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
        <DetailedView data={data} />
      </section>
      <div className="w-full text-center py-4 text-gray-500 text-xs">ID: {id}</div>
    </div>
  )
} 

export default LicensePage;