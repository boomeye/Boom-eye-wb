"use client";

import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";

const Custom404 = () => {
  return (
    <div className="min-h-screen bg-[#F3FAFD] flex flex-col justify-center items-center px-4">
      <div className="max-w-xl w-full flex flex-col items-center text-center py-16">
        <Image
          src="/boom-eye-clinic-logo.svg"
          alt="Boom Eye Clinic Logo"
          width={120}
          height={40}
          className="mb-8"
        />
        <h1 className="text-[#0B354D] font-archivo font-bold text-6xl md:text-7xl mb-4">404</h1>
        <h2 className="text-[#F4931C] font-archivo font-bold text-2xl md:text-3xl mb-2">Page Not Found</h2>
        <p className="text-[#4A7181] font-archivo text-base md:text-lg mb-8">
          Oops! The page you are looking for does not exist or has been moved.<br />
          Please check the URL or return to the homepage.
        </p>
        <Link href="/" className="inline-flex items-center bg-[#0B354D] hover:bg-[#1a2538] text-white px-6 py-3 rounded-lg font-semibold text-base transition-colors duration-300 shadow-lg">
          <Icon icon="ic:round-home" className="w-6 h-6 mr-2" />
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Custom404; 