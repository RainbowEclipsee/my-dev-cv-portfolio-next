import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/utils/autoScrollToTop";

import "@/styles/reset.css";
import "@/styles/main.css";


export const metadata: Metadata = {
  title: "Bogdan Makarchuk | Frontend Developer",
  description: "Персональное портфолио разработчика: проекты, навыки, стек и контактная информация.",
  openGraph: {
    title: "Bogdan Makarchuk | Frontend Developer",
    description: "Персональное портфолио разработчика: проекты, навыки, стек и контактная информация.",
    url: "https://makarchuk-tech.vercel.app/",
    siteName: "Bogdan Makarchuk | Frontend Developer",
    images: [
      {
        url: "https://makarchuk-tech.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bogdan Makarchuk Portfolio Preview",
        type: "image/png",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bogdan Makarchuk | Frontend Developer",
    description: "Персональное портфолио разработчика: проекты, навыки, стек и контактная информация.",
    images: ["https://makarchuk-tech.vercel.app/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ScrollToTop />
        {children}
        <Footer />
        
        <SpeedInsights/>
      </body>
    </html>
  );
}
