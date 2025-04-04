"use client";

import { useState } from "react";

const warrantyTerms = [
  {
    title: "1. Warranty Coverage",
    content:
      "Our products come with a limited warranty that covers manufacturing defects. The warranty period varies based on the product category, ranging from 6 months to 2 years.",
  },
  {
    title: "2. Return Eligibility",
    content:
      "To be eligible for a return, the product must be unused, in its original packaging, and in the same condition as when it was received. Products marked as 'final sale' cannot be returned.",
  },
  {
    title: "3. Return Process",
    content:
      "To initiate a return, please contact our customer service team within 14 days of receiving the product. You’ll receive a return authorization and instructions for shipping.",
  },
  {
    title: "4. Refund Processing",
    content:
      "Once we receive the returned product, we will process the refund within 7-10 business days. Refunds will be issued via the original payment method.",
  },
  {
    title: "5. Exclusions & Limitations",
    content:
      "The warranty does not cover damages caused by misuse, accidents, or unauthorized repairs. Additionally, consumables such as batteries and accessories are not covered.",
  },
];

const WarrantyAndReturns = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen px-6 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">Warranty & Returns</h1>

        {warrantyTerms.map((term, index) => (
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
            We aim to provide hassle-free returns and reliable warranty service
            for your peace of mind. If you have questions, please reach out to
            our support team.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarrantyAndReturns;
