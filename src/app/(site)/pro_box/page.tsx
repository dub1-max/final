import Pro_Box from "@/components/Pro_Box";
import CarouselProBox from "@/components/CarouselProBox";
import { Metadata } from "next";
import Support from "@/components/Support";

const siteName = process.env.SITE_NAME;
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png"
  ];


export const metadata: Metadata = {
  title: `Pro Box | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function ProBoxPage() {
  return (
    <>
      <section className="pt-10">
        <div className="px-4 xl:container">
          <CarouselProBox autoSlide={true} autoSlideInterval={6000} slides={slides} />
          <Pro_Box />
          <Support/>
        </div>
      </section>
    </>
  );
}
