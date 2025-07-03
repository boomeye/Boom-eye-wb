"use client"

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isShopNowOpen, setIsShopNowOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile navbar toggle
  
  // Refs for timeout management
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const linkClasses = (href: string) =>
    `hover:text-[#69A6C9] font-archivo text-base leading-[150%] tracking-[0%] text-center align-middle ${
      pathname === href ? 'text-[#69A6C9] font-semibold' : 'text-[#454545] font-medium'
    }`;

  const mobileLinkClasses = (href: string) =>
    `block px-4 py-2 text-base font-archivo hover:bg-gray-100 ${
      pathname === href ? 'text-[#69A6C9] font-semibold' : 'text-gray-700 font-medium'
    }`;

  const mobileDropdownLinkClasses = (href: string) =>
    `block px-4 py-2 text-base font-archivo hover:bg-white/10 ${
      pathname === href ? 'text-[#69A6C9] font-semibold' : 'text-white font-medium'
    }`;

  // Handle services dropdown with delay
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
      servicesTimeoutRef.current = null;
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 500);
  };

  // Handle shop dropdown with delay
  const handleShopMouseEnter = () => {
    if (shopTimeoutRef.current) {
      clearTimeout(shopTimeoutRef.current);
      shopTimeoutRef.current = null;
    }
    setIsShopNowOpen(true);
  };

  const handleShopMouseLeave = () => {
    shopTimeoutRef.current = setTimeout(() => {
      setIsShopNowOpen(false);
    }, 500);
  };

  return (
    <nav className="sticky top-0 z-50 max-w-[120rem] mx-auto">
      {/* Desktop Navbar */}
      <div className="hidden xl:flex xl:items-center xl:justify-start xl:space-x-[120px] mx-auto px-5 bg-white text-gray-800 shadow-sm h-[44px]">
        {/* Left Section: RC Number */}
        <div className="flex items-center">
          <p className="font-archivo text-[14px] font-bold leading-[150%] tracking-[0%] align-middle text-[#0B354D]">RC 8096539</p>
        </div>

        {/* Right Section: Navigation Links */}
        <div className="flex items-center space-x-[32px]">
          <Link href="/" className={linkClasses('/')}>HOME</Link>
          <Link href="/about-us" className={linkClasses('/about-us')}>ABOUT US</Link>
          
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleServicesMouseEnter}
            onMouseLeave={handleServicesMouseLeave}
          >
            <button className={`flex items-center ${linkClasses('/services')}`} >
              SERVICES <Icon icon="mdi:chevron-down" className="ml-1 w-4 h-4" />
            </button>
            {isServicesOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#0A0A23] rounded-md shadow-lg py-1 z-20">
                <Link href="/services" className={mobileDropdownLinkClasses('/services')}>GENERAL EYECARE & TEST</Link>
                <Link href="/services" className={`${mobileDropdownLinkClasses('/services')} border-t border-white`}>VISION CORRECTION</Link>
                <Link href="/services" className={`${mobileDropdownLinkClasses('/services')} border-t border-white`}>MYOPIA CONTROL</Link>
                <Link href="/services" className={`${mobileDropdownLinkClasses('/services')} border-t border-white`}>HOME SERVICES</Link>
              </div>
            )}
          </div>

          <Link href="/eye-health" className={linkClasses('/eye-health')}>EYE HEALTH</Link>
          <Link href="/contact-us" className={linkClasses('/contact-us')}>CONTACT US</Link>
          <Link href="/blog" className={linkClasses('/blog')}>BLOG</Link>

          {/* Shop Now Dropdown */}
          <div
            className="relative group"
            onMouseEnter={handleShopMouseEnter}
            onMouseLeave={handleShopMouseLeave}
          >
            <button className={`flex items-center font-archivo text-[#F4931C] text-base leading-[150%] tracking-[0%] text-center align-middle ${
                pathname.startsWith('/shop') ? 'font-semibold' : 'font-medium'
              }`}>
              <span className="font-bold">NEW! </span>{" "}<span className="font-medium">SHOP NOW</span> <Icon icon="mdi:chevron-down" className="ml-1 w-4 h-4" />
            </button>
            {isShopNowOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-[#0A0A23] rounded-md shadow-lg py-1 z-20">
                <Link href="/shop/frames" className={mobileDropdownLinkClasses('/shop/frames')}>FRAMES</Link>
                <Link href="/shop/spectacle-lenses" className={`${mobileDropdownLinkClasses('/shop/spectacle-lenses')} border-t border-white`}>SPECTACLE LENSES</Link>
                <Link href="/shop/contact-lenses" className={`${mobileDropdownLinkClasses('/shop/contact-lenses')} border-t border-white`}>CONTACT LENSES</Link>
                <Link href="/shop/eyewear-accessories" className={`${mobileDropdownLinkClasses('/shop/eyewear-accessories')} border-t border-white`}>EYEWEAR ACCESSORIES</Link>
                <Link href="/shop/supplements-vitamins" className={`${mobileDropdownLinkClasses('/shop/supplements-vitamins')} border-t border-white`}>SUPPLEMENTS & VITAMINS</Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Navbar (Custom Design) */}
      <div className="xl:hidden flex h-[56px] w-full">
        {/* Left: Orange Hamburger */}
        <div className="bg-[#F4931C] w-[87.99870300292969px] flex items-center justify-center">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="focus:outline-none">
           <Menu className='text-white w-[28px] h-[28px]'/>
          </button>
        </div>
        {/* Right: Book an Appointment */}
        <Link   href="/book-appointment"  className="flex-1 bg-[#0A0A23] flex items-center justify-end pr-[32px] pl-6">
          <span className="text-white font-archivo font-bold text-[14px] leading-[150%] tracking-[0%] uppercase">BOOK AN APPOINTMENT</span>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 xl:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Navbar Content */}
      <div className={`fixed top-0 right-0 h-full w-[300px] bg-white transform transition-transform duration-300 ease-in-out z-50 xl:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <p className="font-archivo text-[14px] font-bold leading-[150%] tracking-[0%] align-middle text-[#0B354D]">RC 8096539</p>
            <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-800 focus:outline-none">
              <Icon icon="mdi:close" className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto">
            <div className="py-2">
              <Link href="/" className={mobileLinkClasses('/')} onClick={() => setIsMobileMenuOpen(false)}>HOME</Link>
              <Link href="/about-us" className={mobileLinkClasses('/about-us')} onClick={() => setIsMobileMenuOpen(false)}>ABOUT US</Link>
              
              {/* Services Dropdown (Mobile) */}
              <div className="w-full">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-base text-gray-700 hover:bg-gray-100"
                >
                  <span className={pathname.startsWith('/services') ? 'font-semibold text-[#69A6C9]' : 'font-medium'}>SERVICES</span>
                  <Icon icon={isServicesOpen ? "mdi:chevron-up" : "mdi:chevron-down"} className="ml-1 w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="w-full bg-[#0A0A23] py-1">
                    <Link href="/services" className={mobileDropdownLinkClasses('/services')} onClick={() => setIsMobileMenuOpen(false)}>GENERAL EYECARE & TEST</Link>
                    <Link href="/services" className={`${mobileDropdownLinkClasses('/services')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>VISION CORRECTION</Link>
                    <Link href="/services/" className={mobileDropdownLinkClasses('/services/')} onClick={() => setIsMobileMenuOpen(false)}>GENERAL EYECARE & TEST</Link>
                    <Link href="/services/" className={`${mobileDropdownLinkClasses('/services/')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>VISION CORRECTION</Link>
                    <Link href="/services/" className={`${mobileDropdownLinkClasses('/services/')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>MYOPIA CONTROL</Link>
                    <Link href="/services/" className={`${mobileDropdownLinkClasses('/services/')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>HOME SERVICES</Link>
                  </div>
                )}
              </div>

              <Link href="/eye-health" className={mobileLinkClasses('/eye-health')} onClick={() => setIsMobileMenuOpen(false)}>EYE HEALTH</Link>
              <Link href="/contact-us" className={mobileLinkClasses('/contact-us')} onClick={() => setIsMobileMenuOpen(false)}>CONTACT US</Link>
              <Link href="/blog" className={mobileLinkClasses('/blog')} onClick={() => setIsMobileMenuOpen(false)}>BLOG</Link>

              {/* Shop Now Dropdown (Mobile) */}
              <div className="w-full bg-[#0B354D]">
                <button
                  onClick={() => setIsShopNowOpen(!isShopNowOpen)}
                  className="flex items-center justify-between w-full px-4 py-2 text-base text-white hover:bg-white/10"
                >
                  <span className="font-bold text-[#F4931C]">NEW!</span> <span className="font-medium text-[#F4931C]">SHOP NOW</span> <Icon icon={isShopNowOpen ? "mdi:chevron-up" : "mdi:chevron-down"} className="ml-1 w-4 h-4" />
                </button>
                {isShopNowOpen && (
                  <div className="w-full bg-[#0A0A23] py-1">
                    <Link href="/shop/frames" className={mobileDropdownLinkClasses('/shop/frames')} onClick={() => setIsMobileMenuOpen(false)}>FRAMES</Link>
                    <Link href="/shop/spectacle-lenses" className={`${mobileDropdownLinkClasses('/shop/spectacle-lenses')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>SPECTACLE LENSES</Link>
                    <Link href="/shop/contact-lenses" className={`${mobileDropdownLinkClasses('/shop/contact-lenses')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>CONTACT LENSES</Link>
                    <Link href="/shop/eyewear-accessories" className={`${mobileDropdownLinkClasses('/shop/eyewear-accessories')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>EYEWEAR ACCESSORIES</Link>
                    <Link href="/shop/supplements-vitamins" className={`${mobileDropdownLinkClasses('/shop/supplements-vitamins')} border-t border-white`} onClick={() => setIsMobileMenuOpen(false)}>SUPPLEMENTS & VITAMINS</Link>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-4 border-t">
            <Link 
              href="/book-appointment" 
              className="w-full inline-flex items-center justify-center bg-[#090920] border-0 h-[36px] rounded-[8px] py-[8px] px-[16px] focus:outline-none hover:bg-[#1a2538] text-white shadow-md font-inter font-semibold text-[14px] leading-[145%] tracking-[0%] text-center align-middle"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              BOOK AN APPOINTMENT
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;