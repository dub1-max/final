import Carousel from "@/components/Carousel";
import Connecting_Minds from "@/components/Connecting_Minds";
import Support from "@/components/Support";
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
          <Connecting_Minds />
          <Support/>
        </div>
      </section>
    </>
  );
}
