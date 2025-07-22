"use client";

import Image from "next/image";
import { useRef, useState } from "react";

import { useScroll, useSpring, motion, useTransform } from "motion/react";

import { Button } from "antd";

import useMobile from "@/app/hooks/useMobile";

import CardTemplate from "@/components/business-card/index";
import DetailedView from "@/components/detailed-view";
import type { BusinessCardResponse } from "@/lib/BusinessCardResponse";

export default function BusinessCard({
  data,
  id,
}: {
  data: BusinessCardResponse | null;
  id: string;
}) {
  const mobile = useMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const [socialsOpen, setSocialsOpen] = useState<boolean>(false);
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
      <section
        className={`h-screen w-full ${mobile ? "px-[24px] pt-[64px]" : "p-[30px]"} relative snap-start flex flex-col justify-between items-center`}
      >
        <motion.header
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className=' w-full flex flex-row justify-between items-start mb-[-36px] z-500'
        >
          <div className='flex flex-row justify-between items-start gap-[27px] select-all h-[36px]'>
            <Image
              onClick={() => {
                window.open("https://patchbay.xyz", "_blank");
              }}
              className='cursor-pointer'
              src='/images/LogoWhite.svg'
              alt='Patchbay Logo'
              width={29.6}
              height={32}
            />
            <Button
              onClick={() => {
                window.open("https://patchbay.xyz", "_blank");
              }}
              type='primary'
              style={{ padding: "4px 12px", height: mobile ? 48 : 40 }}
              className={`bg-[#EDEEF0] text-[#000000] leading-[115%] hover:bg-black text-[16px]"
              }`}
            >
              Try Patchbay Free
            </Button>
          </div>
          <div className='flex flex-row justify-between items-start gap-[27px] select-none'>
            {data?.config?.show_socials_section && (
              <div
                onMouseEnter={() => setSocialsOpen(true)}
                onMouseLeave={() => setSocialsOpen(false)}
                className={`flex flex-col justify-start items-end ${mobile ? "gap-[16px]" : "gap-[30px]"} w-full`}
              >
                <Button
                  className={mobile ? "text-[20px]" : "text-[24px]"}
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
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={` font-medium hover:underline ${
                          mobile
                            ? "text-[16px] leading-[16px]"
                            : "text-[19px] leading-[19px]"
                        }`}
                        style={{
                          fontFamily: "var(--font-neue-haas-unica)",
                          color: "#EDEEF0",
                          padding: "0px",
                          margin: "0px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          {
                            window.open(data?.url_instagram ?? "", "_blank");
                          }
                        }}
                      >
                        Instagram ↗
                      </motion.span>
                    )}
                    {data?.url_tiktok && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`font-medium hover:underline ${
                          mobile
                            ? "text-[16px] leading-[16px]"
                            : "text-[19px] leading-[19px]"
                        }`}
                        style={{
                          fontFamily: "var(--font-neue-haas-unica)",
                          color: "#EDEEF0",
                          padding: "0px",
                          margin: "0px",
                          cursor: "pointer",
                        }}
                      >
                        Tiktok ↗
                      </motion.span>
                    )}
                    {data?.url_youtube && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`  font-medium hover:underline ${
                          mobile
                            ? "text-[16px] leading-[16px]"
                            : "text-[19px] leading-[19px]"
                        }`}
                        style={{
                          fontFamily: "var(--font-neue-haas-unica)",
                          color: "#EDEEF0",
                          padding: "0px",
                          margin: "0px",
                          cursor: "pointer",
                        }}
                      >
                        YouTube ↗
                      </motion.span>
                    )}
                    {data?.url_twitter && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`font-medium hover:underline ${
                          mobile
                            ? "text-[16px] leading-[16px]"
                            : "text-[19px] leading-[19px]"
                        }`}
                        style={{
                          fontFamily: "var(--font-neue-haas-unica)",
                          color: "#EDEEF0",
                          padding: "0px",
                          margin: "0px",
                          cursor: "pointer",
                        }}
                      >
                        X ↗
                      </motion.span>
                    )}
                    {data?.url_website && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`font-medium hover:underline ${
                          mobile
                            ? "text-[16px] leading-[16px]"
                            : "text-[19px] leading-[19px]"
                        }`}
                        style={{
                          fontFamily: "var(--font-neue-haas-unica)",
                          color: "#EDEEF0",
                          padding: "0px",
                          margin: "0px",
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          window.open(data?.url_website ?? "", "_blank");
                        }}
                      >
                        Website ↗
                      </motion.span>
                    )}
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.header>
        <motion.div
          className='absolute  inset-0 bg-gradient-to-b from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800'
          style={{ y: yTransform }}
        />
        <motion.div
          onClick={() => {
            containerRef.current?.scrollTo({
              top: containerRef.current.scrollHeight,
              behavior: "smooth",
            });
          }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className={`absolute  ${mobile ? "top-[calc(50%)] " : "top-[calc(50%-50px)] "}left-[50%] translate-x-[-50%] translate-y-[-50%] w-full flex flex-col items-center justify-center max-w-md h-64 md:h-96 z-10`}
        >
          <CardTemplate data={data ?? undefined} />
        </motion.div>
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
        <div className='absolute  bottom-[50px]   select-none rotate-90 text-[50px] var(--font-DM_Mono)'>
          →
        </div>
      </section>
      <section
        className={`h-screen ${mobile ? "p-[24px] overflow-y-scroll" : "p-[30px]"} w-full bg-gray-50 dark:bg-gray-900 snap-start`}
      >
        <DetailedView data={data} />
      </section>
    </div>
  );
}
