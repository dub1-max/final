
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { Metadata } from "next";
import SectionTitle from "@/components/Common/SectionTitle";

const siteName = process.env.SITE_NAME;

export const metadata: Metadata = {
  title: `Carousel | ${siteName}`,
  description: "",
  // other metadata
};

export function AppleCardsCarouselDemo() {
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

      <Carousel items={cards} />
    
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            {/* <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            /> */}
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Business Centers",
    title: "Connecting Minds", src: "https://i.postimg.cc/0ywR25cP/image-1.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds", src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds", src: "https://i.postimg.cc/yNhNxyv1/UdDTEeNg.jpg",
    content: null,
  },

  {
    category: "Business Centers",
    title: "Connecting Minds", src: "https://i.postimg.cc/0Qc2d5Th/G-QP6d.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds", src: "https://i.postimg.cc/K8MjS2Tg/gk-v1SqN.jpg",
    content: null,
  },
  {
    category: "Business Centers",
    title: "Connecting Minds",
    src: "https://ucf9f471342ee46080115d3ff424.previews.dropboxusercontent.com/p/thumb/ACmxq9dDKiYi8vE6hCqq9rfCNCCSohnc1w2X7bxUI5s5OHzZU44g2_K9nc1KL2Knpy2srvgHvLQFhbUd8UnSLStdKXdxiHnZWTggpx7wsuV0sl6Bfg7gUaMFqPBMxkR16aCuvUfJzdM2izjN402T8ouyCSTHK-NAeapIdm99PCfkhdD_3HsXvZQU0rwSkrW0w0-qLJ7-Z77oP4cwVd9rCraTKJVuy8BjhsaPfpIrb52QZgYAGQ71lkjO_LpGD-XaU8wBwu21aNrBHr-Zr5NWbMcmKAL00Dh2tPVTccjCVThp9nsjI3Wb1GA9pphGszhSX0T2pfv_iompma45_dkIS9WIaSGSUWSmLkUAl5h7p7nMBkady4qe2TZe_ciqeO7pTQNdWez_w_oW1hrlAkegczIGOa7HjZnsMSKOHDVWcsu56wiwaLn3zGq3KcJCdhp3HBPzknUqpqh442MgNBTnWq_DPJX695g1GWj3il_KuYvV2dbUv5zZAVq3aUtyDJdzMHUem1vPR0OGfLwSqsN4vg4-jFDj_bLynEQ67x5p0i_9Og/p.jpeg",
    content: null,
  },
];
