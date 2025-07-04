"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Header = () => {
  return (
    <header className='bg-[#0B354D]'>

    <div className="text-white body-font  max-w-[120rem] mx-auto">
      {/* Desktop Layout */}
      <div className="hidden xl:flex mx-auto flex-wrap p-5 flex-col xl:flex-row items-center justify-between">
        {/* Left Section: Address and Working Hours (Desktop Only) */}
        <div className="flex flex-col flex-none items-start">
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
        <div className="flex flex-col flex-none items-end">
          <nav className="flex flex-wrap items-center text-base justify-center mb-2">
            <Link href="/my-account" className="mr-5 hover:text-gray-300 font-archivo font-semibold text-base leading-[150%] tracking-[0%] text-center align-middle">MY ACCOUNT</Link>
            <Link href="/login" className="mr-5 hover:text-gray-300 font-archivo font-semibold text-base leading-[150%] tracking-[0%] text-center align-middle">LOGIN</Link>
            <Link href="/cart" className="inline-flex items-center bg-transparent border-0 py-1 px-3 focus:outline-none rounded text-base relative">
              <Icon icon="proicons:cart" className="w-6 h-6" />
              <span className="absolute -top-2 -right-0 bg-[#F4931C] rounded-full w-5 h-5 flex items-center justify-center text-base text-white font-archivo font-medium leading-[150%] tracking-[0%] text-center align-middle">0</span>
            </Link>
          </nav>
          <hr className="w-[504px] border-white/30 my-2" />
          <Link href="https://care.ecmsapx.com/appointment/28X74K" className="mt-2 inline-flex items-center bg-[#090920] border-0 w-[204px] h-[36px] rounded-[8px] py-[8px] px-[16px] gap-[10px] focus:outline-none hover:bg-[#1a2538] text-white shadow-md font-inter font-semibold text-[14px] leading-[145%] tracking-[0%] text-center align-middle">
            BOOK AN APPOINTMENT
          </Link>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="flex xl:hidden items-center justify-between px-4 py-6">
        {/* Left: Location Icon */}
        <div className="flex items-center">
          <Icon icon="tdesign:location" className="w-[28px] h-[28px]" />
        </div>
        {/* Center: Logo */}
        <div className="flex items-center justify-center ml-[101px] mr-[60px]">
          <Link href="/">
            <Image src="/boom-eye-clinic-logo.svg" alt="Boom Eye Clinic Logo" width={99.38417053222656} height={38.99980545043945} />
          </Link>
        </div>
        {/* Right: User and Cart Icons */}
        <div className="flex items-center space-x-[8px]">
          <Link href="/my-account" className="relative">
            <Icon icon="mdi:account-outline" className="w-[28px] h-[28px]" />
          </Link>
          <Link href="/cart" className="relative">
            <Icon icon="proicons:cart" className="w-[28px] h-[28px]" />
            <span className="absolute -top-2 -right-2 bg-[#F4931C] rounded-full w-5 h-5 flex items-center justify-center text-xs text-white font-archivo font-medium">0</span>
          </Link>
        </div>
      </div>
    </div>
    </header>
  );
};

export default Header;