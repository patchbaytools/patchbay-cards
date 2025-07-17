"use client";

// ** Motion Imports
import { motion } from "motion/react";

// ** Custom Components, Hooks, Utils, etc.
import CardTemplate from "@/components/business-card/index";

const Home = () => {
  return (
    <div className=' h-screen w-full relative flex flex-col justify-center items-center overflow-hidden'>
      {/* Parallax background */}

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
        <CardTemplate />
      </motion.div>
      {/* Floating signup text */}
    </div>
  );
};

export default Home;
