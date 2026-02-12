"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <div className="bg-[#0B354D]">
      <footer className="text-white body-font relative  max-w-[120rem] mx-auto">
        <div className="absolute top-0 bottom-0 left-[33.5%] w-[1.5px] bg-white hidden xl:block"></div>
        <div className="px-2 md:px-4 py-24 mx-auto flex flex-col items-center xl:flex-row xl:items-stretch gap-8">
          <div className="w-full xl:w-1/3 flex-shrink-0 text-left pl-4 h-full">
            <Link
              href="/"
              className="flex title-font font-medium items-start justify-start text-white mb-4"
            >
              <Image
                src="/boom-eye-clinic-logo.svg"
                alt="Boom Eye Clinic Logo"
                width={200}
                height={50}
              />
            </Link>
            <p className="mt-2 text-sm font-archivo font-normal leading-[150%] tracking-[0%] text-white text-left border-t-[1.5px] border-white py-4 mb-[16px]">
              We deliver expert eye care with precision, compassion, and global
              best practices. Our standard is to protect and enhance your vision
              while empowering you with the right knowledge. At Boom Eye Clinic,
              we're committed to you an an exceptional experience. Every time!
            </p>
            {/* Social liks */}
            <span className="md:inline-flex justify-center hidden">
              <a href="https://www.facebook.com/profile.php?id=61573478302168&mibextid=wwXIfr&mibextid=wwXIfr" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                <Icon icon="ic:baseline-facebook" className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/boomeyeclinic/" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:instagram" className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/boom-eye-clinic-ltd-87ba44369" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:linkedin" className="w-6 h-6" />
              </a>
              <a href="http://tiktok.com/@boomeyeclinic" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                <Icon icon="ic:baseline-tiktok" className="w-6 h-6" />
              </a>
              <a href="https://x.com/boomeyeclinic" className="text-[#6092A7] p-2 rounded-full bg-white flex items-center mr-3 justify-center hover:text-white hover:bg-white/10">
                <Icon icon="ri:twitter-x-fill" className="w-6 h-6" />
              </a>
              <a href="https://www.threads.net/@boomeyeclinic" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                <Icon icon="simple-icons:threads" className="w-6 h-6" />
              </a>
            </span>
          </div>

          {/* Use grid */}
          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-8 w-full xl:w-2/4 md:text-left text-left">
            <div className="px-4">
              <h2 className="font-archivo font-bold text-[32px] text-[#87CEEB] leading-[150%] tracking-[0%] mb-3 relative after:absolute after:bottom-0 after:left-0 after:w-[129px] after:h-[1.5px] after:bg-[#F4931C]">
                Quick Links
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link
                    href="/"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about-us"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
                    Ophthalmic Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://care.ecmsapx.com/appointment/28X74K"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
                    Book An Appointment
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shop"
                    className="text-[#F4931C] hover:text-orange-400 font-inter font-semibold text-base py-2 block border-b border-white/30"
                  >
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
                  <Link
                    href="#"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
                    Contact Our HR To Apply
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
                    Eye Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-white font-archivo font-normal text-base py-2 block border-b border-white/30 mb-[16px] hover:text-[#6092A7]"
                  >
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
                <li className="flex items-center text-white mb-[16px] hover:text-[#6092A7]">
                  <Icon
                    icon="eva:phone-call-outline"
                    className="w-[20px] h-[20px] mr-2 text-[#6092A7] hover:text-white"
                  />
                  <div>
                    <a href="tel:+2348038945401" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#6092A7] rounded">
                      <p>+234 803 894 5401</p>
                    </a>
                  </div>
                </li>
                <li className="flex items-center text-white pb-[16px] mb-[16px] border-b border-white/30 hover:text-[#6092A7]">
                  <Icon
                    icon="logos:whatsapp-icon"
                    className="w-[20px] h-[20px] mr-2 text-[#6092A7] hover:text-white"
                  />
                  <div>
                    <a href="tel:+2347043798008" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#6092A7] rounded">
                      <p>+234 704 379 8008</p>
                    </a>
                  </div>
                </li>
                <li className="flex items-center text-white mb-[16px] hover:text-[#6092A7]">
                  <Icon
                    icon="material-symbols:mail-outline-rounded"
                    className="w-[20px] h-[20px] mr-2 text-[#6092A7] hover:text-white"
                  />
                  <div>
                    <a href="mailto:info@boomeyeclinic.com" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#6092A7] rounded">
                      <p>info@boomeyeclinic.com</p>
                    </a>
                  </div>
                </li>
                <li className="flex items-center text-white mb-[16px] hover:text-[#6092A7]">
                  <Icon
                    icon="material-symbols:mail-outline-rounded"
                    className="w-[20px] h-[20px] mr-2 text-[#6092A7] hover:text-white"
                  />
                  <div>
                    <a href="mailto:admin@boomeyeclinic.com" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#6092A7] rounded">
                      <p>admin@boomeyeclinic.com</p>
                    </a>
                  </div>
                </li>
                <li className="flex items-center text-white pb-[16px] mb-[16px] border-b border-white/30 hover:text-[#6092A7]">
                  <Icon
                    icon="material-symbols:mail-outline-rounded"
                    className="w-[20px] h-[20px] mr-2 text-[#6092A7] hover:text-white"
                  />
                  <div>
                    <a href="mailto:drhardy@boomeyeclinic.com" className="hover:underline focus:outline-none focus:ring-2 focus:ring-[#6092A7] rounded">
                      <p>drhardy@boomeyeclinic.com</p>
                    </a>
                  </div>
                </li>
                <li className="flex items-start text-white pb-[16px] mb-[16px] border-b border-white/30 hover:text-[#6092A7]">
                  <Icon
                    icon="tdesign:location"
                    className="w-[25px] h-[25px] mr-3 mt-1 text-[#6092A7] hover:text-white"
                  />
                  <p>
                    Awesome Plaza, Suite A28 (Ground Floor) Opp. Chicken <br />{" "}
                    Republic (Off Apo Novare Mall) Apo Resettlement, Abuja
                  </p>
                </li>
              </nav>
              {/* Social links */}
              <span className="inline-flex justify-center md:hidden">
                <a href="https://www.facebook.com/profile.php?id=61573478302168&mibextid=wwXIfr&mibextid=wwXIfr" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                  <Icon icon="ic:baseline-facebook" className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/boomeyeclinic/" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:instagram" className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/boom-eye-clinic-ltd-87ba44369" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:linkedin" className="w-6 h-6" />
                </a>
                <a href="http://tiktok.com/@boomeyeclinic" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                  <Icon icon="ic:baseline-tiktok" className="w-6 h-6" />
                </a>
                <a href="https://x.com/boomeyeclinic" className="text-[#6092A7] p-2 rounded-full bg-white flex items-center mr-3 justify-center hover:text-white hover:bg-white/10">
                  <Icon icon="ri:twitter-x-fill" className="w-6 h-6" />
                </a>
                <a href="https://www.threads.net/@boomeyeclinic" className="text-[#6092A7] mr-3 p-2 rounded-full bg-white flex items-center justify-center hover:text-white hover:bg-white/10" target="_blank" rel="noopener noreferrer">
                  <Icon icon="simple-icons:threads" className="w-6 h-6" />
                </a>
              </span>
            </div>
          </div>
        </div>

        {/* WhatsApp Floating Button */}
        <div className="flex justify-center pt-6">
          <a
            href="https://wa.me/message/W2GXITSGNCBJM1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hidden md:block absolute right-20 bottom-12 z-20 p-3 rounded-full shadow-xl hover:bg-[#1DA851] transition-colors duration-300"
          >
            <Icon
              icon="logos:whatsapp-icon"
              className="w-[45px] h-[45px] lg:w-[65px] lg:h-[65px]"
            />
          </a>
        </div>

        {/* Bottom footer */}
        <div className="border-t-[1.5px] border-white w-full pb-6 bg-[#0B354D] relative z-10 -mt-20 md:mt-0">
          <div className="flex justify-center flex-col items-center px-2">
            <p className="text-white text-[14px] leading-[150%] text-center align-middle pt-4 font-archivo font-normal">
              Privacy Policy | Cookie Policy | Terms & Condition <br />© 2025
              Boom Eye Clinic Ltd. Website Website Developed by Xoft
            </p>
          </div>
        </div>


        <div className="flex justify-end mr-[16px] pt-[16px] pb-[48px] md:hidden">
          <a
            href="https://wa.me/message/W2GXITSGNCBJM1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white z-20 p-3 rounded-full shadow-xl hover:bg-[#1DA851] transition-colors duration-300"
          >
            <Icon
              icon="logos:whatsapp-icon"
              className="w-[64px] h-[64px]"
            />
          </a>
        </div>
      </footer >
    </div >
  );
};

export default Footer;
