import AboutServiced from "@/components/AboutServiced";
import CarouselServicedOffice from "@/components/CarouselServicedOffice";
import Serviced_Offices from "@/components/Serviced_Offices";
import Support from "@/components/Support";
import { Metadata } from "next";
import AppleCardsCarouselSO from "../apple_carousel_so/page";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
];

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Serviced Offices | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ServicedOfficesPage() {
  return (
    <>
      <section className="pt-10">
        
        <AppleCardsCarouselSO/>
        <AboutServiced/>
          <Serviced_Offices />
          <Support/>
       
      </section>
    </>
  );
}
