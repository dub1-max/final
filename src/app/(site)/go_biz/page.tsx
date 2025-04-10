import CarouselGoBiz from "@/components/CarouselGoBiz";
import Go_Biz from "@/components/Go_Biz"
import { Metadata } from "next";
import Support from "@/components/Support";
import AboutGB from "@/components/AboutGB";
import Maps from "@/components/Maps";
import mapConfig from "@/static-data/mapConfig";
import calConfig from "@/static-data/calConfig";
import Calendar from "@/components/Calender";
import Carousel_UI from "@/components/ui/carousel";
import AppleCardsCarouselGB from "../apple_carousel_gb/page";

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
  title: `Go Biz | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function GoBizPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        {/* <Carousel_UI slides={slideData} /> */}
        <AppleCardsCarouselGB/>
        <AboutGB/>
          <Go_Biz />
          <Maps googleMapUrl={mapConfig.explore_map}/>
          {/* <Calendar /> */}
          <Support/>
        </div>
      </section>
    </>
  );
}
