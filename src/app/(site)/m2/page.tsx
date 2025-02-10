import M2_Portfolio from "@/components/Home/M2_Portfolio";
import Support from "@/components/Support";
import Maps from "@/components/Maps";
import mapConfig from "@/static-data/mapConfig";
import { Metadata } from "next";
import FeaturesMeeting from "@/components/Home/FeaturesMeeting";
import AboutMeeting2 from "@/components/AboutMeeting2";


const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `MeetingRoom | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function MeetingRooM2Page() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <M2_Portfolio/>
        <AboutMeeting2/>
        <FeaturesMeeting/>
        <Maps googleMapUrl={mapConfig.marinapearl_map} />
        
        <Support/>
        </div>
      </section>
    </>
  );
}
