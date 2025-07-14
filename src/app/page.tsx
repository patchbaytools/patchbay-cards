"use client";

// ** Motion Imports
import { motion } from "motion/react";

// ** Custom Components, Hooks, Utils, etc.
import CardTemplate from "@/components/business-card/index";

const Home = () => {
  return (
    <div className=' h-screen w-full relative flex flex-col justify-center items-center overflow-hidden'>
      {/* Parallax background */}
      hi
      <motion.div
        className={`relative inset-0 bg-[url('/images/blurrybackgroundphoto.jpg')] [background-attachment:fixed
`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        className='relative w-full flex items-center justify-center max-w-md h-64 md:h-96 z-10'
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* <motion.header className='  text-white w-full h-[36px] flex flex-row justify-between items-center px-4 z-20'>
          <span
            className='text-[24px] text-white bg-red-500 p-2 border-2 border-yellow-400'
            style={{ fontFamily: "var(--font-inconsolata)" }}
          >
            [LOGO]
          </span>
          <div className='flex flex-row items-center gap-[27px]'>
            <span
              className='text-[24px] text-white'
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              [CONTACT]
            </span>
            <span
              className='text-[24px] text-white'
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              [SOCIALS]
            </span>
          </div>
        </motion.header> */}
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
