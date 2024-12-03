import M1_Portfolio from "@/components/Home/M1_Portfolio";
import Support from "@/components/Support";
import Maps from "@/components/Maps";
import mapConfig from "@/static-data/mapConfig";
import { Metadata } from "next";
import FeaturesMeeting from "@/components/Home/FeaturesMeeting";
import AboutMeeting1 from "@/components/AboutMeeting1";


const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `MeetingRoom | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function MeetingRoom1Page() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <M1_Portfolio/>
        <AboutMeeting1/>
        <FeaturesMeeting/>
        <Maps googleMapUrl={mapConfig.googleMapUrl1} />
        <Support/>
        </div>
      </section>
    </>
  );
}
