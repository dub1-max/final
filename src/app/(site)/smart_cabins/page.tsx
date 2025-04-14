import Smart_Cabins from "@/components/Smart_Cabins";
import { Metadata } from "next";
import CarouselSmartCabin from "@/components/CarouselSmartCabin";
import Support from "@/components/Support";
import AboutSmart from "@/components/AboutSmart";
import AppleCardsCarouselSC from "../apple_carousel_sc/page";

const siteName = process.env.SITE_NAME;
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
];

export const metadata: Metadata = {
  title: `Smart Cabins | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function SmartCabinsPage() {
  return (
    <>
      <section className="pt-10">
      <AppleCardsCarouselSC/>

          <AboutSmart/>
          <Smart_Cabins />
          <Support />
      </section>
    </>
  );
}
