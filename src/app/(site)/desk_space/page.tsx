import AboutDeskSpace from "@/components/AboutDeskSpace";
import Desk_Space from "@/components/Desk_Space";
import FeaturesMeeting from "@/components/Home/FeaturesMeeting";
import Maps from "@/components/Maps";
import Support from "@/components/Support";
import mapConfig from "@/static-data/mapConfig";
import { Metadata } from "next";
import { AppleCardsCarouselDesk } from "../apple_carousel_desk/page";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Desk Space | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function DeskSpacePage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <AppleCardsCarouselDesk/>
          <AboutDeskSpace />
          {/** change this after */}
          <FeaturesMeeting />
          <Desk_Space />
          <Maps googleMapUrl={mapConfig.connectingmindsurl} />
          {/** change this after */}
          <Support />
        </div>
      </section>
    </>
  );
}
