import React from 'react'
import Image from 'next/image'

export const CorporatePartners = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[40px] font-archivo font-bold leading-[120%] text-center align-middle text-[#F4931C] mb-[8px]">
          Corporate Partners
        </h2>
        <p className="font-archivo font-normal text-base leading-[150%] text-[#454545] mb-[48px]">
          Our Corporate Partners support us through logistics, outreach, training, policies and strategic development.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 items-center justify-center mb-16">
          <Image src="/corporate-partners/NHIS 1.svg" alt="NHIS" width={120} height={60} className="mx-auto" />
          <Image src="/corporate-partners/NHIA 1.svg" alt="NHIA" width={140} height={60} className="mx-auto" />
          <Image src="/corporate-partners/FOM Logo 1.svg" alt="FOM Logo" width={120} height={60} className="mx-auto" />
          <Image src="/corporate-partners/OSELF 1.svg" alt="OSELF" width={196} height={60} className="mx-auto" />
          <Image src="/corporate-partners/ODORBN Logo 1.svg" alt="ODORBN Logo" width={120} height={60} className="mx-auto" />
          <Image src="/corporate-partners/NOA Logo 2.svg" alt="NOA Logo" width={120} height={60} className="mx-auto" />
          <Image src="/corporate-partners/Crizal 1.svg" alt="Crizal" width={120} height={60} className="mx-auto" />
          <Image src="/corporate-partners/Essilor Experts 1.svg" alt="Essilor Experts" width={120} height={60} className="mx-auto" />
        </div>

        <h2 className="text-[40px] font-archivo font-bold leading-[120%] text-center align-middle text-[#F4931C] mb-[8px]">
          HMO Partners
        </h2>
        <p className="font-archivo font-normal text-base leading-[150%] text-[#454545] mb-[48px]">
          We collaborate with a range of partners to provide quality care services to enhance patient access to our practice.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-10 items-center justify-center">
          <Image src="/hmo-partners/leadway_health_hmo_logo.png.svg" alt="Leadway Health" width={120} height={60} className="mx-auto" />
          <Image src="/hmo-partners/Clearline HMO 1.svg" alt="Clearline HMO" width={120} height={60} className="mx-auto" />
          <Image src="/hmo-partners/reliance hmo.svg" alt="Reliance HMO" width={120} height={60} className="mx-auto" />
          <Image src="/hmo-partners/ProHealth HMO 1.svg" alt="ProHealth HMO" width={120} height={60} className="mx-auto" />
          <Image src="/hmo-partners/venus_medicare_logo.png.svg" alt="Venus Medicare" width={120} height={60} className="mx-auto" />
          <Image src="/hmo-partners/axa_logo.svg.svg" alt="AXA" width={120} height={60} className="mx-auto" />
          <Image src="/hmo-partners/Hygeia HMO 1.svg" alt="Hygeia HMO" width={140} height={60} className="mx-auto" />
          <Image src="/hmo-partners/avon_hmo_icon.jpeg.svg" alt="Avon HMO" width={120} height={60} className="mx-auto" />
        </div>
      </div>
    </section>
  )
}