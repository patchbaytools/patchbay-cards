"use client";

// ** React/Next.js Imports
import { useRef, useState } from "react";
import { Button } from "antd";

// ** Motion Imports
import { useScroll, useSpring, motion, useTransform } from "motion/react";

// ** Custom Components, Hooks, Utils, etc.
import CardTemplate from "@/components/business-card/index";
import DetailedView from "@/components/detailed-view";
import type { CardData } from "@/lib/getCardData";

export default function BusinessCard({
  data,
  id,
}: {
  data: CardData | null;
  id: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [socialsOpen, setSocialsOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const smoothScrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const yTransform = useTransform(smoothScrollProgress, [0, 1], [0, -100]);

  if (!data) {
    return (
      <div className='h-[calc(100vh-56px)] w-full flex justify-center items-center'>
        No Patchbay Card found
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className='h-screen overflow-auto snap-y snap-mandatory hide-scrollbar'
    >
      <section className='h-screen w-full relative snap-start flex flex-col justify-between items-center'>
        <header className=' w-full flex flex-row justify-between items-start mb-[-36px] z-500'>
          <div className='flex flex-row justify-between items-center gap-[27px] select-all h-[36px]'>
            <Button type='primary' className='bg-[#EDEEF0] text-[#000000]'>
              Try Patchbay Free
            </Button>
          </div>
          <div className='flex flex-row justify-between items-start gap-[27px]'>
            <div
              className='flex flex-col justify-start items-end gap-[30px]'
              onMouseEnter={() => setContactOpen(true)}
              onMouseLeave={() => setContactOpen(false)}
            >
              <Button
                className='text-[24px]'
                type='text'
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  color: "#EDEEF0",
                  padding: "0px",
                }}
              >
                [CONTACT]
              </Button>
              {contactOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 25,
                    overflow: "hidden",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    height: 200,
                    overflow: "auto",
                  }}
                  exit={{ opacity: 0, y: 100, height: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className='flex flex-col justify-start items-end w-full gap-[16px]'
                >
                  <span
                    className='text-[19px] leading-[19px] font-medium hover:underline'
                    style={{
                      fontFamily: "var(--font-neue-haas-unica)",
                      color: "#EDEEF0",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    // onClick={() => {
                    //   window.open(data?.url_instagram, "_blank");
                    // }}
                  >
                    Representation ↗
                  </span>
                  <span
                    className='text-[19px] leading-[19px] font-medium hover:underline'
                    style={{
                      fontFamily: "var(--font-neue-haas-unica)",
                      color: "#EDEEF0",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    // onClick={() => {
                    //   window.open(data?.url_instagram, "_blank");
                    // }}
                  >
                    Legal ↗
                  </span>
                </motion.div>
              )}
            </div>
            <div
              onMouseEnter={() => setSocialsOpen(true)}
              onMouseLeave={() => setSocialsOpen(false)}
              className='flex flex-col justify-start items-end gap-[30px]'
            >
              <Button
                className='text-[24px]'
                type='text'
                style={{
                  fontFamily: "var(--font-inconsolata)",
                  color: "#EDEEF0",
                  padding: "0px",
                }}
                onClick={() => setSocialsOpen(!socialsOpen)}
              >
                [SOCIALS]
              </Button>
              {socialsOpen && (
                <motion.div
                  initial={{
                    opacity: 0,
                    height: 50,
                    overflow: "hidden",
                  }}
                  animate={{ opacity: 1, y: 0, height: "auto" }}
                  exit={{ opacity: 0, y: 100, height: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className='flex flex-col justify-start items-end w-full gap-[16px]'
                >
                  {data?.url_instagram && (
                    <span
                      className='text-[19px] leading-[19px] font-medium hover:underline'
                      style={{
                        fontFamily: "var(--font-neue-haas-unica)",
                        color: "#EDEEF0",
                        padding: "0px",
                        margin: "0px",
                        cursor: "pointer",
                      }}
                      onClick={() => {
                        window.open(data?.url_instagram, "_blank");
                      }}
                    >
                      Instagram ↗
                    </span>
                  )}
                  <span
                    className='text-[19px] leading-[19px] font-medium hover:underline'
                    style={{
                      fontFamily: "var(--font-neue-haas-unica)",
                      color: "#EDEEF0",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    // onClick={() => {
                    //   window.open(data?.url_instagram, "_blank");
                    // }}
                  >
                    Tiktok ↗
                  </span>
                  <span
                    className='text-[19px] leading-[19px] font-medium hover:underline'
                    style={{
                      fontFamily: "var(--font-neue-haas-unica)",
                      color: "#EDEEF0",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    // onClick={() => {
                    //   window.open(data?.url_instagram, "_blank");
                    // }}
                  >
                    YouTube ↗
                  </span>
                  <span
                    className='text-[19px] leading-[19px] font-medium hover:underline'
                    style={{
                      fontFamily: "var(--font-neue-haas-unica)",
                      color: "#EDEEF0",
                      padding: "0px",
                      margin: "0px",
                      cursor: "pointer",
                    }}
                    // onClick={() => {
                    //   window.open(data?.url_instagram, "_blank");
                    // }}
                  >
                    X ↗
                  </span>
                </motion.div>
              )}
            </div>
          </div>
        </header>
        <motion.div
          className='absolute  inset-0 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'
          style={{ y: yTransform }}
        />
        <div></div>
        <div className='absolute top-[175px] w-full flex flex-col items-center justify-center max-w-md h-64 md:h-96 z-10'>
          <CardTemplate data={data ?? undefined} />
          <div className='mt-[100px] rotate-90 text-[50px] var(--font-DM_Mono)'>
            →
          </div>
        </div>
        <motion.div
          className='relative mb-[18px] z-20'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className='bg-white dark:bg-gray-800 p-3 rounded-full shadow-md mt-[18px]'
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          ></motion.div>
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
