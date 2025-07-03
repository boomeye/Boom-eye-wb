"use client"

import React, { useRef, useLayoutEffect } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

export const CorporatePartners = () => {
  // Refs for scroll containers
  const corpScrollRef = useRef<HTMLDivElement>(null);
  const hmoScrollRef = useRef<HTMLDivElement>(null);

  // Logo arrays
  const corpLogos = [
    { src: "/corporate-partners/NHIS 1.svg", alt: "NHIS" },
    { src: "/corporate-partners/NHIA 1.svg", alt: "NHIA" },
    { src: "/corporate-partners/FOM Logo 1.svg", alt: "FOM Logo" },
    { src: "/corporate-partners/OSELF 1.svg", alt: "OSELF" },
    { src: "/corporate-partners/ODORBN Logo 1.svg", alt: "ODORBN Logo" },
    { src: "/corporate-partners/NOA Logo 2.svg", alt: "NOA Logo" },
    { src: "/corporate-partners/Crizal 1.svg", alt: "Crizal" },
    { src: "/corporate-partners/Essilor Experts 1.svg", alt: "Essilor Experts" },
  ];
  const hmoLogos = [
    { src: "/hmo-partners/leadway_health_hmo_logo.png.svg", alt: "Leadway Health" },
    { src: "/hmo-partners/Clearline HMO 1.svg", alt: "Clearline HMO" },
    { src: "/hmo-partners/reliance hmo.svg", alt: "Reliance HMO" },
    { src: "/hmo-partners/ProHealth HMO 1.svg", alt: "ProHealth HMO" },
    { src: "/hmo-partners/venus_medicare_logo.png.svg", alt: "Venus Medicare" },
    { src: "/hmo-partners/axa_logo.svg.svg", alt: "AXA" },
    { src: "/hmo-partners/Hygeia HMO 1.svg", alt: "Hygeia HMO" },
    { src: "/hmo-partners/avon_hmo_icon.jpeg.svg", alt: "Avon HMO" },
  ];

  // GSAP animation for infinite glide
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    
    let corpTween: gsap.core.Tween | null = null;
    let hmoTween: gsap.core.Tween | null = null;
    
    // Function to check if we're on mobile
    const isMobile = () => window.innerWidth < 768;
    
    // Function to setup animations
    const setupAnimations = () => {
      if (!isMobile()) return;
      
      // Corporate Partners: left-to-right (rightward)
      if (corpScrollRef.current) {
        const el = corpScrollRef.current;
        const firstChild = el.firstElementChild;
        if (firstChild) {
          const itemWidth = firstChild.getBoundingClientRect().width;
          const totalItems = corpLogos.length;
          const totalWidth = itemWidth * totalItems;
          
          if (totalWidth > 0) {
            // Set initial position
            gsap.set(el, { x: 0 });
            
            corpTween = gsap.to(el, {
              x: -totalWidth,
              duration: 20,
              ease: "none",
              repeat: -1,
              force3D: true,
            });
          }
        }
      }
      
      // HMO Partners: right-to-left (leftward)
      if (hmoScrollRef.current) {
        const el = hmoScrollRef.current;
        const firstChild = el.firstElementChild;
        if (firstChild) {
          const itemWidth = firstChild.getBoundingClientRect().width;
          const totalItems = hmoLogos.length;
          const totalWidth = itemWidth * totalItems;
          
          if (totalWidth > 0) {
            // Set initial position to start from end
            gsap.set(el, { x: -totalWidth });
            
            hmoTween = gsap.to(el, {
              x: 0,
              duration: 20,
              ease: "none",
              repeat: -1,
              force3D: true,
            });
          }
        }
      }
    };
    
    // Wait for images to load and DOM to be ready
    const timeout = setTimeout(() => {
      setupAnimations();
    }, 500); // Increased timeout to ensure images are loaded
    
    // Handle resize
    const handleResize = () => {
      if (corpTween) {
        corpTween.kill();
        corpTween = null;
      }
      if (hmoTween) {
        hmoTween.kill();
        hmoTween = null;
      }
      
      // Reset positions
      if (corpScrollRef.current) gsap.set(corpScrollRef.current, { x: 0 });
      if (hmoScrollRef.current) gsap.set(hmoScrollRef.current, { x: 0 });
      
      // Restart animations if on mobile
      if (isMobile()) {
        setTimeout(setupAnimations, 100);
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearTimeout(timeout);
      window.removeEventListener('resize', handleResize);
      corpTween && corpTween.kill();
      hmoTween && hmoTween.kill();
    };
  }, [corpLogos.length, hmoLogos.length]);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="md:text-[40px] text-[28px] font-archivo font-bold leading-[120%] text-center align-middle text-[#F4931C] mb-[8px]">
          Corporate Partners
        </h2>
        <p className="font-archivo font-normal md:text-base text-sm leading-[150%] text-[#454545] mb-[48px]">
          Our Corporate Partners support us through logistics, outreach, training, policies and strategic development.
        </p>

        {/* Mobile: animated horizontal glide logos */}
        <div className="relative block md:hidden mb-16 overflow-hidden">
          <div
            ref={corpScrollRef}
            className="flex flex-row gap-8 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {[...corpLogos, ...corpLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-[160px] h-[80px] flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={160} 
                  height={80} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 items-center justify-center mb-16">
          {corpLogos.map((logo, idx) => (
            <Image key={idx} src={logo.src} alt={logo.alt} width={120} height={60} className="mx-auto" />
          ))}
        </div>

        <h2 className="md:text-[40px] text-[28px] font-archivo font-bold leading-[120%] text-center align-middle text-[#F4931C] mb-[8px]">
          HMO Partners
        </h2>
        <p className="font-archivo font-normal md:text-base text-sm leading-[150%] text-[#454545] mb-[48px]">
          We collaborate with a range of partners to provide quality care services to enhance patient access to our practice.
        </p>

        {/* Mobile: animated horizontal glide logos */}
        <div className="relative block md:hidden mb-8 overflow-hidden">
          <div
            ref={hmoScrollRef}
            className="flex flex-row gap-8 will-change-transform"
            style={{ width: 'max-content' }}
          >
            {[...hmoLogos, ...hmoLogos].map((logo, idx) => (
              <div key={idx} className="flex-shrink-0 w-[160px] h-[80px] flex items-center justify-center">
                <Image 
                  src={logo.src} 
                  alt={logo.alt} 
                  width={160} 
                  height={80} 
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 items-center justify-center">
          {hmoLogos.map((logo, idx) => (
            <Image key={idx} src={logo.src} alt={logo.alt} width={120} height={60} className="mx-auto" />
          ))}
        </div>
      </div>
    </section>
  )
}