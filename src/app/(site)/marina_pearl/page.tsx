import Marina_pearl from "@/components/Marina_pearl";
import { Metadata } from "next";
import CarouselMarina from "@/components/CarouselMarina";
import Support from "@/components/Support";
import AboutMP from "@/components/AboutMP";
import calConfig from "@/static-data/calConfig";
import Calendar from "@/components/Calender";
import Maps from "@/components/Maps";
import mapConfig from "@/static-data/mapConfig";
import Carousel_UI from "@/components/ui/carousel";
import AppleCardsCarouselMP from "../apple_carousel_mp/page";

const siteName = process.env.SITE_NAME;


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

export const metadata: Metadata = {
  title: `Marina Pearl | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function MarinaPearlPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <AppleCardsCarouselMP/>


          <AboutMP />
          <Marina_pearl />
          {/* <Calendar /> */}
          <Maps googleMapUrl={mapConfig.marinapearl_map}/>
          <Support />
        </div>
      </section>
    </>
  );
}
