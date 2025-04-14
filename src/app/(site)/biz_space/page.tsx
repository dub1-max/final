import AboutBS from "@/components/AboutBS";
import Biz_Space from "@/components/Biz_Space";
import CarouselBizSpace from "@/components/CarouselBizSpace";
import Support from "@/components/Support";
import Calendar from "@/components/Calender";

import { Metadata } from "next";
import Carousel_UI from "@/components/ui/carousel";
import Maps from "@/components/Maps";
import mapConfig from "@/static-data/mapConfig";
import AppleCardsCarouselBS from "../apple_carousel_bs/page";
const slideData = [
  {
    title: "Mystic Mountains",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Urban Dreams",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Neon Nights",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Desert Whispers",
    button: "Explore Component",
    src: "https://images.unsplash.com/photo-1679420437432-80cfbf88986c?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Biz Space | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function BizSpacePage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <AppleCardsCarouselBS/>

          <AboutBS/>
          <Biz_Space />
          {/* <Calendar/> */}
          <Maps googleMapUrl={mapConfig.bizspace_map} />
          <Support />  
        </div>
      </section>
    </>
  );
}
