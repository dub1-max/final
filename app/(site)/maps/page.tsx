import Maps from "@/components/Maps"
import mapConfig from "@/static-data/mapConfig";
import { Metadata } from "next";
//Map Component this is only for testing purpose
const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Maps | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function MeetingMainPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <Maps googleMapUrl={mapConfig.googleMapUrl1} />
        </div>
      </section>
    </>
  );
}
