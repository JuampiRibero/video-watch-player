import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Provider from "./_trpc/Provider";
import LanguageProvider from "@/context/LanguageContext";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";
import "./globals.css";

// Font
const inter = Inter({ subsets: ["latin"] });

// Metadata
export const metadata: Metadata = {
  title: "Video Watch Player",
  description: "Generated by create next app",
};

// Root layout component with providers for TRPC, language context and styling
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="es">
        <body className={inter.className}>
          <Toaster />
          <Topbar />
          <Navbar />
          <Provider>{children}</Provider>
          <Footer />
        </body>
      </html>
    </LanguageProvider>
  );
}
