import AboutCM from "@/components/AboutCM";
import Calendar from "@/components/Calender";
import Carousel from "@/components/Carousel";
import Connecting_Minds from "@/components/Connecting_Minds";
import Maps from "@/components/Maps";
import Support from "@/components/Support";
import Carousel_UI from "@/components/ui/carousel";
import calConfig from "@/static-data/calConfig";
import mapConfig from "@/static-data/mapConfig";
// const slides = [
//   "https://i.ibb.co/ncrXc2V/1.png",
//   "https://i.ibb.co/B3s7v4h/2.png",
//   "https://i.ibb.co/XXR8kzF/3.png"
// ];
import { Metadata } from "next";
import AppleCardsCarouselCM from "../apple_carousel_cm/page";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Connecting Minds | ${siteName}`,
  description: "This is Support page",
  // other metadata
};
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
export default function ConnectingMindsPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          {/* <Carousel slides={slides}/> */}
          {/* <Carousel_UI slides={slideData} /> */}
          <AppleCardsCarouselCM/>
          <AboutCM />
          <Connecting_Minds />
          <Maps googleMapUrl={mapConfig.connectingmindsurl} />
          {/* <Calendar /> */}
          <Support/>
        </div>
      </section>
    </>
  );
}
