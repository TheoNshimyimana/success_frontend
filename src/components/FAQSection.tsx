import React from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What are your operating hours?",
    answer:
      "We’re open Monday–Friday 8:00 AM – 6:00 PM and Saturday 9:00 AM – 4:00 PM. Some services may have extended hours.",
  },
  {
    question: "How do I request a service?",
    answer:
      "You can request a service through our website form, visit us in person, or call us directly. We’ll respond within 24 hours.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept mobile money (MTN Money, Airtel Money), bank transfers, and cash payments.",
  },
  {
    question: "How much do training courses cost?",
    answer:
      "Course prices range from RWF 8,000 to RWF 40,000 depending on duration and level. Check our training page for details.",
  },
  {
    question: "Do you offer corporate training?",
    answer:
      "Yes! We offer customized training programs for organizations. Contact us for a quote.",
  },
];

 function FAQSection() {
  return (
    <div className="w-full px-6 bg-white md:px-12 lg:px-20 py-12 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Frequently Asked Questions
      </h2>
      <p className="text-gray-600 mt-2 text-center">
        Quick answers to common questions about our services.
      </p>

      <div className="mt-8 w-full max-w-3xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-slate-50 border border-gray-300 rounded-lg p-5 shadow-sm hover:shadow transition"
          >
            <h3 className="font-bold text-lg text-gray-800 mb-2">{faq.question}</h3>
            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQSection;