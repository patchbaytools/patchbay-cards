"use client";

// ** Motion Imports
import { motion } from "motion/react";
import type { CardData } from "@/lib/getCardData";

export default function DetailedView({ data }: { data?: CardData | null }) {
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
            {data.roles?.join(", ") || "Artist, Producer, Songwriter • BMI"}
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
              {data.contracting_info ? (
                <>
                  <p>{data.name}</p>
                  <p>{data.contracting_info.address.address_line_1}</p>
                  {data.contracting_info.address.address_line_2 && (
                    <p>{data.contracting_info.address.address_line_2}</p>
                  )}
                  <p>
                    {data.contracting_info.address.city},{" "}
                    {data.contracting_info.address.state}{" "}
                    {data.contracting_info.address.postal_code}
                  </p>
                  <p>{data.contracting_info.address.country}</p>
                </>
              ) : (
                <>
                  <p>No contracting information available</p>
                </>
              )}
            </div>
          </motion.div>
          <motion.div
            className='bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md'
            variants={cardVariants}
          >
            <h2 className='text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100'>
              SONGWRITER DETAILS
            </h2>
            <div className='space-y-2 text-gray-700 dark:text-gray-300'>
              {data.songwriter_details ? (
                <>
                  <p>Name: {data.songwriter_details.songwriter_name}</p>
                  <p>PRO: {data.songwriter_details.songwriter_PRO}</p>
                  <p>IPI: {data.songwriter_details.songwriter_IPI}</p>
                </>
              ) : (
                <>
                  <p>No songwriter details available</p>
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
            SOCIAL LINKS
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            {data.url_instagram && (
              <div>
                <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                  Instagram
                </h3>
                <a
                  href={data.url_instagram}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
                >
                  {data.url_instagram}
                </a>
              </div>
            )}
            {data.url_twitter && (
              <div>
                <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                  Twitter
                </h3>
                <a
                  href={data.url_twitter}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
                >
                  {data.url_twitter}
                </a>
              </div>
            )}
            {data.url_website && (
              <div>
                <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                  Website
                </h3>
                <a
                  href={data.url_website}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
                >
                  {data.url_website}
                </a>
              </div>
            )}
            {data.url_spotify && (
              <div>
                <h3 className='font-semibold mb-2 text-gray-800 dark:text-gray-200'>
                  Spotify
                </h3>
                <a
                  href={data.url_spotify}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200'
                >
                  {data.url_spotify}
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
