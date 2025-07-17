// ** React/Next.js Imports
import Image from "next/image";
import React from "react";
import { Skeleton, Tooltip } from "antd";

import { getCode, getName } from "country-list";
import { states } from "states-us";

// ** Custom Components, Hooks, Utils, etc.
import Card from "@/components/business-card/3DLicenseCard";
import type { CardData } from "@/lib/getCardData";

// Types for nested objects

const CardTemplate = ({ data }: { data?: CardData }) => {
  if (!data) {
    return <div>Card not found!</div>;
  }

  const instagramChunks = data?.url_instagram?.split("/");
  const instagramUsername = instagramChunks
    ? "@" + instagramChunks[instagramChunks.length - 1]
    : undefined;

  return (
    <Card
      shineStrength={0.1}
      borderRadius='9px'
      style={{
        width: "473px",
        height: "255px",
        borderRadius: "9px",
        padding: "18px 23px",
        flexDirection: "column",
        alignItems: "flex-start",
        backdropFilter: "blur(25px)",
        display: "flex",
        transition: "background-image 0.4s ease-in-out",
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/CardTexture.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header
        className='w-full h-[18px] grid grid-cols-3 text-white font-[var(--font-neue-haas)] '
        style={{
          color: "white",
          fontSize: "12px",
          fontWeight: "500",

          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-neue-haas)",
          userSelect: "none",
        }}
      >
        <span className='flex w-full flex-row justify-start items-start'>
          {data?.songwriter_details?.songwriter_name ?? undefined}
        </span>
        <span className='flex w-full flex-row justify-center items-start'>
          {data?.location ? (
            <span className='flex flex-row  gap-[7px]'>
              <Image
                src='/images/LocationIcon.svg'
                alt='Instagram'
                width={7.894}
                height={9.947}
              />
              <span>{`${data?.location}`}</span>
            </span>
          ) : undefined}
        </span>
        <span className='flex w-full flex-row justify-end items-start'>
          {data?.url_instagram ? (
            <span className='flex flex-row  gap-[7px]'>
              <Image
                src='/images/InstagramIcon.svg'
                alt='Instagram'
                width={10}
                height={10}
              />

              {instagramUsername}
            </span>
          ) : undefined}
        </span>
      </header>
      <section
        className='select-none h-full w-full flex flex-row justify-between space-between items-end font-[var(--font-neue-haas)]'
        style={{ color: "white" }}
      >
        <h1 className='text-[50px] whitespace-break-spaces leading-[115%]'>
          {data?.name}
        </h1>
        <div className='flex flex-col h-full w-full justify-end items-end gap-[9px] '>
          <div className='flex flex-col items-end'>
            {data?.roles?.map((role) => (
              <div
                className='font-[var(--font-neue-haas)] tracking-[.12px] leading-[150%] text-[12px]'
                key={role}
              >
                {role}
              </div>
            ))}
          </div>
          <div
            className='relative w-[68px] h-[68px]  overflow-hidden rounded-[2px] border-[.2px] border-[#EDEEF0];
'
          >
            <Image
              src={data?.profile_image_url || "/images/favicon.ico"}
              alt={data?.name ?? "Avatar Photo"}
              fill
              className='object-cover'
            />
          </div>
        </div>
      </section>
    </Card>
  );
};

export default CardTemplate;
