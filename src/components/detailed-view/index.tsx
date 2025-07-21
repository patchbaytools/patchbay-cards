"use client";

import { useState, useEffect, useRef } from "react";

// ** Motion Imports
import { motion } from "motion/react";

import { Tooltip } from "antd";

import useMobile from "@/app/hooks/useMobile";
import type { BusinessCardResponse } from "@/lib/BusinessCardResponse";

export default function DetailedView({
  data,
}: {
  data?: BusinessCardResponse | null;
}) {
  const mobile = useMobile();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [showBioTooltip, setShowBioTooltip] = useState<undefined | true>(
    undefined
  );

  const [showPubLineTooltip, setShowPubLineTooltip] = useState<
    undefined | true
  >(undefined);

  const [showContractingInfoTooltip, setShowContractingInfoTooltip] = useState<
    undefined | true
  >(undefined);

  const [showRepresentationTooltip, setShowRepresentationTooltip] = useState<
    undefined | true
  >(undefined);

  const [showLegalTooltip, setShowLegalTooltip] = useState<undefined | true>(
    undefined
  );

  const [showLegalNameTooltip, setShowLegalNameTooltip] = useState<
    undefined | true
  >(undefined);

  const [showIPITooltip, setShowIPITooltip] = useState<undefined | true>(
    undefined
  );

  const [showPROTooltip, setShowPROTooltip] = useState<undefined | true>(
    undefined
  );

  // Tooltip timeout logic
  useEffect(() => {
    if (showBioTooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowBioTooltip(undefined);
      }, 1000);
    } else if (showPubLineTooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowPubLineTooltip(undefined);
      }, 1000);
    } else if (showContractingInfoTooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowContractingInfoTooltip(undefined);
      }, 1000);
    } else if (showRepresentationTooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowRepresentationTooltip(undefined);
      }, 1000);
    } else if (showLegalTooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowLegalTooltip(undefined);
      }, 1000);
    } else if (showLegalNameTooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowLegalNameTooltip(undefined);
      }, 1000);
    } else if (showIPITooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowIPITooltip(undefined);
      }, 1000);
    } else if (showPROTooltip) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        setShowPROTooltip(undefined);
      }, 1000);
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [
    showBioTooltip,
    showPubLineTooltip,
    showContractingInfoTooltip,
    showRepresentationTooltip,
    showLegalTooltip,
    showLegalNameTooltip,
    showIPITooltip,
    showPROTooltip,
  ]);

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
        className={`grid  gap-[100px] h-full ${
          mobile ? "grid-cols-1" : "grid-cols-2"
        }`}
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
                  {data.config?.show_representation && (
                    <div className='flex flex-col '>
                      <Tooltip
                        title='Copied!'
                        trigger={["click"]}
                        placement='top'
                        open={showRepresentationTooltip}
                        onOpenChange={(open) => {
                          setShowRepresentationTooltip(true);
                        }}
                      >
                        <span
                          className='text-[18px] hover:underline cursor-pointer'
                          onClick={() => {
                            navigator.clipboard.writeText(
                              data.contact_info?.representation_contact_email ||
                                ""
                            );
                          }}
                        >
                          {data.contact_info.representation_contact_email}
                        </span>
                      </Tooltip>
                      <span
                        className='text-[18px] '
                        style={{ color: "rgba(255, 255, 255, 0.50" }}
                      >
                        Representation
                      </span>
                    </div>
                  )}
                  {data.config?.show_legal && (
                    <div className='flex flex-col '>
                      <Tooltip
                        title='Copied!'
                        trigger={["click"]}
                        placement='top'
                        open={showLegalTooltip}
                        onOpenChange={(open) => {
                          setShowLegalTooltip(true);
                        }}
                      >
                        <span
                          className='text-[18px] hover:underline cursor-pointer'
                          onClick={() => {
                            navigator.clipboard.writeText(
                              data.contact_info?.legal_contact_email || ""
                            );
                          }}
                        >
                          {data.contact_info.legal_contact_email}
                        </span>
                      </Tooltip>

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

              <Tooltip
                title='Copied!'
                trigger={["click"]}
                placement='top'
                open={showBioTooltip}
                onOpenChange={(open) => {
                  setShowBioTooltip(true);
                }}
              >
                <span
                  className='text-[18px] gap-[8px] flex flex-col text-ellipsis overflow-y-scroll hide-scrollbar cursor-pointer hover:underline justify-start items-start'
                  onClick={() => {
                    navigator.clipboard.writeText(data?.bio || "");
                  }}
                  style={{
                    fontFamily: "var(--font-neue-haas)",
                    lineHeight: "150%",
                    fontSize: "18px",
                    color: "#EDEEF0",
                    height: `calc(100vh - ${data.config?.show_representation ? 315 : 120}px)`,
                  }}
                >
                  {data.bio.split("\n").map((line) => (
                    <span key={line} className='w-full'>
                      {line}
                    </span>
                  ))}
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
                  <Tooltip
                    title='Copied!'
                    trigger={["click"]}
                    placement='top'
                    open={showLegalNameTooltip}
                    onOpenChange={(open) => {
                      setShowLegalNameTooltip(true);
                    }}
                  >
                    <span
                      className='text-[18px] hover:underline cursor-pointer'
                      onClick={() => {
                        navigator.clipboard.writeText(
                          data.songwriter_details?.songwriter_name || ""
                        );
                      }}
                    >
                      {data.songwriter_details.songwriter_name}
                    </span>
                  </Tooltip>

                  <span
                    className='text-[18px] '
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    Legal Name
                  </span>
                </div>
                <div className='flex flex-col '>
                  <Tooltip
                    title='Copied!'
                    trigger={["click"]}
                    placement='top'
                    open={showLegalTooltip}
                    onOpenChange={(open) => {
                      setShowIPITooltip(true);
                    }}
                  >
                    <span
                      className='text-[18px] hover:underline cursor-pointer'
                      onClick={() => {
                        navigator.clipboard.writeText(
                          data.songwriter_details?.songwriter_IPI || ""
                        );
                      }}
                    >
                      {data.songwriter_details.songwriter_IPI}
                    </span>
                  </Tooltip>

                  <span
                    className='text-[18px] '
                    style={{ color: "rgba(255, 255, 255, 0.50" }}
                  >
                    IPI
                  </span>
                </div>
                <div className='flex flex-col '>
                  <Tooltip
                    title='Copied!'
                    trigger={["click"]}
                    placement='top'
                    open={showPROTooltip}
                    onOpenChange={(open) => {
                      setShowPROTooltip(true);
                    }}
                  >
                    <span
                      className='text-[18px] hover:underline cursor-pointer'
                      onClick={() => {
                        navigator.clipboard.writeText(
                          data.songwriter_details?.songwriter_PRO || ""
                        );
                      }}
                    >
                      {data.songwriter_details.songwriter_PRO}
                    </span>
                  </Tooltip>

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
          {data.config?.show_pub_line && (
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
              <Tooltip
                title='Copied!'
                trigger={["click"]}
                placement='top'
                open={showPubLineTooltip}
                onOpenChange={(open) => {
                  setShowPubLineTooltip(true);
                }}
              >
                <span
                  className='text-[18px] w-full hover:underline cursor-pointer flex flex-col justify-start items-start'
                  onClick={() => {
                    navigator.clipboard.writeText(data.pub_line || "");
                  }}
                >
                  {data.pub_line?.split("\n").map((line) => (
                    <span key={line} className='w-full'>
                      {line}
                    </span>
                  ))}
                </span>
              </Tooltip>
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
                className='text-[24px]'
                style={{ fontFamily: "var(--font-inconsolata)" }}
              >
                [CONTRACTING INFO]
              </h1>

              <Tooltip
                title='Copied!'
                trigger={["click"]}
                placement='topLeft'
                open={showContractingInfoTooltip}
                onOpenChange={(open) => {
                  setShowContractingInfoTooltip(true);
                }}
              >
                <section
                  className=' flex  text-[18px] leading-[150%] w-full flex-col justify-start items-start hover:underline cursor-pointer'
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
        </section>
      </motion.div>
    </div>
  );
}
