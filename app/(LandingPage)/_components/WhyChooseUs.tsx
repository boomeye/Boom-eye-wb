import React from 'react';
import Image from 'next/image';

const whyChooseUsData = [
  {
    title: "Top-Rated by Patients",
    description: "Consistently high reviews reflect our commitment to outstanding eye care and patient satisfaction.",
  },
  {
    title: "Modern, Comfortable Clinic",
    description: "Relax in a welcoming, well-equipped environment designed to make your visit stress-free.",
  },
  {
    title: "Prime Central Location",
    description: "Easily accessible in the heart of Abuja. Convenience for individuals and families alike.",
  },
  {
    title: "Specialist Consultations",
    description: "Receive expert advice and care from experienced, well exposed and award-winning optometrists and vision professionals.",
  },
  {
    title: "Transparent & Fair Pricing",
    description: "No hidden fees, just clear, competitive pricing for quality care and products.",
  },
  {
    title: "Exclusive Offers & Discounts",
    description: "Take advantage of seasonal promotions and tailored packages to fit your budget.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-[67px] bg-[#F3FAFD] overflow-hidden">
      <div className="max-w-[100rem] mx-auto px-4">
        <div className="text-center mb-[51px]">
          <p className="text-[#F4931C] font-nunito font-semibold text-base leading-[120%] tracking-[0.08em] text-center mb-2">WHY CHOOSE US</p>
          <h2 className="text-[36px] font-archivo font-bold leading-[120%] text-center text-[#0A0A23]">These Are What Makes Us Different</h2>
          <p className="font-archivo font-medium text-base leading-[150%] text-center text-[#262626] mt-4 max-w-2xl mx-auto">We have an expert team, a comfy work environment and a working system to provide that satisfying solution to every care you need. Like never before.</p>
        </div>

        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-between gap-12">
          {/* Left Column: Images */}
          <div className="flex-1 flex flex-col items-center xl:items-start space-y-8 relative w-full max-w-full md:max-w-lg lg:max-w-xl xl:max-w-[626.84375px] mx-auto">
            <div className="relative w-full h-auto rounded-xl overflow-hidden xl:transform xl:translate-x-1/10">
              <Image 
                src="/why-choose-us.png" 
                alt="Man with patient using eye examination machine"
                width={626.84375} 
                height={400} 
                layout="responsive"
                objectFit="cover"
                className="rounded-xl"
              />
            </div>
            
          </div>

          {/* Right Column: Numbered Points */}
          <div className="flex-1 space-y-6 lg:space-y-[8px] w-full">
            {whyChooseUsData.map((item, index) => (
              <div key={index} className="flex items-center bg-white rounded-[100px] p-4 shadow-[0px_2px_14px_0px_#E7E7E9] w-full min-h-[100px] pt-1 pr-2 pb-1 gap-4 relative mx-auto xl:w-[599px]">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[92px] h-[92px] flex items-center justify-center text-[#294019] rounded-[100px] font-archivo font-bold text-2xl leading-[120%] tracking-[-0.02em] p-2.5 bg-gradient-to-br from-white to-[#C8E8F6]">
                  {`0${index + 1}`}
                </div>
                <div className="ml-[104px] pr-4">
                  <h3 className="font-archivo font-bold text-base leading-[150%] text-[#454545] mb-1">{item.title}</h3>
                  <p className="font-archivo font-normal text-base leading-[150%] text-[#454545]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 