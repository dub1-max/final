import Marina_pearl from "@/components/Marina_pearl";
import { Metadata } from "next";
import CarouselMarina from "@/components/CarouselMarina";
import Support from "@/components/Support";
import AboutMP from "@/components/AboutMP";
import calConfig from "@/static-data/calConfig";
import Calendar from "@/components/Calender";
import Maps from "@/components/Maps";
import mapConfig from "@/static-data/mapConfig";

const siteName = process.env.SITE_NAME;
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
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
          <CarouselMarina
            autoSlide={true}
            autoSlideInterval={6000}
            slides={slides}
          />
          <AboutMP />
          <Marina_pearl />
          <Calendar />
          <Maps googleMapUrl={mapConfig.marinapearl_map}/>
          <Support />
        </div>
      </section>
    </>
  );
}
