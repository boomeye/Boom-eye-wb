"use client"

import React, { useRef } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

const teamMembers = [
  {
    name: "Dr. Hardy Chukwudera Mbadugha",
    title: "Senior Optometrist",
    bioLink: "/biography",
    image: "/Hardy Chukwudera Mbadugha.svg",
  },
  {
    name: "Dr. Chizara Divine Isreal",
    title: "Optometrist",
    image: "/2. Dr. Chizaram Divine Isreal (Senior Optometrist 2).svg",
  },
  {
    name: "Mrs. Barbara Ekeoma",
    title: "Head of Operations",
    image: "/3. Mrs. Barbara Mbadugha - Head of Operations.svg",
  },
  {
    name: "Dr. Ikechukwu Emmanuel",
    title: "Intern Optometrist",
    image: "/Ikechukwu Emmanuel.svg",
  },
  {
    name: "Nyen Ogar",
    title: "Digital & Marketing Coordinator",
    image: "/4. Nyen Ogar - Digital & Marketing Coodinator.svg",
  },
  {
    name: "Joan Unachukwu",
    title: "Data & BI Consultant",
    image: "/6. Joan Unachukwu - Data & BI Consultant.svg",
  },
  {
    name: "Chidozie Okafor",
    title: "Dispensing Optician",
    image: "/Chidozie Okafor.svg",
  },
];

const TeamSection = () => {
  // Ref for mobile scroll container
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll function for mobile
  const scrollByCard = (dir: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;
    const card = container.querySelector('.team-card');
    if (!card) return;
    const cardWidth = (card as HTMLElement).offsetWidth + 16; // 16px gap
    container.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="text-gray-600 body-font bg-[#F5F8FC] py-16">
      <div className="max-w-[100rem] px-4 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h2 className="text-[#F4931C] text-base font-inter font-semibold tracking-[0%] leading-[150%] mb-2">
            MEET OUR TEAM
          </h2>
          <h1 className="sm:text-3xl text-2xl font-libreBaskerville font-bold text-[#0B354D] mb-4">
            The Experts Powering Our Success
          </h1>
          <p className="xl:w-2/3 mx-auto leading-relaxed text-base font-archivo font-normal text-[#595959]">
            Our team is made up of highly skilled and diverse professionals
            dedicated to providing top-notch vision care.
          </p>
        </div>

        {/* Mobile: horizontal scrollable team cards with chevrons */}
        <div className="relative block md:hidden mb-8">
          {/* Chevrons */}
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
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card flex flex-col items-center min-w-[325px] h-auto max-w-[335px] mb-4">
                <div className="w-full h-[300px] min-w-[325px] mb-2 relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    layout="fill"
                    objectFit=""
                  />
                </div>
                <div className="w-full flex justify-center flex-col items-center">
                  <h2 className="font-archivo font-bold text-[18px] text-[#0A0A23] leading-[150%] text-center">
                    {member.name}
                  </h2>
                  <h3 className="font-archivo font-normal text-base text-[#4A7181] leading-[150%] text-center">
                    {member.title}
                  </h3>
                  {member.bioLink && (
                    <a
                      href={member.bioLink}
                      className="text-[#346095] hover:text-[#2A4C7A] inline-flex items-center font-archivo font-semibold text-sm"
                    >
                      Biography
                      <Icon icon="ic:baseline-arrow-outward" className="w-4 h-4 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: previous grid layout */}
        <div className="hidden md:flex flex-col xl:flex-row justify-between items-center gap-8 max-w-[1400px] mx-auto px-4">
          <div className="p-4 w-full xl:w-auto">
            <div className="h-full flex flex-col justify-between items-center text-center">
              <div className="w-full sm:w-[365px] h-[420px] md:h-[460px] sm:h-[420px] xl:h-[520px] mb-2 relative">
                <Image
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="w-full">
                <h2 className="font-archivo font-bold text-[18px] text-[#0A0A23] leading-[150%] text-center">
                  {teamMembers[0].name}
                </h2>

                <h3 className="font-archivo font-normal text-[18px] text-[#4A7181] leading-[150%] text-center">
                  {teamMembers[0].title}
                </h3>

                {teamMembers[0].bioLink && (
                  <a
                    href={teamMembers[0].bioLink}
                    className="font-archivo font-semibold text-[16px] text-[#346095] leading-[150%] text-center align-middle hover:text-[#2A4C7A] inline-flex items-center"
                  >
                    Biography
                    <Icon icon="ic:baseline-arrow-outward" className="w-4 h-4 ml-1" />
                  </a>
                )}
              </div>
            </div>
          </div>

          <div className="p-2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
              {teamMembers.slice(1).map((member, index) => (
                <div key={index} className="p-2 sm:p-4">
                  <div className="h-full flex flex-col items-center text-center">
                    <div className="w-full sm:w-[273px] h-[203.5px] mb-2 relative">
                      <Image
                        src={member.image}
                        alt={member.name}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <div className="w-full">
                      <h2 className="font-archivo font-bold text-[18px] text-[#0A0A23] leading-[150%] text-center">
                        {member.name}
                      </h2>

                      <h3 className="font-archivo font-normal text-base text-[#4A7181] leading-[150%] text-center">
                        {member.title}
                      </h3>

                      {member.bioLink && (
                        <a
                          href={member.bioLink}
                          className="text-[#346095] hover:text-[#2A4C7A] inline-flex items-center font-archivo font-semibold text-sm"
                        >
                          Biography
                          <Icon icon="ic:baseline-arrow-outward" className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
