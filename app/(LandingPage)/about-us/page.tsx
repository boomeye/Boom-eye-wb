import React from 'react'
import { AboutUsHeroSection } from './_components/AboutUsHeroSection'
import { CorporatePartners } from './_components/CorporatePartners'
import { EyeCareCommitmentSection } from './_components/EyeCareCommitmentSection'
import { MissionVisionSection } from './_components/MissionVisionSection'
import { MeetDoctorSection } from './_components/MeetDoctorSection'

const AboutUSPage = () => {
  return (
    <div>
      <AboutUsHeroSection/>
      <CorporatePartners/>
      <EyeCareCommitmentSection/>
      <MissionVisionSection/>
      <MeetDoctorSection/>
    </div>
  )
}

export default AboutUSPage
