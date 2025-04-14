import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Carousel | ${siteName}`,
  description: "",
};

const AppleCardsCarouselPB = () => {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <SectionTitle
        mainTitle="PORTFOLIO"
        title="Gallery, Previews and Portfolio"
        paragraph=""
      />
      <div>
        <Carousel items={cards} />
      </div>
    </div>
  );
};

export default AppleCardsCarouselPB;
const data = [
  {
    category: "Business Centers",
    title: "ProBox",
    src: "https://i.postimg.cc/vZ8NCvn7/DSC08361.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "ProBox",
    src: "https://i.postimg.cc/3rpVGN7G/DSC08383.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "ProBox",
    src: "https://i.postimg.cc/Qx3PJDxy/DSC08387.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "ProBox",
    src: "https://i.postimg.cc/MKmLsLnK/DSC08471.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "ProBox",
    src: "https://i.postimg.cc/y8fbKShM/DSC08857.jpg",
    content: null,
  },
];
