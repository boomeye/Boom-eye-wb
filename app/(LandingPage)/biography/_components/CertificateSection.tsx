import React from 'react';

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
  return (
    <div className="w-full bg-[#F3FAFD] py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {/* First column: Tall certificate */}
          <div className="flex flex-col items-center col-span-1 row-span-2 lg:row-span-2">
            <img
              src={certificates[0].img}
              alt={certificates[0].title}
              className="w-full max-w-[320px] h-auto rounded-xl mb-4"
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
              className="w-full max-w-[260px] h-auto rounded-xl mb-4"
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
              className="w-full max-w-[260px] h-auto rounded-xl mb-4"
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
              className="w-full max-w-[320px] h-auto rounded-xl mb-4"
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
              className="w-full max-w-[260px] h-auto rounded-xl mb-4"
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
              className="w-full max-w-[260px] h-auto rounded-xl mb-4"
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
