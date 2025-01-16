"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import TabPanel from "./TabPanel";

const tabButtons = [
  {
    id: uuid(),
    title: "About Us",
    value: "about",
  },
  {
    id: uuid(),
    title: "Our Mission",
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
            title="MarinaPearl"
            image1="/images/about/image-1.jpg"
            image1Alt="About Image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="About Image 2"
          >
            <p className="mb-6 text-base text-dark-text">
              At <b>MarinaPearl</b>, we recognize that modern businesses need flexibility
              and professionalism in their work environments. Our business center is
              designed to meet the evolving needs of today&aposs entrepreneurs and companies.
            </p>
            <p className="mb-6 text-base text-dark-text">
              Located in the vibrant City Center SheikhZayed, our space offers a prime location for startups and established 
              enterprises alike. You&aposll find everything you need to thrive right at your doorstep.
            </p>
            <p className="text-base text-dark-text">
              Whether you're launching a new idea or managing an established business, <b>MarinaPearl</b> provides the perfect setting to help you succeed. Join us and elevate your work experience!
            </p>
          </TabPanel>
        )}

        {/* Mission Tab */}
        {activeTab === "mission" && (
          <TabPanel
            title="Why Choose MarinaPearl?"
            image1="/images/about/image-1.jpg"
            image1Alt="Mission Image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="Mission Image 2"
            leftContent
          >
            <p className="mb-6 text-base text-dark-text">
              <b>Flexibility:</b> We understand that flexibility is key in the business
              world. Choose a plan that suits your unique requirements, whether
              it&aposs a private office, virtual office, or a flexible desk.
              <br />
              <br />
              <b>State-of-the-Art Facilities:</b> Our business center is equipped with
              the latest technology, ergonomic furniture, and modern amenities
              to enhance your work experience.
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
            title="What is Our Vision in MarinaPearl?"
            image1="/images/about/image-1.jpg"
            image1Alt="Vision Image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="Vision Image 2"
          >
            <p className="mb-6 text-base text-dark-text">
              At <b>MarinaPearl</b>, our mission is to create vibrant and flexible
              workspaces that empower businesses in Dubai to flourish. We 
              are dedicated to cultivating a dynamic environment where entrepreneurs, 
              startups, and established enterprises can collaborate, innovate, and achieve 
              their goals. 
              <br />
              With state-of-the-art facilities and exceptional support, we strive 
              to inspire creativity and productivity right in the heart of the bustling City Center SheikhZayed. 
              Join us and elevate your business experience in one of the world&aposs most exciting cities!
            </p>
          </TabPanel>
        )}
      </div>
    </div>
  );
}
