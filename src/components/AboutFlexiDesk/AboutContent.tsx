"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import TabPanel from "./TabPanel";

const tabButtons = [
  {
    id: uuid(),
    title: "Flexi Desk",
    value: "about",
  },
  {
    id: uuid(),
    title: "Benefits",
    value: "mission",
  },
  {
    id: uuid(),
    title: "Our Vision",
    value: "vision",
  },
];

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState<string>(tabButtons[0].value);

  return (
    <div>
      {/* Tab Buttons */}
      <div className="tabButtons flex w-full items-center justify-around">
        {tabButtons.map((tabButton) => (
          <button
            key={tabButton.id}
            onClick={() => setActiveTab(tabButton.value)}
            className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${
              activeTab === tabButton.value
                ? "border-primary text-primary dark:border-primary"
                : "hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary"
            }`}
          >
            {tabButton.title}
          </button>
        ))}
      </div>

      {/* Tab Panels */}
      <div className="w-full">
        {/* About Tab */}
        {activeTab === "about" && (
          <TabPanel
            title="Experience Luxury: Flexi Desk Rentals"
            image1="/images/about/image-1.jpg"
            image1Alt="About Image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="About Image 2"
          >
            <p className="mb-6 text-base text-dark-text">
            Elevate your corporate image and leave a lasting impression with our cutting-edge meeting rooms! Designed to exude sophistication and luxury, our spaces are fully equipped and perfect for private meetings, powerful presentations, engaging training sessions, VIP gatherings, exclusive events, 
            </p>
            <p className="mb-6 text-base text-dark-text">
            and more – all starting at just AED 165??/hour.
            </p>
            <p className="text-base text-dark-text">
            Enjoy the flexibility to book by the hour or the day, tailored to your specific business needs, and choose from a wide array of options to suit your requirements!
            </p>
          </TabPanel>
        )}

        {/* Mission Tab */}
        {activeTab === "mission" && (
          <TabPanel
            title="Benefits Of Renting A Flexi Desk"
            image1="/images/about/image-1.jpg"
            image1Alt="Mission Image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="Mission Image 2"
            leftContent
          >
            <p className="mb-6 text-base text-dark-text">
              <b> Professional Reception:</b> Our welcoming team is dedicated to making your guests feel at
               home from the moment they arrive.
              <br />
              <br />
              <b>State-of-the-Art Facilities:</b> Our business center is equipped with
              the latest technology, ergonomic furniture, and modern amenities
              to enhance your work experience.
              <br />
              <br />
              <b>Effortless Booking:</b> Choose the booking option that suits your schedule, whether by the hour or for the entire day.
              <br />
              <br />
              <b>Professional Support:</b> Our dedicated team is committed to
              providing excellent customer service. From administrative
              assistance to technical support, we&aposve got you covered.
            </p>
          </TabPanel>
        )}

        {/* Vision Tab */}
        {activeTab === "vision" && (
          <TabPanel
            title="What&aposs Our Vision in BusinessCentre?"
            image1="/images/about/image-1.jpg"
            image1Alt="Vision Image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="Vision Image 2"
          >
            <p className="mb-6 text-base text-dark-text">
              At <b>BusinessCentre</b>, our mission is to create vibrant and flexible
              workspaces that empower businesses in Dubai to flourish. We 
              are dedicated to cultivating a dynamic environment where entrepreneurs, 
              startups, and established enterprises can collaborate, innovate, and achieve 
              their goals. 
              <br />
              With state-of-the-art facilities and exceptional support, we strive 
              to inspire creativity and productivity right in the heart of the bustling City Center Deira. 
              Join us and elevate your business experience in one of the world&aposs most exciting cities!
            </p>
          </TabPanel>
        )}
      </div>
    </div>
  );
}
