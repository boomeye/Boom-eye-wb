import React from 'react'
import { BookAppointmentHeroSection } from './_components/BookAppointmentHeroSection'
import BookAppointmentFooter from './_components/BookAppointmentFooter'
import AppointmentBookingFlow from './_components/AppointmentBookingFlow'

const BookAppointmentPage = () => {
  return (
    <div className='bg-[#F3FAFD]'>
      <BookAppointmentHeroSection/>
      <br />
      <AppointmentBookingFlow/>
      <BookAppointmentFooter/>
    </div>
  )
}

export default BookAppointmentPage
