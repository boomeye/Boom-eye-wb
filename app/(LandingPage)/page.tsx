import Image from "next/image";
import HeroSection from "./_components/HeroSection";
import WhyChooseUs from "./_components/WhyChooseUs";
import Testimonials from "./_components/Testimonials";
import TeamSection from "./_components/TeamSection";
import Footer from "./_components/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <TeamSection/>
    </div>
  );
}


