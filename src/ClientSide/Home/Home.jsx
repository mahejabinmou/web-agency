import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";
import About from "./AboutSection/AboutSection";
import AgencySection from "./AgencySection/AgencySection";
import CallToSection from "./CallToSection/CallToSection";
import FactsSection from "./FactsSection/FactsSection";
import GallerySection from "./GallerySection/GallerySection";

import HeroSection from "./HeroSection/HeroSection";
import LiveSection from "./LiveSection/LiveSection";
import NewsSection from "./NewsSection/NewsSection";
import ParallaxSponsors from "./ParallaxSponsors/ParallaxSponsors";
import ServicesSection from "./ServicesSection/ServicesSection";
import TeamSection from "./TeamSection/TeamSection";
import WeDoSection from "./WeDoSection/WeDoSection";

const Home = () => {
  return (
    <div className=" relative">
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <ServicesSection></ServicesSection>
      <About></About>
      <LiveSection></LiveSection>
      <WeDoSection></WeDoSection>
      <GallerySection></GallerySection>
      <FactsSection></FactsSection>
      {/* <TrustSection></TrustSection> */}
      <TeamSection></TeamSection>
      <ParallaxSponsors></ParallaxSponsors>
      <AgencySection></AgencySection>
      <NewsSection></NewsSection>
      <CallToSection></CallToSection>

      <Footer></Footer>
    </div>
  );
};

export default Home;
