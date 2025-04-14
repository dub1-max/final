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
import AppleCardsCarouselPB from "../apple_carousel_pb/page";

const siteName = process.env.SITE_NAME;
export const metadata: Metadata = {
  title: `Pro Box | ${siteName}`,
  description: "This is Support page",
};

export default function ProBoxPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <AppleCardsCarouselPB/>
          <AboutPB />
          <Pro_Box />
          <Maps googleMapUrl={mapConfig.probox_map} />
          {/* <Calendar /> */}
          <Support />
        </div>
      </section>
    </>
  );
}
