
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landingpage/HeroSection";
import About from "@/components/landingpage/About";
import ShowCase from "@/components/landingpage/ShowCase";
import Crafting from "@/components/landingpage/Crafting";
import ImagesScroll from "@/components/landingpage/ImagesScroll";
import RelaxationTimeline from "@/components/landingpage/Timeline";
import ChinaSourcing from "@/components/landingpage/ChinaSourcing";

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
    </div>
  );
};

export default page;
