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

const AppleCardsCarouselSO = () => {
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

export default AppleCardsCarouselSO;

const data = [
  {
    category: "Business Centers",
    title: "Serviced Offices",
    src: "https://i.postimg.cc/0ywR25cP/image-1.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Serviced Offices",
    src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Serviced Offices",
    src: "https://i.postimg.cc/yNhNxyv1/UdDTEeNg.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Serviced Offices",
    src: "https://i.postimg.cc/0Qc2d5Th/G-QP6d.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Serviced Offices",
    src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Serviced Offices",
    src: "https://i.postimg.cc/0Qc2d5Th/G-QP6d.jpg",
    content: null,
  },
];
