"use client";

// ** Motion Imports
import { motion } from "motion/react";
import { Skeleton, Input, Tooltip } from "antd";

const { TextArea } = Input;

import type { CardData } from "@/lib/getCardData";

export default function DetailedView({ data }: { data?: CardData | null }) {
  if (!data) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.5,
      },
    },
  };
  return (
    <div className='container mx-auto px-[33px] py-16'>
      <motion.div
        className='grid grid-cols-2'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <div></div>
        <section className='h-full w-full flex flex-col justify-start items-start gap-[88px] select-none'>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full  gap-[16px] flex flex-col justify-start items-start'
          >
            <h1
              className='text-[19px]'
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              [BIO]
            </h1>
            {data.bio ? (
              <Tooltip color='blue' title='Click to copy' placement='top'>
                <span
                  className='text-[18px] text-ellipsis overflow-y-auto hide-scrollbar cursor-copy hover:underline '
                  onClick={() => {
                    console.log("clicked");
                  }}
                  style={{
                    fontFamily: "var(--font-neue-haas)",
                    lineHeight: "150%",
                    fontSize: "18px",
                    height: "189px",
                    color: "#EDEEF0",
                  }}
                >
                  {data.bio}
                </span>
              </Tooltip>
            ) : (
              <Skeleton paragraph={{ rows: 6 }} />
            )}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className='w-full  gap-[16px] flex flex-col justify-start items-start'
          >
            <h1
              className='text-[24px]'
              style={{ fontFamily: "var(--font-inconsolata)" }}
            >
              [SONGWRITER INFO]
            </h1>
            {data.songwriter_details ? (
              <section
                className='w-full flex flex-row justify-between items-start '
                style={{ fontFamily: "var(--font-neue-haas)" }}
              >
                <div className='flex flex-col '>
                  <span className='text-[18px] hover:underline cursor-copy'>
                    {data.songwriter_details.songwriter_name}
                  </span>

                  <span
                    className='text-[18px] '
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    Legal Name
                  </span>
                </div>
                <div className='flex flex-col '>
                  <span className='text-[18px] hover:underline cursor-copy'>
                    {data.songwriter_details.songwriter_IPI}
                  </span>

                  <span
                    className='text-[18px] '
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    IPI
                  </span>
                </div>
                <div className='flex flex-col '>
                  <span className='text-[18px] hover:underline cursor-copy'>
                    {data.songwriter_details.songwriter_PRO}
                  </span>

                  <span
                    className='text-[18px] '
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    PRO
                  </span>
                </div>
              </section>
            ) : (
              <Skeleton style={{ color: "pink" }} paragraph={{ rows: 3 }} />
            )}
          </motion.div>
        </section>

        {/* <div className='grid md:grid-cols-2 gap-12 mb-12'>
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
        </motion.div> */}
      </motion.div>
    </div>
  );
}
