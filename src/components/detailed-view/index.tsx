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
    <div className='container h-full mx-auto px-[33px]  text-[#EDEEF0]'>
      <motion.div
        className='grid grid-cols-2 gap-[100px] h-full'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <section className='h-full w-full flex flex-col justify-start items-start gap-[88px] select-none'>
          {data.contact_info &&
            (data.contact_info.representation_contact_email ||
              data.contact_info.legal_contact_email) && (
              <motion.div
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className='w-full  gap-[16px] flex flex-col justify-start items-start'
              >
                <h1
                  className='text-[24px] text-[#EDEEF0]'
                  style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                  [CONTACT]
                </h1>
                <section
                  className='w-full flex flex-row justify-start items-start gap-[40px]'
                  style={{ fontFamily: "var(--font-neue-haas)" }}
                >
                  {data.config.show_representation && (
                    <div className='flex flex-col '>
                      <span className='text-[18px] hover:underline cursor-copy'>
                        {data.contact_info.representation_contact_email}
                      </span>

                      <span
                        className='text-[18px] '
                        style={{ color: "rgba(255, 255, 255, 0.50" }}
                      >
                        Representation
                      </span>
                    </div>
                  )}
                  {data.config.show_legal && (
                    <div className='flex flex-col '>
                      <span className='text-[18px] hover:underline cursor-copy'>
                        {data.contact_info.legal_contact_email}
                      </span>

                      <span
                        className='text-[18px] '
                        style={{ color: "rgba(255, 255, 255, 0.50" }}
                      >
                        Legal
                      </span>
                    </div>
                  )}
                </section>
              </motion.div>
            )}
          {data.bio && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full h-full  gap-[16px] flex flex-col justify-start items-start'
            >
              <h1
                className='text-[24px]'
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                [BIO]
              </h1>

              <Tooltip color='blue' title='Click to copy' placement='top'>
                <span
                  className='text-[18px]  flex text-ellipsis overflow-y-scroll hide-scrollbar cursor-copy hover:underline '
                  onClick={() => {
                    console.log("clicked");
                  }}
                  style={{
                    fontFamily: "var(--font-neue-haas)",
                    lineHeight: "150%",
                    fontSize: "18px",
                    color: "#EDEEF0",
                    height: `calc(100vh - ${data.config.show_representation ? 315 : 120}px)`,
                  }}
                >
                  {data.bio}
                </span>
              </Tooltip>
            </motion.div>
          )}
        </section>
        <section
          className='h-full w-full flex flex-col justify-start items-start gap-[88px] select-none'
          style={{ fontFamily: "var(--font-neue-haas)" }}
        >
          {data.songwriter_details && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
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
            </motion.div>
          )}
          {data.config.show_pub_line && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full  gap-[16px] flex flex-col justify-start items-start'
            >
              <h1
                className='text-[24px]'
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                [PUB LINE]
              </h1>

              <span className='text-[18px] w-full hover:underline cursor-copy'>
                {data.pub_line}
              </span>
            </motion.div>
          )}
          {data.config.show_contracting_info && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full  gap-[16px] flex flex-col justify-start items-start'
            >
              <h1
                className='text-[24px]'
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                [CONTRACTING INFO]
              </h1>

              <section className='w-full flex flex-col justify-start items-start '>
                <span className='text-[18px] leading-[150%] w-full hover:underline cursor-copy'>
                  {data.contracting_info?.care_of}
                </span>
                <span className='text-[18px] leading-[150%] w-full hover:underline cursor-copy'>
                  {data.contracting_info?.address.address_line_1}
                </span>
                {data.contracting_info?.address.address_line_2 && (
                  <span className='text-[18px] leading-[150%] w-full hover:underline cursor-copy'>
                    {data.contracting_info?.address.address_line_2}
                  </span>
                )}

                <span className='text-[18px] leading-[150%] w-full hover:underline cursor-copy'>
                  {`${data.contracting_info?.address.city}, ${data.contracting_info?.address.state} ${data.contracting_info?.address.postal_code}`}
                </span>

                {data.contracting_info?.address.country && (
                  <span className='text-[18px] leading-[150%] w-full hover:underline cursor-copy'>
                    {data.contracting_info?.address.country}
                  </span>
                )}
              </section>
            </motion.div>
          )}
        </section>
      </motion.div>
    </div>
  );
}
