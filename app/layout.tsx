import "@/styles/reset.css";
import "@/styles/main.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import ScrollToTop from "@/utils/autoScrollToTop";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Makarchuk Bogdan - Dev",
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
        {/* Навигация (Navbar) */}
        <Navbar />

        {/* Компонент для скролла наверх при переходе (Next.js-версия ScrollToTop) */}
        <ScrollToTop />

        {/* Здесь будут «страницы» из файловой системы – вместо <Routes>…</Routes> */}
        {children}

        {/* Футер */}
        <Footer />
      </body>
    </html>
  );
}
