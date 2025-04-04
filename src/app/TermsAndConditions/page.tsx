"use client";

import { useState } from "react";

const terms = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using our platform, you agree to be bound by these terms and conditions. If you do not agree, please refrain from using our services.",
  },
  {
    title: "2. Product Information",
    content:
      "We strive to ensure all product details, descriptions, and prices are accurate. However, errors may occur, and we reserve the right to correct them.",
  },
  {
    title: "3. Order Confirmation",
    content:
      "After placing an order, you will receive an order confirmation email. This does not signify our acceptance of your order, but a confirmation that we have received it.",
  },
  {
    title: "4. Return & Refund Policy",
    content:
      "You may request a return within 14 days of receiving your item. All returned items must be unused and in the same condition that you received them.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "We are not liable for any indirect, incidental, or consequential damages arising from the use of our platform or products.",
  },
];

const TermsAndConditions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Terms & Conditions
        </h1>

        {terms.map((term, index) => (
          <div
            key={index}
            className="mb-4 rounded-lg shadow-md bg-white overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full text-left px-6 py-4 font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              {term.title}
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-700 text-sm leading-relaxed">
                {term.content}
              </div>
            )}
          </div>
        ))}

        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>
            Thank you for choosing <strong>TechGear</strong>. We’re committed to
            delivering tech you trust and love.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
