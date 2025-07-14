"use client";
import Image from "next/image";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "What is Frontend Mentor, and how will it help me?",
      answer:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    },
    {
      question: "Can I use Frontend Mentor projects in my portfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    },
    {
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-pink-50 p-4 flex items-center justify-center  relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/3 z-0">
        <Image
          src="/images/background-pattern-desktop.svg"
          alt="Background pattern"
          fill
          className="object-cover hidden md:block"
        />
        <Image
          src="/images/background-pattern-mobile.svg"
          alt="Background pattern"
          fill
          className="object-cover md:hidden"
        />
      </div>

      <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-2xl w-full z-10 relative mt-20 md:mt-0">
        <div className="flex items-center gap-6 mb-8">
          <Image
            src="/images/icon-star.svg"
            alt="Star icon"
            width={40}
            height={41}
            className="w-8 h-8 md:w-10 md:h-10"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">FAQs</h1>
        </div>

        <div className="space-y-0">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                className="w-full flex justify-between items-center gap-6 text-left py-6 group"
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-${index}`}
              >
                <h2 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors text-lg leading-tight">
                  {faq.question}
                </h2>
                <div className="flex-shrink-0">
                  {activeIndex === index ? (
                    <Image
                      src="/images/icon-minus.svg"
                      alt="Collapse"
                      width={30}
                      height={31}
                      className="w-7 h-7 cursor-pointer"
                    />
                  ) : (
                    <Image
                      src="/images/icon-plus.svg"
                      alt="Expand"
                      width={30}
                      height={31}
                      className="w-7 h-7 cursor-pointer"
                    />
                  )}
                </div>
              </button>
              <div
                id={`faq-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100 pb-6"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-500 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
