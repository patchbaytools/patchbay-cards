// ** React/Next.js Imports
import React from "react";
import Image from "next/image";

// ** Custom Components, Hooks, Utils, etc.
import Card from "@/components/business-card/3DLicenseCard";

type CardData = {
  name?: string;
  title?: string;
  subtitle?: string;
  email?: string;
  phone?: string;
  location?: string;
  image?: string;
};

const CardTemplate = ({ data }: { data?: CardData }) => {

  return (
    <>
      <Card
        style={{
          width: "575px",
          height: "350px",
          backgroundColor: "blue",
          backgroundSize: "cover",
          backgroundPosition: "center",
          padding: "1.5rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          transition: "background-image 0.4s ease-in-out",
        }}
      >
        {/* Left side - Photo and Name */}
        <div className="flex flex-col items-start justify-center text-black">
          <div className="relative w-20 h-20 mb-3 rounded-full overflow-hidden">
            <Image
              src={data?.image || "/images/paul-3.png"}
              alt={data?.name || "Paul McCartney"}
              className="object-cover"
              width={100}
              height={100}
            />
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-1">{data?.name || "Paul McCartney"}</h1>
          <p className="text-sm text-gray-600 mb-1">{data?.title || "Musician & Songwriter"}</p>
          <p className="text-xs text-gray-500">{data?.subtitle || "The Beatles • Wings"}</p>
        </div>

        {/* Right side - Logo and Contact */}
        <div className="flex flex-col items-end justify-between h-full">
          <div className="relative w-24 h-12 mb-4">
            <Image
              src="/images/patchbay_black.png"
              alt="Patchbay"
              width={20}
              height={20}
              className="object-contain"
            />
          </div>
          
          <div className="text-right text-xs text-gray-600">
            <p className="mb-1">{data?.email || "paul@patchbay.com"}</p>
            <p className="mb-1">{data?.phone || "+44 20 7946 0958"}</p>
            <p className="text-gray-500">{data?.location || "London, UK"}</p>
          </div>
        </div>
      </Card>
    </>
  );
};

export default CardTemplate;