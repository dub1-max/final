import Carousel from "@/components/Carousel";
import { Metadata } from "next";


const siteName = process.env.SITE_NAME;

const slides = [
"https://i.ibb.co/ncrXc2V/1.png",
"https://i.ibb.co/B3s7v4h/2.png",
"https://i.ibb.co/XXR8kzF/3.png"
];

export const metadata: Metadata = {
  title: `Connecting Minds | ${siteName}`,
  description: "This is Support page",
  // other metadata
};

export default function Homecarousel() {
  return (
    <>
      <section className="pt-10">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <meta name="algolia-site-verification"  content="3FC0994192AB0869" />
      <div style={{
        paddingTop: "80px"
      }}>
        <Carousel autoSlide={true} autoSlideInterval={6000} slides={slides} />
      </div>
      </section>
    </>
  );
}