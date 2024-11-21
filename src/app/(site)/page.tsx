import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import Brands from "@/components/Brands";
import Carousel from "@/components/Carousel";
import CallToAction from "@/components/Home/CallToAction";
import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import Portfolio from "@/components/Home/Portfolio";
import Testimonials from "@/components/Home/Testimonials";
import Pricing from "@/components/Pricing";
import Support from "@/components/Support";
import Team from "@/components/Team";
import { Metadata } from "next";
import { Sliders } from "react-feather";
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png"
  ];

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `${siteName}`,
  description: "BusinessCentre offers flexible, professional workspaces in the heart of City Center Deira, tailored for entrepreneurs, startups, and established businesses to thrive.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <About />
      <Carousel slides={slides}/>
      <Team />
      <Portfolio />
      <Testimonials />
      <Brands />
      {/*<Pricing />*/}
      <HomeBlogSection />
      {/**<Support /> map and support removed form main page*/} 
      <Support />
      <CallToAction />
    </>
  );
}
