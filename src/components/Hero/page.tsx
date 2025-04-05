"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  {
    src: "/ofo1.jpg",
    message: "Welcome to TechGear – Your One-Stop Electronics Store",
  },
  {
    src: "/techgear4.jpg",
    message: "Discover the Latest Gadgets at Unbeatable Prices",
  },
  
  {
    src: "/techgear2.jpg",
    message: "Power Your Productivity with Our Desktops",
  },
  { src: "/techgear5.jpg", message: "Experience Immersive Audio at TechGear" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-4 lg:px-16 mt-2">
      {/* Slider Section */}
      <div className="relative w-full h-[500px] overflow-hidden rounded-xl">
        {/* Image Slider Section with Transition */}
        <Image
          src={slides[current].src}
          alt={`Slide ${current + 1}`}
          fill
          className="rounded-xl object-cover transition-all duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-center">
            {slides[current].message}
          </h2>
          <Link
            href="/shop"
            className="bg-white text-black px-6 py-2 text-sm rounded-full hover:bg-gray-200 transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Dots for Carousel */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
                current === index
                  ? "bg-white scale-110"
                  : "bg-gray-400 scale-90"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Side Promos */}
      <div className="flex flex-col gap-4 h-[500px]">
        {/* Top Promo */}
        {/* Top Promo - Discounts */}
        <div className="relative flex-1 overflow-hidden rounded-xl">
          <Image
            src="/hero3.png"
            alt="TechGear Discounts"
            fill
            className="rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6">
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Hot Deals & Discounts – Only at TechGear!
            </h3>
            <p className="text-sm text-center">
              Grab up to 50% off on selected electronics today!
            </p>
          </div>
        </div>

        {/* Bottom Promo */}
        <div className="relative flex-1 overflow-hidden rounded-xl">
          <Image
            src="/techgear6.jpg"
            alt="Discover New Tech"
            fill
            className="rounded-xl object-fit"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white p-6">
            <h3 className="text-2xl font-semibold mb-2 text-center">
              Discover New Tech Every Day at TechGear
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
