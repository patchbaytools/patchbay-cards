"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

import { motion } from "motion/react";

import { Tooltip } from "antd";

import useMobile from "@/app/hooks/useMobile";
import type { BusinessCardResponse } from "@/lib/BusinessCardResponse";

import { IoCopyOutline } from "react-icons/io5";

export default function DetailedView({
  data,
}: {
  data?: BusinessCardResponse | null;
}) {
  const mobile = useMobile();
  const medium = useMobile(812);
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
    <div
      className={`container h-full mx-auto ${mobile ? "" : "px-[33px] pb-[30px]"}  text-[#EDEEF0]`}
    >
      <motion.div
        className={`grid   h-full ${
          mobile ? "grid-cols-1 gap-[80px]" : "grid-cols-2 gap-[100px]"
        }`}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <section
          className={`h-full w-full flex flex-col justify-start items-start ${
            mobile ? "gap-[80px]" : "gap-[60px]"
          } select-none`}
        >
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
                  className={` text-[#EDEEF0] ${
                    mobile ? "text-[20px]" : "text-[24px]"
                  }`}
                  style={{ fontFamily: "var(--font-inconsolata)" }}
                >
                  [CONTACT]
                </h1>
                <section
                  className='w-full flex flex-row justify-start items-start gap-[40px]'
                  style={{ fontFamily: "var(--font-neue-haas)" }}
                >
                  {data.config?.show_representation &&
                    data.contact_info?.representation_contact_email && (
                      <div className='flex flex-col '>
                        <span
                          className={`${
                            mobile
                              ? "text-[16px]"
                              : "text-[18px] hover:underline cursor-pointer"
                          } `}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              data.contact_info?.representation_contact_email ||
                                ""
                            );
                          }}
                        >
                          <span className='flex flex-row justify-start items-end gap-[16px]'>
                            <Tooltip
                              title='Copied!'
                              trigger={["click"]}
                              placement='top'
                              open={!mobile ? undefined : false}
                            >
                              {data.contact_info.representation_contact_email}
                            </Tooltip>
                            {mobile ? (
                              <Tooltip
                                title='Copied!'
                                trigger={["click"]}
                                placement='top'
                                open={mobile ? undefined : false}
                              >
                                <IoCopyOutline
                                  size={20}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      data.contact_info
                                        ?.representation_contact_email || ""
                                    );
                                  }}
                                />
                              </Tooltip>
                            ) : undefined}
                          </span>
                        </span>

                        <span
                          className={mobile ? "text-[16px]" : "text-[18px]"}
                          style={{ color: "rgba(255, 255, 255, 0.50" }}
                        >
                          Representation
                        </span>
                      </div>
                    )}
                  {data.config?.show_legal &&
                    data.contact_info?.legal_contact_email && (
                      <div className='flex flex-col '>
                        <span
                          className={`${
                            mobile
                              ? "text-[16px]"
                              : "text-[18px] hover:underline cursor-pointer"
                          } `}
                          onClick={() => {
                            navigator.clipboard.writeText(
                              data.contact_info?.legal_contact_email || ""
                            );
                          }}
                        >
                          <span className='flex flex-row justify-start items-end gap-[16px]'>
                            <Tooltip
                              title='Copied!'
                              trigger={["click"]}
                              placement='top'
                              open={!mobile ? undefined : false}
                            >
                              {data.contact_info.legal_contact_email}
                            </Tooltip>
                            {mobile ? (
                              <Tooltip
                                title='Copied!'
                                trigger={["click"]}
                                placement='top'
                                open={mobile ? undefined : false}
                              >
                                <IoCopyOutline
                                  size={20}
                                  style={{ cursor: "pointer" }}
                                  onClick={() => {
                                    navigator.clipboard.writeText(
                                      data.contact_info?.legal_contact_email ||
                                        ""
                                    );
                                  }}
                                />
                              </Tooltip>
                            ) : undefined}
                          </span>
                        </span>

                        <span
                          className={mobile ? "text-[16px]" : "text-[18px]"}
                          style={{ color: "rgba(255, 255, 255, 0.50" }}
                        >
                          Legal
                        </span>
                      </div>
                    )}
                </section>
              </motion.div>
            )}
          {data.bio && data.config?.show_bio && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full h-full  gap-[16px] flex flex-col justify-start items-start'
            >
              <h1
                className={` ${mobile ? "text-[20px]" : "text-[24px]"}`}
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                <span className='flex flex-row justify-start items-center gap-[16px]'>
                  [BIO]
                  {mobile ? (
                    <Tooltip
                      title='Copied!'
                      trigger={["click"]}
                      placement='top'
                      open={mobile ? undefined : false}
                    >
                      <IoCopyOutline
                        size={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigator.clipboard.writeText(data?.bio || "");
                        }}
                      />
                    </Tooltip>
                  ) : undefined}
                </span>
              </h1>

              <span
                className={`${
                  mobile
                    ? "text-[16px]"
                    : "text-[18px] hover:underline  cursor-pointer"
                } gap-[8px] flex flex-col text-ellipsis overflow-y-scroll hide-scrollbar   justify-start items-start`}
                onClick={() => {
                  navigator.clipboard.writeText(data?.bio || "");
                }}
                style={{
                  fontFamily: "var(--font-neue-haas)",
                  lineHeight: "150%",
                  color: "#EDEEF0",
                  height: mobile
                    ? "auto"
                    : `calc(100vh - ${data.config?.show_representation ? 315 : 120}px)`,
                }}
              >
                <Tooltip
                  title='Copied!'
                  trigger={["click"]}
                  placement='top'
                  open={!mobile ? undefined : false}
                >
                  <span className='w-full flex flex-col justify-start items-start gap-[8px]'>
                    {data.bio.split("\n").map((line) => (
                      <span key={line} className='w-full'>
                        {line}
                      </span>
                    ))}
                  </span>
                </Tooltip>
              </span>
            </motion.div>
          )}
        </section>
        <section
          className={`h-full w-full flex flex-col justify-start items-start ${
            mobile ? "gap-[80px]" : "gap-[60px]"
          } select-none`}
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
                className={` ${mobile ? "text-[20px]" : "text-[24px]"}`}
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                [SONGWRITER INFO]
              </h1>

              <section
                className={`w-full flex ${mobile || medium ? "flex-col justify-start items-start gap-[30px]" : "flex-row justify-between items-start"} `}
                style={{ fontFamily: "var(--font-neue-haas)" }}
              >
                <div className='flex flex-col '>
                  <span
                    className={`${
                      mobile
                        ? "text-[16px]"
                        : "text-[18px] hover:underline cursor-pointer"
                    } `}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        data.songwriter_details?.songwriter_name || ""
                      );
                    }}
                  >
                    <span className='flex flex-row justify-start items-end gap-[16px]'>
                      <Tooltip
                        title='Copied!'
                        trigger={["click"]}
                        placement='top'
                        open={!mobile ? undefined : false}
                      >
                        {data.songwriter_details.songwriter_name}
                      </Tooltip>
                      {mobile ? (
                        <Tooltip
                          title='Copied!'
                          trigger={["click"]}
                          placement='top'
                          open={mobile ? undefined : false}
                        >
                          <IoCopyOutline
                            size={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              navigator.clipboard.writeText(
                                data.songwriter_details?.songwriter_name || ""
                              );
                            }}
                          />
                        </Tooltip>
                      ) : undefined}
                    </span>
                  </span>

                  <span
                    className={mobile ? "text-[16px]" : "text-[18px]"}
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    Legal Name
                  </span>
                </div>
                <div className='flex flex-col '>
                  <span
                    className={`${
                      mobile
                        ? "text-[16px]"
                        : "text-[18px] hover:underline cursor-pointer"
                    } `}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        data.songwriter_details?.songwriter_IPI || ""
                      );
                    }}
                  >
                    <span className='flex flex-row justify-start items-end gap-[16px]'>
                      <Tooltip
                        title='Copied!'
                        trigger={["click"]}
                        placement='top'
                        open={!mobile ? undefined : false}
                      >
                        {data.songwriter_details.songwriter_IPI}
                      </Tooltip>
                      {mobile ? (
                        <Tooltip
                          title='Copied!'
                          trigger={["click"]}
                          placement='top'
                          open={mobile ? undefined : false}
                        >
                          <IoCopyOutline
                            size={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              navigator.clipboard.writeText(
                                data.songwriter_details?.songwriter_IPI || ""
                              );
                            }}
                          />
                        </Tooltip>
                      ) : undefined}
                    </span>
                  </span>

                  <span
                    className={mobile ? "text-[16px]" : "text-[18px]"}
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    IPI
                  </span>
                </div>
                <div className='flex flex-col '>
                  <span
                    className={`${
                      mobile
                        ? "text-[16px]"
                        : "text-[18px] hover:underline cursor-pointer"
                    } `}
                    onClick={() => {
                      navigator.clipboard.writeText(
                        data.songwriter_details?.songwriter_PRO || ""
                      );
                    }}
                  >
                    <span className='flex flex-row justify-start items-end gap-[16px]'>
                      <Tooltip
                        title='Copied!'
                        trigger={["click"]}
                        placement='top'
                        open={!mobile ? undefined : false}
                      >
                        {data.songwriter_details.songwriter_PRO}
                      </Tooltip>
                      {mobile ? (
                        <Tooltip
                          title='Copied!'
                          trigger={["click"]}
                          placement='top'
                          open={mobile ? undefined : false}
                        >
                          <IoCopyOutline
                            size={20}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              navigator.clipboard.writeText(
                                data.songwriter_details?.songwriter_PRO || ""
                              );
                            }}
                          />
                        </Tooltip>
                      ) : undefined}
                    </span>
                  </span>

                  <span
                    className={mobile ? "text-[16px]" : "text-[18px]"}
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    PRO
                  </span>
                </div>
              </section>
            </motion.div>
          )}
          {data.config?.show_pub_line && data.pub_line && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={
                "w-full  gap-[16px] flex flex-col justify-start items-start"
              }
            >
              <h1
                className={` ${mobile ? "text-[20px]" : "text-[24px]"}`}
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                <span className='flex flex-row justify-start items-center gap-[16px]'>
                  [PUB LINE]
                  {mobile ? (
                    <Tooltip
                      title='Copied!'
                      trigger={["click"]}
                      placement='top'
                      open={mobile ? undefined : false}
                    >
                      <IoCopyOutline
                        size={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigator.clipboard.writeText(data.pub_line || "");
                        }}
                      />
                    </Tooltip>
                  ) : undefined}
                </span>
              </h1>

              <span
                className={`${
                  mobile
                    ? "text-[16px]"
                    : "text-[18px] hover:underline cursor-pointer"
                } w-full  flex flex-col justify-start items-start`}
                onClick={() => {
                  navigator.clipboard.writeText(data.pub_line || "");
                }}
              >
                <Tooltip
                  title='Copied!'
                  trigger={["click"]}
                  placement='top'
                  open={!mobile ? undefined : false}
                >
                  {data.pub_line?.split("\n").map((line) => (
                    <span key={line} className='w-full'>
                      {line}
                    </span>
                  ))}
                </Tooltip>
              </span>
            </motion.div>
          )}
          {data.config?.show_contracting_info && (
            <motion.div
              initial={{ opacity: 0, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className='w-full  gap-[16px] flex flex-col justify-start items-start'
            >
              <h1
                className={` ${mobile ? "text-[20px]" : "text-[24px]"}`}
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                <span className='flex flex-row justify-start items-center gap-[16px]'>
                  [CONTRACTING INFO]
                  {mobile ? (
                    <Tooltip
                      title='Copied!'
                      trigger={["click"]}
                      placement='topLeft'
                      open={mobile ? undefined : false}
                    >
                      <IoCopyOutline
                        size={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          navigator.clipboard.writeText(
                            (data.contracting_info?.address.name
                              ? data.contracting_info?.address.name + ", "
                              : "") +
                              (data.contracting_info?.care_of
                                ? "c/o " + data.contracting_info?.care_of + ", "
                                : "") +
                              (data.contracting_info?.address.address_line_1 ||
                                "") +
                              ", " +
                              (data.contracting_info?.address.address_line_2
                                ? data.contracting_info?.address
                                    .address_line_2 + ", "
                                : "") +
                              (data.contracting_info?.address.city || "") +
                              ", " +
                              (data.contracting_info?.address.state || "") +
                              " " +
                              (data.contracting_info?.address.postal_code ||
                                "") +
                              ", " +
                              (data.contracting_info?.address.country || "")
                          );
                        }}
                      />
                    </Tooltip>
                  ) : undefined}
                </span>
              </h1>

              <Tooltip
                title='Copied!'
                trigger={["click"]}
                placement='topLeft'
                open={!mobile ? undefined : false}
              >
                <section
                  className={` flex   leading-[150%] w-full flex-col justify-start items-start  ${
                    mobile
                      ? "text-[16px] mb-[24px]"
                      : "text-[18px] hover:underline cursor-pointer"
                  }`}
                  onClick={() => {
                    navigator.clipboard.writeText(
                      (data.contracting_info?.address.name
                        ? data.contracting_info?.address.name + ", "
                        : "") +
                        (data.contracting_info?.care_of
                          ? "c/o " + data.contracting_info?.care_of + ", "
                          : "") +
                        (data.contracting_info?.address.address_line_1 || "") +
                        ", " +
                        (data.contracting_info?.address.address_line_2
                          ? data.contracting_info?.address.address_line_2 + ", "
                          : "") +
                        (data.contracting_info?.address.city || "") +
                        ", " +
                        (data.contracting_info?.address.state || "") +
                        " " +
                        (data.contracting_info?.address.postal_code || "") +
                        ", " +
                        (data.contracting_info?.address.country || "")
                    );
                  }}
                >
                  <span>
                    {data.contracting_info?.address.name
                      ? data.contracting_info?.address.name
                      : ""}
                  </span>
                  <span>
                    {data.contracting_info?.care_of
                      ? "c/o " + data.contracting_info?.care_of
                      : ""}
                  </span>
                  <span>
                    {data.contracting_info?.address.address_line_1 ?? ""}
                  </span>
                  {data.contracting_info?.address.address_line_2 && (
                    <span>{data.contracting_info?.address.address_line_2}</span>
                  )}

                  <span>
                    {`${data.contracting_info?.address.city ? data.contracting_info?.address.city + ", " : ""} ${data.contracting_info?.address.state ? data.contracting_info?.address.state + " " : ""} ${data.contracting_info?.address.postal_code ? data.contracting_info?.address.postal_code : ""}`}
                  </span>

                  {data.contracting_info?.address.country && (
                    <span>{data.contracting_info?.address.country}</span>
                  )}
                </section>
              </Tooltip>
            </motion.div>
          )}
          {mobile && (
            <motion.footer
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: 24,
                userSelect: "none",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src='/images/poweredbypatchbay.png'
                alt='Patchbay Logo'
                width={177}
                height={14}
              />
            </motion.footer>
          )}
        </section>
      </motion.div>
      {!mobile && (
        <motion.footer
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            userSelect: "none",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src='/images/poweredbypatchbay.png'
            alt='Patchbay Logo'
            width={177}
            height={14}
          />
        </motion.footer>
      )}
    </div>
  );
}
