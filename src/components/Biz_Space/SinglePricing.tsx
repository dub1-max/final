"use client";

import axios from "axios";
import SingleOffer from "./SingleOffer";

export default function SinglePricing({ price }: any) {
  const handleSubscription = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.post(
      "/api/payment",
      {
        priceId: price.id,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    window.location.assign(data);
  };

  return (
    <div
      className={`w-full sm:w-1/3 lg:w-1/3 ${price?.nickname === "Professional" ? "dark:border-[#2E333D] sm:border-l lg:border-x" : ""}`}
    >
      <div className="pb-20 pt-10 text-center">
        <div className="border-b dark:border-[#2E333D]">
          <h3 className="mb-2 font-heading text-3xl font-medium text-dark dark:text-white">
            {price?.nickname}
          </h3>
          <p className="pb-10 text-base text-dark-text">{price?.subtitle}</p>
        </div>
        <div className="border-b py-10 dark:border-[#2E333D]">
          <h3 className="mb-6 flex items-end justify-center pt-2 font-heading text-base font-medium text-dark dark:text-white">
            AED{" "}
            <sup className="-mb-2 text-[55px]">
              {" "}
              {price.unit_amount.toLocaleString("en-US", {
                currency: "AED",
              })}{" "}
            </sup>
            /month
          </h3>

          {/*           {/* <p className="mx-auto max-w-[300px] text-base text-dark-text">
            Lorem ipsum dolor sit ametion consectetur adipisc elit.
          </p> */}
        </div>
        <div className="space-y-4 px-6 pb-[60px] pt-10 text-left sm:px-10 md:px-8 lg:px-10 xl:px-20">
          {price?.nickname === "Starter" && (
            <>
              <SingleOffer text="24/7 access" status="inactive" />
              <SingleOffer
                text="Access to business support services"
                status="inactive"
              />
              <SingleOffer
                text="Access to the Open Coworking Lounges & Specialty Café"
                status="active"
              />
              <SingleOffer text="Access to Shared Spaces" status="active" />
              <SingleOffer
                text="Access to events and workshops"
                status="active"
              />
              <SingleOffer
                text="Discount to book resources & services"
                status="active"
              />
              <SingleOffer
                text="Dedicated local virtual phone at a cost"
                status="active"
              />
              <SingleOffer text="Secure & Unlimited Wifi" status="active" />
              <SingleOffer
                text="Beverages from our Specialty Café"
                status="active"
              />
              <SingleOffer
                text="Private storage space for rent at additional cost"
                status="active"
              />
            </>
          )}

          {price?.nickname === "Professional" && (
            <>
              <SingleOffer text="24/7 access" status="active" />
              <SingleOffer
                text="Access to business support services"
                status="active"
              />
              <SingleOffer
                text="Access to the Open Coworking Lounges & Specialty Café"
                status="active"
              />
              <SingleOffer text="Access to Shared Spaces" status="active" />
              <SingleOffer
                text="Access to events and workshops"
                status="active"
              />
              <SingleOffer
                text="Discount to book resources & services"
                status="active"
              />
              <SingleOffer
                text="Dedicated local virtual phone at a cost"
                status="active"
              />
              <SingleOffer text="Secure & Unlimited Wifi" status="active" />
              <SingleOffer
                text="Beverages from our Specialty Café"
                status="active"
              />
              <SingleOffer
                text="Private storage space for rent at additional cost"
                status="active"
              />
            </>
          )}

          {price?.nickname === "Business" && (
            <>
              <SingleOffer text="24/7 access" status="active" />
              <SingleOffer
                text="Access to business support services"
                status="active"
              />
              <SingleOffer
                text="Access to the Open Coworking Lounges & Specialty Café"
                status="active"
              />
              <SingleOffer text="Access to Shared Spaces" status="active" />
              <SingleOffer
                text="Access to events and workshops"
                status="active"
              />
              <SingleOffer
                text="Discount to book resources & services"
                status="active"
              />
              <SingleOffer
                text="Dedicated local virtual phone at a cost"
                status="active"
              />
              <SingleOffer text="Secure & Unlimited Wifi" status="active" />
              <SingleOffer
                text="Beverages from our Specialty Café"
                status="active"
              />
              <SingleOffer
                text="Private storage space for rent at additional cost"
                status="active"
              />
            </>
          )}
        </div>

        <button
          onClick={handleSubscription}
          className="inline-flex items-center rounded bg-blue-600 px-8 py-[14px] font-heading text-base text-white shadow-lg transition-all duration-200 hover:bg-blue-500 hover:shadow-md"
        >
          Join This Plan
          <span className="pl-3">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z"
                fill="white"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  );
}
