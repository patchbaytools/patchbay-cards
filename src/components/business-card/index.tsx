"use client";

// ** React/Next.js Imports
import Image from "next/image";
import React, { useEffect } from "react";

// ** Custom Components, Hooks, Utils, etc.
import useMobile from "@/app/hooks/useMobile";
import Card from "@/components/business-card/3DLicenseCard";
import {
  type BusinessCardResponse,
  FeaturedSocialLinkChoices,
} from "@/lib/BusinessCardResponse";

import { BiWorld } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { ImYoutube2 } from "react-icons/im";
import { IoLogoInstagram } from "react-icons/io";
import { PiTiktokLogo } from "react-icons/pi";


type LinkObject =
  | {
      url: string | undefined;
      icon: React.JSX.Element | undefined;
    }
  | undefined;

const CardTemplate = ({ data }: { data?: BusinessCardResponse }) => {
  const mobile = useMobile();

  useEffect(() => {
    console.log("Mobile state changed:", mobile);
  }, [mobile]);

  if (!data) {
    return <div>Card not found!</div>;
  }

  const getFeaturedSocialLink = (): LinkObject | undefined => {
    let linkObject: LinkObject | undefined;

    switch (data?.featured_social_link) {
      case FeaturedSocialLinkChoices.INSTAGRAM:
        const instagramChunks = data?.url_instagram?.split("/");
        const instagramHandle = instagramChunks
          ? "@" + instagramChunks[instagramChunks.length - 1]
          : undefined;

        linkObject = {
          url: instagramHandle,
          icon: <IoLogoInstagram style={{ height: 10, width: 10 }} />,
        };
        return linkObject;

      case FeaturedSocialLinkChoices.YOUTUBE:
        const youtubeUsername = data?.url_youtube
          ?.split("/@")[1]
          ?.split("/")[0];

        const youtubeHandle = youtubeUsername
          ? "@" + youtubeUsername
          : undefined;

        linkObject = {
          url: youtubeHandle,
          icon: youtubeHandle ? (
            <ImYoutube2 style={{ height: 14, width: 14 }} />
          ) : undefined,
        };
        return linkObject;
      case FeaturedSocialLinkChoices.TIKTOK:
        const tiktokChunks = data?.url_tiktok?.split("/");
        const tiktokHandle = tiktokChunks
          ? "@" + tiktokChunks[tiktokChunks.length - 1]
          : undefined;

        linkObject = {
          url: tiktokHandle,
          icon: tiktokHandle ? (
            <PiTiktokLogo style={{ height: 10, width: 10 }} />
          ) : undefined,
        };
        return linkObject;
      case FeaturedSocialLinkChoices.X:
        const xChunks = data?.url_twitter?.split("/");
        const xHandle = xChunks ? "@" + xChunks[xChunks.length - 1] : undefined;

        linkObject = {
          url: xHandle,
          icon: xHandle ? (
            <FaXTwitter style={{ height: 10, width: 10 }} />
          ) : undefined,
        };
        return linkObject;
      case FeaturedSocialLinkChoices.WEBSITE:
        linkObject = {
          url: data?.url_website?.split("//")[1].split("/")[0] ?? undefined,
          icon: data?.url_website ? (
            <BiWorld style={{ height: 11, width: 11 }} />
          ) : undefined,
        };
        return linkObject;

      default:
        return undefined;
    }
  };

  return (
    <Card
      key={`card-${mobile}`}
      shineStrength={0.1}
      borderRadius='9px'
      style={{
        width: mobile ? "325px" : "473px",
        height: mobile ? "188px" : "255px",
        borderRadius: mobile ? "7px" : "9px",
        padding: mobile ? "12px 16px" : "18px 23px",
        flexDirection: "column",
        alignItems: "flex-start",
        backdropFilter: "blur(25px)",
        display: "flex",
        transition: "all 0.4s ease-in-out",
        position: "relative",
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/CardTexture.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <header
        key={`header-${mobile}`}
        className='w-full flex flex-row justify-between items-start text-white font-[var(--font-neue-haas)]'
        style={{
          color: "white",
          fontSize: mobile ? "8px" : "12px",
          height: "18px",
          fontWeight: "500",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "var(--font-neue-haas)",
          userSelect: "none",
          transition: "all 0.4s ease-in-out",
        }}
      >
        {data?.config?.show_songwriter_details && (
          <span className='flex  flex-row  items-start'>
            {data?.songwriter_details?.songwriter_name ?? undefined}
          </span>
        )}
        <span className='flex  flex-row  items-start'>
          {data?.location ? (
            <span className='flex flex-row gap-[7px] items-center max-w-full'>
              <Image
                src='/images/LocationIcon.svg'
                alt='Instagram'
                width={mobile ? 5 : 7.894}
                height={mobile ? 6 : 9.947}
                style={{ transition: "all 0.4s ease-in-out", flexShrink: 0 }}
              />
              <span className='whitespace-nowrap text-ellipsis overflow-hidden'>{`${data?.location.split(",")[0]}, ${data?.location.split(",")[1]}`}</span>
            </span>
          ) : undefined}
        </span>
        {data?.config?.show_socials_section && (
          <span className='flex  flex-row  items-start'>
            {data?.featured_social_link ? (
              <span className='flex flex-row gap-[7px] justify-end items-center'>
                {getFeaturedSocialLink()?.icon}
                {getFeaturedSocialLink()?.url}
              </span>
            ) : undefined}
          </span>
        )}
      </header>
      <section
        key={`section-${mobile}`}
        className='select-none h-full w-full flex flex-row justify-between space-between items-end font-[var(--font-neue-haas)]'
        style={{
          color: "white",
          fontSize: mobile ? 30 : 50,
          transition: "all 0.4s ease-in-out",
        }}
      >
        <h1 className='whitespace-break-spaces leading-[115%]'>{data?.name}</h1>
        <div className='flex flex-col h-full w-full justify-end items-end gap-[9px]'>
          <div className='flex flex-col items-end'>
            {data?.roles?.map((role) => (
              <div
                key={role}
                className='font-[var(--font-neue-haas)] tracking-[.12px] leading-[150%]'
                style={{
                  fontSize: mobile ? "8px" : "12px",
                  transition: "all 0.4s ease-in-out",
                }}
              >
                {role}
              </div>
            ))}
          </div>
          <div
            className='relative overflow-hidden rounded-[2px] border-[.2px] border-[#EDEEF0]'
            style={{
              width: mobile ? "45px" : "68px",
              height: mobile ? "45px" : "68px",
              transition: "all 0.4s ease-in-out",
            }}
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
