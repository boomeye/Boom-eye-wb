import React from 'react'

const BookAppointmentFooter = () => {
  return (
    <div className='bg-[#6B9BB5] '>

      <div className="w-full max-w-[120rem] mx-auto py-8 sm:py-12 px-2 sm:px-4 flex flex-col items-center relative overflow-hidden">
        {/* Orange squares */}
        <div className="absolute left-4 sm:left-10 top-4 sm:top-8 w-6 h-6 sm:w-10 sm:h-10 bg-[#FF9500] rounded-none" />
        <div className="absolute left-4 sm:left-10 bottom-4 sm:bottom-8 w-6 h-6 sm:w-10 sm:h-10 bg-[#FF9500] rounded-none" />

        {/* Main Content */}
        <div className="container mx-auto flex flex-col items-center text-center z-10">
          <h2 className="text-white font-bold text-lg sm:text-2xl md:text-3xl lg:text-4xl leading-tight mb-6 sm:mb-8">
            For emergencies, contact us by phone during business hours. Email may delay<br className="hidden md:block" /> urgent responses
          </h2>
          <div className="flex flex-col gap-3 sm:gap-4 mb-3 sm:mb-4 w-full items-center">
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 text-white text-base sm:text-lg font-normal">
              <span className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0-1.243 1.007-2.25 2.25-2.25h2.386c.51 0 .955.343 1.09.835l.52 1.857a1.125 1.125 0 01-.259 1.09l-1.13 1.13a16.015 16.015 0 006.006 6.006l1.13-1.13a1.125 1.125 0 011.09-.259l1.857.52c.492.135.835.58.835 1.09v2.386a2.25 2.25 0 01-2.25 2.25h-.75C6.798 20.25 3.75 13.202 3.75 8.25v-.75z" />
                </svg>
              </span>
              <span className="block xs:inline">+234 704 379 8008, +234 803 894 5401</span>
            </div>
            <div className="flex flex-col xs:flex-row items-center justify-center gap-2 text-white text-base sm:text-lg">
              <span className="inline-block">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                </svg>
              </span>
              <a href="mailto:info@boomeyeclinic.com" className="underline font-normal text-white hover:text-[#FF9500]">info@boomeyeclinic.com</a>

            </div>
          </div>
          <div className="text-white text-xs sm:text-base mt-2">
            "Your vision matters to us. We look forward to caring for you whenever you need care."
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookAppointmentFooter
