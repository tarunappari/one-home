
import Navbar from "@/components/common/Navbar";
import HeroSection from "@/components/landingpage/HeroSection";
import About from "@/components/landingpage/About";
import ShowCase from "@/components/landingpage/ShowCase";
import Crafting from "@/components/landingpage/Crafting";
import ImagesScroll from "@/components/landingpage/ImagesScroll";

const page = () => {
  return (
    <div className="relative pageContainer">
      <Navbar />
      <HeroSection />
      <About />
      <Crafting />
      <ShowCase />
      <ImagesScroll />
    </div>
  );
};

export default page;
