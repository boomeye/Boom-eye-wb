import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "./_components/Header";
import Navbar from "./_components/Navbar";
import HeroSection from "./_components/HeroSection";
import Footer from "./_components/Footer";

const archivo = localFont({
  src: "../fonts/Archivo-VariableFont_wdth,wght.ttf",
  variable: "--font-archivo",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Boom Eye Clinic",
  description: "Boom Eye Clinic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivo.variable} antialiased`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
