import Link from "next/link";
import Features from "@/components/Home/Features";
import { Metadata } from "next";
const siteName = process.env.SITE_NAME;
import { pricingData } from "../../../stripe/pricingData";
import SectionTitle from "../Common/SectionTitle";
import SinglePricing from "./SinglePricing";
export default function Connecting_Minds() {
  return (
    <section id="support" className="pt-14 sm:pt-20 lg:pt-[0px]">
      <section id="pricing" className="pt-14 sm:pt-20 lg:pt-[130px]">
        <div className="px-4 xl:container">
          <SectionTitle
            mainTitle="PRICING PLANS"
            title="Affordable Pricing With Simple Plans"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus."
          />

          <div className="relative z-10 flex flex-wrap justify-center overflow-hidden rounded drop-shadow-light dark:drop-shadow-none">
            <div className="absolute left-0 top-0 -z-10 h-full w-full bg-noise-pattern bg-cover bg-center opacity-10 dark:opacity-40"></div>
            <div className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
              <svg
                width="1174"
                height="560"
                viewBox="0 0 1174 560"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4" filter="url(#filter0_f_41_257)">
                  <rect
                    x="450.531"
                    y="279"
                    width="272.933"
                    height="328.051"
                    fill="url(#paint0_linear_41_257)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_f_41_257"
                    x="0.531494"
                    y="-171"
                    width="1172.93"
                    height="1228.05"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feGaussianBlur
                      stdDeviation="225"
                      result="effect1_foregroundBlur_41_257"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_41_257"
                    x1="425.16"
                    y1="343.693"
                    x2="568.181"
                    y2="660.639"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#ABBCFF" />
                    <stop offset="0.859375" stopColor="#4A6CF7" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            {pricingData &&
              pricingData.map((price, key) => (
                <SinglePricing price={price} key={key} />
              ))}
          </div>
        </div>
      </section>
        <div>
       <section className="pt-10">
                  <div className="px-4 xl:container">
                    <Features />
                  </div>
                </section>
                </div>

      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            {/*       <div className="flex flex-wrap items-center border-b pb-14 dark:border-[#2E333D] lg:pb-0">
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16">
                  <span className="title !left-0 !translate-x-0">
                    {" "}
                    Connecting Minds{" "}
                  </span>
                  <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Connecting Minds
                  </h2>
                </div>
              </div>
            </div>*/}

        
            
             
            

        
          </div>
        </div>
      </div>
    </section>
  );
}
