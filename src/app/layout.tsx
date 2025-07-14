// ** React/Next.js Imports
import type { Metadata } from "next";
import { Inter, Inconsolata, DM_Mono } from "next/font/google";

import localFont from "next/font/local";

const NeueHaas = localFont({
  src: [
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXXThin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXXThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXThin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayXThinItalic.ttf",
      weight: "200",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayThin.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayThinItalic.ttf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayLight.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayLightItalic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRoman.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRomanItalic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediu.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediumItalic.ttf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBlack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../../public/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBlackItalic.ttf",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-neue-haas",
  display: "swap",
});

// ** Third-Party Imports
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// ** Styles
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const dm_mono = DM_Mono({
  weight: ["300", "400", "500"],
  variable: "--font-dm-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Patchbay Cards",
  description: "A microsite for sharing proprietary music metadata",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`
          ${inter.variable} ${NeueHaas.variable} ${inconsolata.variable} ${dm_mono.variable} antialiased
          
        `}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
