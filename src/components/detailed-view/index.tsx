"use client";

// ** Motion Imports
import { motion } from "motion/react";

type CardData = {
  name?: string;
  title?: string;
  subtitle?: string;
  contractingInfo?: string[];
  pubLine?: string[];
  metadata?: {
    isrc?: string[];
    upc?: string;
    rights?: string;
    publisher?: string;
  };
};

export default function DetailedView({ data }: { data?: CardData }) {
  if (!data) return null;
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  return (
    <div className='container mx-auto px-4 py-16'>
      <motion.div
        className='max-w-3xl mx-auto'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div variants={cardVariants}>
          <h1 className='text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100'>
            {data.name || "Paul McCartney"}
          </h1>
          <p className='text-xl mb-8 text-gray-700 dark:text-gray-300'>
            {data.title || "Artist, Producer, Songwriter • BMI"}
          </p>
        </motion.div>
        <div className='grid md:grid-cols-2 gap-12 mb-12'>
          <motion.div
            className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'
            variants={cardVariants}
          >
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
              CONTRACTING INFO
            </h2>
            <div className='space-y-2 text-gray-700 dark:text-gray-300'>
              {Array.isArray(data.contractingInfo) &&
              data.contractingInfo.length > 0 ? (
                data.contractingInfo.map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <>
                  <p>Paul McCartney (fso James Paul McCartney)</p>
                  <p>10 Downing St.</p>
                  <p>London, UK SW1A2AA</p>
                </>
              )}
            </div>
          </motion.div>
          <motion.div
            className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'
            variants={cardVariants}
          >
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
              PUB LINE
            </h2>
            <div className='space-y-2 text-gray-700 dark:text-gray-300'>
              {Array.isArray(data.pubLine) && data.pubLine.length > 0 ? (
                data.pubLine.map((line, i) => <p key={i}>{line}</p>)
              ) : (
                <>
                  <p>James Paul McCartney</p>
                  <p>BMI</p>
                  <p>IPI 12345678909</p>
                </>
              )}
            </div>
          </motion.div>
        </div>
        <motion.div
          className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md mb-12'
          variants={cardVariants}
        >
          <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
            ADDITIONAL METADATA
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <div>
              <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                ISRC Codes
              </h3>
              <ul className='list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300'>
                {Array.isArray(data.metadata?.isrc) &&
                data.metadata?.isrc.length > 0 ? (
                  data.metadata.isrc.map((code, i) => <li key={i}>{code}</li>)
                ) : (
                  <>
                    <li>USRC12345678</li>
                    <li>GBRC98765432</li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                UPC/EAN
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                {data.metadata?.upc || "602567924128"}
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                Performing Rights
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                {data.metadata?.rights || "BMI"}
              </p>
            </div>
            <div>
              <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                Publisher
              </h3>
              <p className='text-gray-700 dark:text-gray-300'>
                {data.metadata?.publisher || "MPL Communications"}
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div className='text-center' variants={cardVariants}>
          <button className='bg-black dark:bg-gray-700 text-white px-6 py-3 rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors'>
            Download Full Metadata
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
