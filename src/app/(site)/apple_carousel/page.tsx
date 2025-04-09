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

const AppleCardsCarouselDemo = () => {
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

export default AppleCardsCarouselDemo;

const data = [
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/0ywR25cP/image-1.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/yNhNxyv1/UdDTEeNg.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/0Qc2d5Th/G-QP6d.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://uc0f9d0e27987502d3ee64a8e143.previews.dropboxusercontent.com/p/thumb/ACly-GRPFyuGcw74WUf4S-JgDakvQKJScYApsAec1HsI_Tf4o8r7sFhyNuejZ0ByzBVeaVclas_Pbl7Y2QBm9dYUWC3V4xKh-vNoQzv6lk0sA2N5ir-UOi_0qYwKCHNRjlNbhnp8_njYAczFY4DcdBWQHamqwZtfg8XmzhF5PtO5ktNhYSWNXtWD5LQtE2THHsv-DJAu_MJtrB2dyhec-HqO1usvxF6_Kpw9-VF6eFr0_sxf6VVdfzwxQpEvCzhwjYWAsG_PbCUBeczqniEsg31v6isAnAY1DPCrxd-V8gml2gsN0e82mA_KjKMLj-BxPxBOMvYrLQpIYQd7AwxQvAHtqyBx-JTJPGqolNTZs7qQttoLfpqkuBvdHh-43OHwca2SLi-6GNjyyQEWSpgmzJGAXUvgTXDjprevm0h5RU0ivAm8yk19DTjE9GfaFhMMxJk0QLTv6l05T97rfvm-evK-u5fI72R1VMeGhpdYBLX3vB2SG0XD7nXuueytXYjOekUGpYRInsmIPpAdmwXjdAWH/p.jpeg",
    content: null,
  },
];
