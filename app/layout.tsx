import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./(LandingPage)/_components/Header";
import Navbar from "./(LandingPage)/_components/Navbar";
import HeroSection from "./(LandingPage)/_components/HeroSection";
import Footer from "./(LandingPage)/_components/Footer";

const archivo = localFont({
  src: "./fonts/Archivo-VariableFont_wdth,wght.ttf",
  variable: "--font-archivo",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Boom Eye Clinic",
  description: "Boom Eye Clinic",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${archivo.variable} antialiased max-w-[150rem] mx-auto bg-[#F3FAFD]`}
        className={`${archivo.variable} antialiased`}
      >
        <Header />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
