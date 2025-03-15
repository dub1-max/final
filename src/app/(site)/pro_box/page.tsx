import Pro_Box from "@/components/Pro_Box";
import CarouselProBox from "@/components/CarouselProBox";
import { Metadata } from "next";
import Support from "@/components/Support";
import calConfig from "@/static-data/calConfig";
import Calendar from "@/components/Calender";
import AboutPB from "@/components/AboutPB";
import mapConfig from "@/static-data/mapConfig";
import Maps from "@/components/Maps";
import Carousel_UI from "@/components/ui/carousel";



const siteName = process.env.SITE_NAME;
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png"
  ];

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
  title: `Pro Box | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ProBoxPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          {/* <CarouselProBox autoSlide={true} autoSlideInterval={6000} slides={slides} /> */}
          <Carousel_UI slides={slideData} />
          <AboutPB/>
          <Pro_Box />
          <Maps googleMapUrl={mapConfig.connectingmindsurl}/>
          <Calendar />
          <Support/>
        </div>
      </section>
    </>
  );
}
