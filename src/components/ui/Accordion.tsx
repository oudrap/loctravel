"use client";

import React, { useState } from "react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = "" }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border border-slate-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/10 backdrop-blur-md rounded-2xl overflow-hidden transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-700"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 text-left font-semibold text-slate-800 dark:text-slate-100 hover:text-amber-600 dark:hover:text-amber-500 focus:outline-none transition-colors duration-200"
              aria-expanded={isOpen}
            >
              <span className="text-base md:text-lg">{item.question}</span>
              <span
                className={`ml-4 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-500 dark:text-slate-400 transition-transform duration-300 ${
                  isOpen ? "rotate-180 bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-500" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </span>
            </button>
            
            <div
              className={`transition-all duration-350 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[500px] opacity-100 border-t border-slate-100 dark:border-slate-900" : "max-h-0 opacity-0"
              }`}
            >
              <div className="p-5 text-slate-600 dark:text-slate-400 leading-relaxed text-sm md:text-base">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
