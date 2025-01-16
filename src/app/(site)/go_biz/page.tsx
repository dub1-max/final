import CarouselGoBiz from "@/components/CarouselGoBiz";
import Go_Biz from "@/components/Go_Biz"
import { Metadata } from "next";
import Support from "@/components/Support";
import AboutGB from "@/components/AboutGB";

const siteName = process.env.SITE_NAME;
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png"
  ];

export const metadata: Metadata = {
  title: `Go Biz | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function GoBizPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
        <CarouselGoBiz autoSlide={true} autoSlideInterval={6000} slides={slides} />
        <AboutGB/>
          <Go_Biz />
          <Support/>
        </div>
      </section>
    </>
  );
}
