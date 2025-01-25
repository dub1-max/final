import AboutCM from "@/components/AboutCM";
import Calendar from "@/components/Calender";
import Carousel from "@/components/Carousel";
import Connecting_Minds from "@/components/Connecting_Minds";
import Maps from "@/components/Maps";
import Support from "@/components/Support";
import calConfig from "@/static-data/calConfig";
import mapConfig from "@/static-data/mapConfig";
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png"
  ];
import { Metadata } from "next";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Connecting Minds | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ConnectingMindsPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <Carousel slides={slides}/>
          <AboutCM/>
          <Connecting_Minds />
          <Calendar googleCalenderUrl={calConfig.ConnectingMind}/>
          <Maps googleMapUrl={mapConfig.connectingmindsurl}/>
          <Support/>
        </div>
      </section>
    </>
  );
}
