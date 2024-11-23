"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import SectionTitle from "../Common/SectionTitle";

interface CarouselProps {
  autoSlide?: boolean;
  autoSlideInterval?: number;
  slides: string[]; // Array of image URLs (strings)
}

export default function CarouselPrivateOffices({
  autoSlide = false,
  autoSlideInterval = 3000,
  slides,
}: CarouselProps) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval]);

  return (
    <div
      className="relative mx-auto overflow-hidden"
      style={{
        paddingTop: "5%",
        maxWidth: "90%", // Set carousel width to 80% of the screen
        
      }}
      
    >
      <a href="#carousel"></a>
      <SectionTitle
          mainTitle="PrivateOffices"
          title="Private Offices"
          paragraph=""
        />
      {/* Slider Container */}
      <div
      
        className="flex transition-transform duration-500 ease-out"
        style={{
          transform: `translateX(-${curr * 100}%)`, // Move to the current slide
          width: `${slides.length * 100}%`, // Adjust the container width based on number of slides
        }}
      >
        {slides.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: "100%" }} // Each slide takes full width
          >
            <img
            
              src={img}
              alt={`Slide ${index + 1}`}
              className="mx-auto h-[450px] w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-4"
      style={{
        paddingTop: "25%"
      }}
      >
        <button
          onClick={prev}
          className="rounded-full bg-white/90 p-0 text-gray-700 shadow-md hover:bg-gray-100 hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-white/90 p-0 text-gray-700 shadow-md hover:bg-gray-100 hover:scale-110 transition-transform duration-200 ease-in-out"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-2 left-0 right-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`h-1 w-1 rounded-full bg-white transition-all ${
                curr === i ? "p-1" : "bg-opacity-50"
              }`}
              onClick={() => setCurr(i)} // Allow clicking indicators to navigate
            />
          ))}
        </div>
      </div>
    </div>
  );
}
