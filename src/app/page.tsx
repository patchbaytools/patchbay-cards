"use client";

// ** Motion Imports
import { motion } from "motion/react";

// ** Custom Components, Hooks, Utils, etc.
import CardTemplate from "@/components/business-card";

const Home = () => {
  return (
    <div className='h-screen w-full relative flex flex-col justify-center items-center overflow-hidden'>
      {/* Parallax background */}
      <motion.div
        className='absolute inset-0 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Card container - centered */}
      <motion.div
        className='relative w-full flex items-center justify-center max-w-md h-64 md:h-96 z-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <CardTemplate />
      </motion.div>

      {/* Floating signup text */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <motion.a
          href='https://www.patchbay.xyz'
          target='_blank'
          rel='noopener noreferrer'
          className='text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors duration-300 cursor-pointer'
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          Visit Patchbay
        </motion.a>
      </motion.div>
    </div>
  );
};

export default Home;
