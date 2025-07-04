"use client";

// ** React/Next.js Imports
import { useRef } from "react";

// ** Motion Imports
import { useScroll, useSpring, motion, useTransform } from "motion/react";

// ** Custom Components, Hooks, Utils, etc.
import CardTemplate from "@/components/business-card";
import DetailedView from "@/components/detailed-view";
import type { CardData } from "@/lib/getCardData";

export default function BusinessCard({
  data,
  id,
}: {
  data: CardData;
  id: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const yTransform = useTransform(smoothScrollProgress, [0, 1], [0, -100]);

  return (
    <div
      ref={containerRef}
      className='h-screen overflow-auto snap-y snap-mandatory hide-scrollbar'
    >
      <section className='h-screen w-full relative snap-start flex flex-col justify-between items-center'>
        <motion.div
          className='absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'
          style={{ y: yTransform }}
        />
        <div></div>
        <div className='relative w-full flex items-center justify-center max-w-md h-64 md:h-96 z-10'>
          <CardTemplate data={data} />
        </div>
        <motion.div
          className='relative mb-[18px] z-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className='bg-white dark:bg-gray-800 p-3 rounded-full shadow-md'
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='text-gray-700 dark:text-gray-200'
            >
              <path d='M12 5v14' />
              <path d='m19 12-7 7-7-7' />
            </svg>
          </motion.div>
        </motion.div>
      </section>
      <section className='min-h-screen w-full bg-gray-50 dark:bg-gray-900 snap-start'>
        <DetailedView data={data} />
      </section>
      <div className='w-full text-center py-4 text-gray-500 text-xs'>
        ID: {id}
      </div>
    </div>
  );
}
