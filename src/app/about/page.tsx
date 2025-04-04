"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Empowering Your Tech Life ⚙️",
    description:
      "At TechGear, we celebrate the brilliance that powers your everyday tech needs. Join us on a journey of innovation and discovery.",
    img: "/ofo1.jpg",
    bg: "bg-gradient-to-r from-yellow-50 to-pink-50",
  },
  {
    id: 2,
    title: "Built for the Future 🚀",
    description:
      "TechGear is fueled by innovation and crafted with precision. Explore devices that elevate your lifestyle.",
    img: "/ofo2.jpg",
    bg: "bg-gradient-to-r from-pink-50 to-blue-50",
  },
  {
    id: 3,
    title: "Innovation at Every Turn 💡",
    description:
      "From the drawing board to your doorstep, our mission is to deliver top-tier electronics with purpose and style.",
    img: "/ofo3.jpg",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
  {
    id: 4,
    title: "Tech that Speaks to You 💬",
    description:
      "We believe technology should be personal. Dive into our curated selection designed just for you.",
    img: "/felix.jpg",
    bg: "bg-gradient-to-r from-blue-50 to-yellow-50",
  },
];

const About = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-24 mb-48">
      {/* SLIDESHOW SECTION */}
      <div className="relative h-[calc(100vh-80px)] overflow-hidden">
        <div
          className="w-max h-full flex transition-all ease-in-out duration-1000"
          style={{ transform: `translateX(-${current * 100}vw)` }}
        >
          {slides.map((slide) => (
            <div
              className={`${slide.bg} w-screen h-full flex flex-col xl:flex-row relative items-center justify-center`}
              key={slide.id}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={slide.img}
                    alt="TechGear"
                    fill
                    sizes="100%"
                    className="object-fill brightness-100"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>
              </div>

              <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white px-6 py-3 rounded-md text-center">
                <h1 className="text-3xl lg:text-4xl 2xl:text-6xl font-semibold">
                  {slide.title}
                </h1>
                <h2 className="text-lg lg:text-xl 2xl:text-2xl max-w-2xl">
                  {slide.description}
                </h2>
                <p className="text-sm">- With pride from the TechGear Team</p>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute left-1/2 bottom-8 flex gap-4 transform -translate-x-1/2">
          {slides.map((_, index) => (
            <div
              className={`w-3 h-3 rounded-full ring-1 ring-gray-200 cursor-pointer flex items-center justify-center ${
                current === index ? "scale-150" : ""
              }`}
              key={index}
              onClick={() => setCurrent(index)}
            >
              {current === index && (
                <div className="w-[6px] h-[6px] bg-gray-200 rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ABOUT US SECTION */}
      <section className="py-16 px-6 lg:px-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800">About TechGear</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
          TechGear is your one-stop electronics shop, built to provide premium
          gadgets, accessories, and home tech solutions. We aim to redefine
          shopping with simplicity, trust, and cutting-edge innovation.
        </p>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="py-16 px-6 lg:px-20 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800">🌍 Our Mission</h3>
          <p className="mt-4 text-gray-600">
            To make advanced electronics accessible, affordable, and reliable
            for everyone—delivered with a touch of tech brilliance.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800">🚀 Our Vision</h3>
          <p className="mt-4 text-gray-600">
            To lead the tech retail space with innovation, superior service, and
            a community-first mindset.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h3 className="text-2xl font-bold text-gray-800">💡 Core Values</h3>
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>✅ Customer-Centricity</li>
            <li>✅ Tech Excellence</li>
            <li>✅ Integrity & Innovation</li>
            <li>✅ Sustainability & Community</li>
          </ul>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section className="py-16 px-6 lg:px-20 text-center bg-gray-100">
        <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Our passionate tech enthusiasts drive the innovation behind TechGear.
          With a shared commitment to excellence, we bring ideas to life—one
          gadget at a time.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="relative bg-white shadow-lg rounded-xl overflow-hidden w-64 h-80">
            <Image
              src="/ofo1.jpg"
              alt="Team Member"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white text-center">
              <h4 className="text-lg font-semibold">Peter Ofori</h4>
              <p className="text-sm">CEO</p>
            </div>
          </div>

          <div className="relative bg-white shadow-lg rounded-xl overflow-hidden w-64 h-80">
            <Image
              src="/felix.jpg"
              alt="Team Member"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-white text-center">
              <h4 className="text-lg font-semibold">Felix Best</h4>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US? */}
      <section className="py-16 px-6 lg:px-20 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800">
          Why Choose TechGear?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Thousands trust TechGear for unbeatable tech value, fast delivery, and
          reliable support. Here's what sets us apart.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              ⚡ Fast Shipping
            </h3>
            <p className="mt-2 text-gray-600">
              Get your gear quickly with our nationwide express delivery.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              🛡️ Trusted Quality
            </h3>
            <p className="mt-2 text-gray-600">
              Top-tier electronics sourced from reputable manufacturers.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">
              🤝 Support You Can Count On
            </h3>
            <p className="mt-2 text-gray-600">
              24/7 assistance from real humans who care.
            </p>
          </div>
        </div>
      </section>

      {/* CUSTOMER TESTIMONIALS */}
      <section className="py-16 px-6 lg:px-20 text-center bg-gray-50">
        <h2 className="text-4xl font-bold text-gray-800">
          What Our Customers Say
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Real feedback from people who made the smart choice with TechGear.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-xl p-6 text-left">
            <p className="text-gray-600">
              "Super fast delivery and amazing customer support. I’m never
              buying tech anywhere else!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">– Nana B.</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-left">
            <p className="text-gray-600">
              "Their prices are competitive and I love the sleek design of their
              gadgets."
            </p>
            <p className="mt-4 font-semibold text-gray-800">– Aisha K.</p>
          </div>

          <div className="bg-white shadow-lg rounded-xl p-6 text-left">
            <p className="text-gray-600">
              "I ordered a smart TV and it came in 2 days. Super impressed with
              the service!"
            </p>
            <p className="mt-4 font-semibold text-gray-800">– Kojo M.</p>
          </div>
        </div>
      </section>

      {/* Sustainability Commitment */}
      <section className="py-16 px-6 lg:px-20 text-center bg-white">
        <h2 className="text-4xl font-bold text-gray-800">
          Sustainability Commitment
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          At TechGear, we believe in responsible tech. We're working to reduce
          e-waste and support ethical production practices.
        </p>

        <div className="mt-12 flex flex-col md:flex-row justify-center gap-8">
          <div className="bg-green-100 p-6 rounded-xl shadow-md max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              ♻️ E-Waste Programs
            </h3>
            <p className="text-gray-600 mt-2">
              Drop off your old tech and let us recycle it responsibly.
            </p>
          </div>

          <div className="bg-green-100 p-6 rounded-xl shadow-md max-w-sm">
            <h3 className="text-xl font-semibold text-gray-800">
              🌍 Eco-Conscious Packaging
            </h3>
            <p className="text-gray-600 mt-2">
              We’re transitioning to sustainable, biodegradable packaging
              materials.
            </p>
          </div>
        </div>
      </section>

      {/* Closing Thank You Section */}
      <section className="py-16 px-6 lg:px-20 text-center bg-gradient-to-r from-yellow-50 to-pink-50">
        <h2 className="text-4xl font-bold text-gray-800">
          Thank You for Choosing TechGear 💖
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          We’re beyond grateful to have you as part of our growing TechGear
          family. Your trust drives our passion to innovate, create, and serve
          better every day.
        </p>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          We hope you absolutely love your new gadget—and we can’t wait to see
          you again soon!
        </p>
        <p className="mt-6 text-sm text-gray-600">
          Stay curious. Stay connected. Stay Techy ✨
        </p>
      </section>
    </div>
  );
};

export default About;
