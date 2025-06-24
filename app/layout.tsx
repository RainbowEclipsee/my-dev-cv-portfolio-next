import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/utils/autoScrollToTop";

import "@/styles/reset.css";
import "@/styles/main.css";


export const metadata: Metadata = {
  title: "Bogdan Makarchuk | Frontend Developer",
  description: "Персональное портфолио разработчика: Bogdan Makarchuk",
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
