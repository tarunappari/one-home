import dynamic from 'next/dynamic';
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landingpage/HeroSection";

const About = dynamic(() => import("@/components/landingpage/About"));
const ShowCase = dynamic(() => import("@/components/landingpage/ShowCase"));
const Crafting = dynamic(() => import("@/components/landingpage/Crafting"));
const RelaxationTimeline = dynamic(() => import("@/components/landingpage/Timeline"));
const ChinaSourcing = dynamic(() => import("@/components/landingpage/ChinaSourcing"));
const Customize = dynamic(() => import("@/components/landingpage/Customize"));
const CTASection = dynamic(() => import("@/components/landingpage/CTASection"));
const Contact = dynamic(() => import("@/components/landingpage/Contact"));
const Footer = dynamic(() => import("@/components/common/Footer"));

const page = () => {
  return (
    <div className="relative pageContainer">
      <Navbar />
      <HeroSection />
      <About />
      <Crafting />
      <ShowCase />
      {/* <ImagesScroll /> */}
      <RelaxationTimeline />
      <ChinaSourcing />
      <Customize />
      <CTASection />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
