"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className="bg-[#0B354D] text-white body-font relative">
      <div className="absolute top-0 bottom-0 left-[33.5%] w-[1.5px] bg-white hidden xl:block"></div>
      <div className="px-4 py-24 mx-auto flex flex-col items-center xl:flex-row xl:items-stretch gap-8">
        <div className="w-full xl:w-1/3 flex-shrink-0 text-left pl-4 h-full">
          <Link href="/" className="flex title-font font-medium items-start justify-start text-white mb-4">
            <Image src="/boom-eye-clinic-logo.svg" alt="Boom Eye Clinic Logo" width={200} height={50} />
          </Link>
          <p className="mt-2 text-sm font-archivo font-normal leading-[150%] tracking-[0%] text-white text-left border-t-[1.5px] border-white py-4 mb-[16px]">
            We deliver expert eye care with precision, compassion, and global
            best practices. Our standard is to protect and enhance your vision
            while empowering you with the right knowledge. At Boom Eye Clinic,
            we're committed to you an an exceptional experience. Every time!
          </p>
          <span className="inline-flex justify-center">
            <a className="text-[#87CEEB] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10">
              <Icon icon="ic:baseline-whatsapp" className="w-6 h-6" />
            </a>
            <a className="text-[#87CEEB] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10">
              <Icon icon="ic:baseline-facebook" className="w-6 h-6" />
            </a>
            <a className="text-[#87CEEB] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10">
              <Icon icon="mdi:instagram" className="w-6 h-6" />
            </a>
            <a className="text-[#87CEEB] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10">
              <Icon icon="mdi:linkedin" className="w-6 h-6" />
            </a>
            <a className="text-[#87CEEB] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10">
              <Icon icon="ic:baseline-tiktok" className="w-6 h-6" />
            </a>
            <a className="text-[#87CEEB] p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10">
              <Icon icon="ri:twitter-x-fill" className="w-6 h-6" />
            </a>
          </span>
        </div>

        {/* Use grid */}
        <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 w-full lg:w-2/3 xl:w-2/4 md:text-left text-left">
          <div className="px-4">
            <h2 className="font-archivo font-bold text-[32px] text-[#87CEEB] leading-[150%] tracking-[0%] mb-3 relative after:absolute after:bottom-0 after:left-0 after:w-[129px] after:h-[1.5px] after:bg-[#F4931C]">
              Quick Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="/" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  Ophthalmic Services
                </Link>
              </li>
              <li>
                <Link href="/book-appointment" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  Book An Appointment
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-[#F4931C] hover:text-orange-400 font-inter font-semibold text-base py-2 block border-b border-white/30">
                  SHOP NOW!
                </Link>
              </li>
            </nav>
          </div>
          <div className="px-4">
            <h2 className="font-archivo font-bold text-[32px] text-[#87CEEB] leading-[150%] tracking-[0%] mb-3 relative after:absolute after:bottom-0 after:left-0 after:w-[129px] after:h-[1.5px] after:bg-[#F4931C]">
              Resources
            </h2>
            <nav className="list-none mb-10">
              <li>
                <Link href="#" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  Contact Our HR To Apply
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  Eye Health
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#87CEEB]">
                  Refund Policy
                </Link>
              </li>
            </nav>
          </div>
          <div className="px-4">
            <h2 className="font-archivo font-bold text-[32px] text-[#87CEEB] leading-[150%] tracking-[0%] mb-3 relative after:absolute after:bottom-0 after:left-0 after:w-[129px] after:h-[1.5px] after:bg-[#F4931C]">
              Contact Us
            </h2>
            <nav className="list-none mb-10">
              <li className="flex items-center text-white mb-[16px] hover:text-[#87CEEB]">
                <Icon icon="eva:phone-call-outline" className="w-[20px] h-[20px] mr-2 text-[#87CEEB] hover:text-white" />
                <div>
                  <p>+234 803 894 5401</p>
                </div>
              </li>
              <li className="flex items-center text-white pb-[16px] mb-[16px] border-b border-white/30 hover:text-[#87CEEB]">
                <Icon icon="logos:whatsapp-icon" className="w-[20px] h-[20px] mr-2 text-[#87CEEB] hover:text-white" />
                <div>
                  <p>+234 704 379 8008</p>
                </div>
              </li>
              <li className="flex items-center text-white mb-[16px] hover:text-[#87CEEB]">
                <Icon icon="material-symbols:mail-outline-rounded" className="w-[20px] h-[20px] mr-2 text-[#87CEEB] hover:text-white" />
                <div>
                  <p>info@boomeyecilinc.com</p>
                </div>
              </li>
              <li className="flex items-center text-white pb-[16px] mb-[16px] border-b border-white/30 hover:text-[#87CEEB]">
                <Icon icon="material-symbols:mail-outline-rounded" className="w-[20px] h-[20px] mr-2 text-[#87CEEB] hover:text-white" />
                <div>
                  <p>boomeyecilinc@outlook.com</p>
                </div>
              </li>
              <li className="flex items-start text-white pb-[16px] mb-[16px] border-b border-white/30 hover:text-[#87CEEB]">
                <Icon icon="tdesign:location" className="w-[25px] h-[25px] mr-3 mt-1 text-[#87CEEB] hover:text-white" />
                <p>Plot 1607 Zone E, Apo Resettlement Off Murtala <br /> Mohammed Express Road Gudu District, Apo, Abuja, F.C.T.</p>
              </li>
            </nav>
          </div>
        </div>
      </div>
      {/* Bottom footer */}
      <div className="border-t-[1.5px] border-white w-full pb-6 bg-[#0B354D] relative z-10">
        <div className="flex justify-center flex-col items-center">
        <p className="text-white text-[14px] leading-[150%] text-center align-middle pt-4 font-archivo font-normal">
  Privacy Policy | Cookie Policy | Terms & Condition <br />
  © 2025 Boom Eye Clinic Ltd. Website Designed and Developed by .....
</p>

        </div>
      </div>
      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/+2347043798008" target="_blank" rel="noopener noreferrer" className="fixed bottom-8 right-8 text-white p-3 rounded-full shadow-xl hover:bg-[#1DA851] transition-colors duration-300 z-50">
        <Icon icon="logos:whatsapp-icon" className="w-[45px] h-[45px] lg:w-[65px] lg:h-[65px]" />
      </a>
    </footer>
  );
};

export default Footer; 