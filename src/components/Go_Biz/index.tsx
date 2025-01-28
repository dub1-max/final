import Link from "next/link";
import Features from "@/components/Home/Features";
import { Metadata } from "next";
const siteName = process.env.SITE_NAME;
import { pricingData } from "../../../stripe/pricingData";
import SectionTitle from "../Common/SectionTitle";
import SinglePricing from "./SinglePricing";

export default function Go_Biz() {
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
    <section className="pt-10">
        <div className="px-4 xl:container">
          <Features />
        </div>
      </section>
  <br />
      <div className="px-4 xl:container">
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 xl:w-10/12">
            {/*<div className="flex flex-wrap items-center border-b pb-14 dark:border-[#2E333D] lg:pb-0">
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16">
                  <span className="title !left-0 !translate-x-0">  Go Biz  </span>
                  <h2 className="mb-5 font-heading text-3xl font-semibold text-dark dark:text-white sm:text-4xl md:text-[50px] md:leading-[60px]">
                    Go Biz 
                  </h2>
                </div>
              </div>
              
            </div>*/}


            {/*<div className="pt-12 text-center">
          <h3 className="mb-5 font-heading text-xl font-medium text-dark dark:text-white sm:text-3xl">
            Looking for a company solution?
          </h3>
          <Link
            href="/support"
            className="text-base text-dark-text underline-offset-2 duration-200 hover:text-primary hover:underline"
          >
            Contact our team to get a quote.
          </Link>
        </div>*/}

           {
  
    

            

            /* Google Maps embed }
            <div
              style={{
                width: "100%",
                height: "60vh",
                borderRadius: "8px",
                boxShadow: "0 4px 10px rgba(51, 46, 61, 0.9)",
                overflow: "hidden",
                marginTop: "2rem",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462584.1829708639!2d54.734569013372756!3d25.070058956600107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d1d3952d687%3A0x7d5552441e4521d6!2sGO%20BIZ%20BUSINESS%20CENTER!5e0!3m2!1sen!2sin!4v1728818638029!5m2!1sen!2sin"    
                style={{ width: "100%", height: "100%", border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* Contact Information */}
           
          </div>
        </div>

      </div>
    </section>
  );
}
