import AboutPrivate from "@/components/AboutPrivate";
import CarouselPrivateOffices from "@/components/CarouselPrivateOffices";
import Private_Offices from "@/components/Private_Offices";
import Support from "@/components/Support";
import { Metadata } from "next";
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
];

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Private Offices | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function PrivateOfficesPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <CarouselPrivateOffices
            autoSlide={true}
            autoSlideInterval={6000}
            slides={slides}
          />
          <AboutPrivate />
          <Private_Offices />
          <Support />
        </div>
      </section>
    </>
  );
}
