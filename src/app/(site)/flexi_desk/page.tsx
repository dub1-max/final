import Flexi_Desk from "@/components/Flexi_Desk";
import Maps from "@/components/Maps";
import Support from "@/components/Support";
import { Metadata } from "next";
import mapConfig from "@/static-data/mapConfig";
import FeaturesMeeting from "@/components/Home/FeaturesMeeting";
import AboutMeeting1 from "@/components/AboutMeeting1";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Flexi Desk | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function FlexiDeskPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <AboutMeeting1 />
          {/** change this after */}
          `<FeaturesMeeting />
          <Flexi_Desk />
          <Maps googleMapUrl={mapConfig.googleMapUrl1} />{" "}
          {/** change this after */}
          <Support />
        </div>
      </section>
    </>
  );
}
