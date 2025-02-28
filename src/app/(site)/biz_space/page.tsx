import AboutBS from "@/components/AboutBS";
import Biz_Space from "@/components/Biz_Space";
import CarouselBizSpace from "@/components/CarouselBizSpace";
import Support from "@/components/Support";
import Calendar from "@/components/Calender";

import { Metadata } from "next";
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png"
  ];
const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Biz Space | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function BizSpacePage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <CarouselBizSpace autoSlide={true} autoSlideInterval={6000} slides={slides} />
          <AboutBS/>
          <Biz_Space />
          <Calendar/>
          <Support />  
        </div>
      </section>
    </>
  );
}
