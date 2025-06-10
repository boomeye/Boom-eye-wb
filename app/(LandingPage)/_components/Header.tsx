"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0B354D] text-white body-font">
      <div className="mx-auto flex flex-wrap p-5 flex-col xl:flex-row items-center justify-between">
        {/* Left Section: Address and Working Hours (Desktop Only) */}
        <div className="hidden xl:flex xl:flex-col xl:flex-none xl:items-start">
          <div className="flex items-center mb-2">
            <Icon icon="tdesign:location" className="w-5 h-5 mr-2" />
            <p className="font-archivo text-xs font-normal leading-[150%] tracking-[0%] align-middle">Plot 1607 Zone E, Apo Resettlement Cfit Murjala Mohammed <br /> Express Road Gudu District, Apo, Abuja, F.C.T.</p>
          </div>
          <hr className="w-[504px] border-white/30 my-2" />
          
          <div className="flex items-center mb-2">
            <Icon icon="mdi:clock-outline" className="w-5 h-5 mr-2" />
            <div>
            <p className="font-archivo text-xs font-normal leading-[150%] tracking-[0%] align-middle">Monday - Friday: (8:00 am - 6:00 pm)</p>
            <p className="font-archivo text-xs font-normal leading-[150%] tracking-[0%] align-middle">Saturday & Public Holidays: (10:00 am - 4:00 pm)</p>
            <p className="font-archivo text-xs font-normal leading-[150%] tracking-[0%] align-middle">Sundays: Closed</p>
            </div>
          </div>
          
        </div>

        {/* Center Section: Logo */}
        <div className="flex-grow justify-center xl:flex-none">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 xl:mb-0">
                    <Image src="/boom-eye-clinic-logo.svg" alt="Boom Eye Clinic Logo" width={200} height={50} />

          </Link>
        </div>

        {/* Right Section: Navigation and Appointment Button (Desktop Only) */}
        <div className="hidden xl:flex xl:flex-col xl:flex-none xl:items-end">
          <nav className="flex flex-wrap items-center text-base justify-center mb-2">
            <Link href="/my-account" className="mr-5 hover:text-gray-300 font-archivo font-semibold text-base leading-[150%] tracking-[0%] text-center align-middle">MY ACCOUNT</Link>
            <Link href="/login" className="mr-5 hover:text-gray-300 font-archivo font-semibold text-base leading-[150%] tracking-[0%] text-center align-middle">LOGIN</Link>
            <Link href="/cart" className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base relative">
              <Icon icon="proicons:cart" className="w-6 h-6" />
              <span className="absolute -top-2 -right-0 bg-[#F4931C] rounded-full w-5 h-5 flex items-center justify-center text-base text-white font-archivo font-medium leading-[150%] tracking-[0%] text-center align-middle">0</span>
            </Link>
          </nav>
          <hr className="w-[504px] border-white/30 my-2" />

          <Link href="/book-appointment" className="mt-2 inline-flex items-center bg-[#090920] border-0 w-[204px] h-[36px] rounded-[8px] py-[8px] px-[16px] gap-[10px] focus:outline-none hover:bg-[#1a2538] text-white shadow-md font-inter font-semibold text-[14px] leading-[145%] tracking-[0%] text-center align-middle">
            BOOK AN APPOINTMENT
          </Link>
        </div>

        {/* Mobile Menu Button (Mobile Only) */}
        <div className="block xl:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white focus:outline-none">
            <Icon icon={isMobileMenuOpen ? "mdi:close" : "mdi:menu"} className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="block xl:hidden bg-[#0B354D] border-t border-white/20">
          <div className="px-5 py-4 space-y-4 text-center">
            <Link href="/my-account" className="block py-2 text-white hover:text-gray-300 font-archivo font-semibold text-base" onClick={() => setIsMobileMenuOpen(false)}>MY ACCOUNT</Link>
            <Link href="/login" className="block py-2 text-white hover:text-gray-300 font-archivo font-semibold text-base" onClick={() => setIsMobileMenuOpen(false)}>LOGIN</Link>
            <Link href="/cart" className=" py-2 inline-flex items-center bg-transparent border-0 focus:outline-none rounded text-base relative" onClick={() => setIsMobileMenuOpen(false)}>
              <Icon icon="proicons:cart" className="w-6 h-6 mr-2" />
              {/* <span className="text-white font-archivo font-semibold">Cart</span> */}
              <span className="absolute bg-[#F4931C] left-3 top-0 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white font-archivo font-medium">0</span>
            </Link>
            <Link href="/book-appointment" className=" mt-4 inline-flex items-center bg-[#090920] border-0 w-full h-[36px] rounded-[8px] py-[8px] px-[16px] justify-center focus:outline-none hover:bg-[#1a2538] text-white shadow-md font-inter font-semibold text-[14px] leading-[145%] tracking-[0%] text-center align-middle" onClick={() => setIsMobileMenuOpen(false)}>
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;