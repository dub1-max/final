import M3_Portfolio from "@/components/Home/M3_Portfolio";
import Support from "@/components/Support";
import Maps from "@/components/Maps";
import mapConfig from "@/static-data/mapConfig";
import { Metadata } from "next";
import FeaturesMeeting from "@/components/Home/FeaturesMeeting";
import AboutMeeting3 from "@/components/AboutMeeting3";


const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `MeetingRoom | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function MeetingRooM3Page() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <M3_Portfolio/>
        <AboutMeeting3/>
        <FeaturesMeeting/>
        <Maps googleMapUrl={mapConfig.marinapearl_map} />
        <Support/>
        </div>
      </section>
    </>
  );
}
