"use client"

import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { BookAppointmentHeroSection } from './_components/BookAppointmentHeroSection'
import BookAppointmentFooter from './_components/BookAppointmentFooter'
import AppointmentBookingFlow from './_components/AppointmentBookingFlow'

const BookAppointmentPage = () => {
    // return (
  //   <div className='bg-[#F3FAFD]'>
  //     <BookAppointmentHeroSection/>
  //     <br />
  //     <AppointmentBookingFlow/>
  //     <BookAppointmentFooter/>
  //   </div>
  // )

  const router = useRouter();
  useEffect(() => {
    window.location.href = 'https://care.ecmsapx.com/appointment/28X74K';
  }, []);
  return null;
}

export default BookAppointmentPage
