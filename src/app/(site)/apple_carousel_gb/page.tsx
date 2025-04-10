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

const AppleCardsCarouselGB = () => {
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

export default AppleCardsCarouselGB;
const data = [
  {
    category: "Business Centers",
    title: "GoBiz",
    src: "https://i.postimg.cc/1tLxQNSm/DSC08844.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "GoBiz",
    src: "https://i.postimg.cc/sDYkkXNz/DSC08857.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "GoBiz",
    src: "https://i.postimg.cc/h4dW0M8f/DSC08870.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "GoBiz",
    src: "https://i.postimg.cc/2yvs88j4/DSC08986.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "GoBiz",
    src: "https://i.postimg.cc/NfvhCTbb/DSC08992.jpg",
    content: null,
  },
];
