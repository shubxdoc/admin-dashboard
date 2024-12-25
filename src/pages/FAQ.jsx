import { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for building custom designs quickly and efficiently.",
    },
    {
      question: "How do I install Tailwind?",
      answer:
        "You can install Tailwind CSS via npm or Yarn and configure it with your project.",
    },
    {
      question: "Is Tailwind free to use?",
      answer: "Yes, Tailwind CSS is open-source and free to use.",
    },
  ];

  return (
    <div className="max-w-3xl p-4 mx-auto mt-10">
      <h1 className="mb-8 text-3xl font-bold text-center">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between w-full p-4 text-lg font-medium text-left bg-gray-100 hover:bg-gray-200"
            >
              <span>{faq.question}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`w-6 h-6 transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="p-4 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
