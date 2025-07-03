"use client"

import React, { useRef, useState } from 'react';

const certificates = [
  {
    img: '/certificate/Best Mathematics Student 2008 - Prize Mates Model Academy.png',
    title: 'Best Mathematics Student',
    year: '2008',
    subtitle: 'Prize Mates Model Academy',
  },
  {
    img: "/certificate/The President's NYSC Honours - Former President Muhammadu Buhari.png",
    title:"The President's NYSC Honours (2023)",
    year: '',
    subtitle: 'Former President Muhammadu Buhari',
  },
  {
    img: '/certificate/NYSC State Honours Award - Gov. Okezie Victor Ikpeazu 1.png',
    title: 'NYSC State Honours Award (2020)',
    year: '',
    subtitle: 'Gov. Okezie Victor Ikpeazu',
  },
  {
    img: '/certificate/Young Optometrist of the Year Award 2024 - Nigerian Optometric Association.png',
    title: 'Young Optometrist of the Year Award',
    year: '2024',
    subtitle: 'Nigerian Optometric Association',
  },
  {
    img: '/certificate/Platinum Mentor - Family of Optometric Mentors.png',
    title: 'Platinum Mentor',
    year: '2021 till Date',
    subtitle: 'Family of Optometric Mentors',
  },
  {
    img: '/certificate/Heroes Award 2023 - National Daily Award.png',
    title: 'Heroes Award',
    year: '2023',
    subtitle: 'National Daily Award',
  },
];

const CertificateSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalImg, setModalImg] = useState<null | { img: string; title: string }>(null);

  const scrollByCard = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('.certificate-card');
    if (!card) return;
    const cardWidth = (card as HTMLElement).offsetWidth + 16; // 16px gap
    container.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F3FAFD] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Modal for image popout */}
        {modalImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 transition-all"
            onClick={() => setModalImg(null)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] flex flex-col items-center" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-gray-200 z-10"
                onClick={() => setModalImg(null)}
                aria-label="Close"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
              <img
                src={modalImg.img}
                alt={modalImg.title}
                className="rounded-xl max-h-[80vh] max-w-full shadow-lg border-2 border-white"
              />
              <div className="mt-4 text-white text-lg font-bold text-center drop-shadow-lg">
                {modalImg.title}
              </div>
            </div>
          </div>
        )}

        {/* Mobile: horizontal scrollable certificates with chevrons */}
        <div className="relative block lg:hidden mb-8">
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-white to-[#C8E8F6] p-2 border rounded-full flex items-center justify-center"
            style={{ display: 'block' }}
            onClick={() => scrollByCard('left')}
            aria-label="Scroll left"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="#0A0A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-br from-white to-[#C8E8F6] p-2 border rounded-full flex items-center justify-center"
            style={{ display: 'block' }}
            onClick={() => scrollByCard('right')}
            aria-label="Scroll right"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="#0A0A23" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <div
            ref={scrollRef}
            className="flex flex-row gap-4 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollBehavior: 'smooth' }}
          >
            {certificates.map((cert, idx) => (
              <div key={idx} className="certificate-card flex flex-col items-center min-w-[260px] max-w-[320px] justify-center p-4">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full max-w-[260px] h-auto rounded-xl mb-4 cursor-pointer"
                  onClick={() => setModalImg({ img: cert.img, title: cert.title })}
                />
                <div className="text-center">
                  <div className="font-bold text-base md:text-[14px] text-[#0A0A23]">
                    {cert.title} {cert.year && <span className="font-normal">({cert.year})</span>}
                  </div>
                  <div className="text-[#4A7181] text-sm mt-1">
                    {cert.subtitle}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* First column: Tall certificate */}
          <div className="flex flex-col items-center col-span-1 row-span-2 lg:row-span-2">
            <img
              src={certificates[0].img}
              alt={certificates[0].title}
              className="w-full max-w-[320px] h-auto rounded-xl mb-4 cursor-pointer"
              onClick={() => setModalImg({ img: certificates[0].img, title: certificates[0].title })}
            />
            <div className="text-center">
              <div className="font-bold text-[18px] text-[#0A0A23]">
                {certificates[0].title} <span className="font-normal">({certificates[0].year})</span>
              </div>
              <div className="text-[#4A7181] text-base md:text-[14px] mt-1">
                {certificates[0].subtitle}
              </div>
            </div>
          </div>

          {/* Top row: 2nd, 3rd, 4th certificates */}
          <div className="flex flex-col items-center">
            <img
              src={certificates[1].img}
              alt={certificates[1].title}
              className="w-full max-w-[260px] h-auto rounded-xl mb-4 cursor-pointer"
              onClick={() => setModalImg({ img: certificates[1].img, title: certificates[1].title })}
            />
            <div className="text-center">
              <div className="font-bold text-base md:text-[14px] text-[#0A0A23]">
                {certificates[1].title}
              </div>
              <div className="text-[#4A7181] text-sm mt-1">
                {certificates[1].subtitle}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={certificates[2].img}
              alt={certificates[2].title}
              className="w-full max-w-[260px] h-auto rounded-xl mb-4 cursor-pointer"
              onClick={() => setModalImg({ img: certificates[2].img, title: certificates[2].title })}
            />
            <div className="text-center">
              <div className="font-bold text-base md:text-[14px] text-[#0A0A23]">
                {certificates[2].title}
              </div>
              <div className="text-[#4A7181] text-sm mt-1">
                {certificates[2].subtitle}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:row-span-2">
            <img
              src={certificates[3].img}
              alt={certificates[3].title}
              className="w-full max-w-[320px] h-auto rounded-xl mb-4 cursor-pointer"
              onClick={() => setModalImg({ img: certificates[3].img, title: certificates[3].title })}
            />
            <div className="text-center">
              <div className="font-bold text-[18px] text-[#0A0A23]">
                {certificates[3].title} <span className="font-normal">({certificates[3].year})</span>
              </div>
              <div className="text-[#4A7181] md:text-[14px] mt-1">
                {certificates[3].subtitle}
              </div>
            </div>
          </div>

          {/* Bottom row: 5th, 6th certificates */}
          <div className="flex flex-col items-center">
            <img
              src={certificates[4].img}
              alt={certificates[4].title}
              className="w-full max-w-[260px] h-auto rounded-xl mb-4 cursor-pointer"
              onClick={() => setModalImg({ img: certificates[4].img, title: certificates[4].title })}
            />
            <div className="text-center">
              <div className="font-bold text-base md:text-[14px] text-[#0A0A23]">
                {certificates[4].title} <span className="font-normal">({certificates[4].year})</span>
              </div>
              <div className="text-[#4A7181] text-sm md:text-base mt-1">
                {certificates[4].subtitle}
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img
              src={certificates[5].img}
              alt={certificates[5].title}
              className="w-full max-w-[260px] h-auto rounded-xl mb-4 cursor-pointer"
              onClick={() => setModalImg({ img: certificates[5].img, title: certificates[5].title })}
            />
            <div className="text-center">
              <div className="font-bold text-base md:text-[14px] text-[#0A0A23]">
                {certificates[5].title} <span className="font-normal">({certificates[5].year})</span>
              </div>
              <div className="text-[#4A7181] text-sm md:text-base mt-1">
                {certificates[5].subtitle}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
