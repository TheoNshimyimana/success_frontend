import React from "react";

interface Step {
  number: number;
  title: string;
  text: string;
}

const steps: Step[] = [
  {
    number: 1,
    title: "Choose Course",
    text: "Select the course that matches your goals",
  },
  {
    number: 2,
    title: "Register",
    text: "Fill out the enrollment form with your details",
  },
  {
    number: 3,
    title: "Pay Fee",
    text: "Complete payment through mobile money or bank",
  },
  {
    number: 4,
    title: "Start Learning",
    text: "Attend your first class and begin your journey",
  },
];

const HowToEnroll: React.FC = () => {
  return (
    <>
      {/* Enrollment Section */}
      <section className="text-center bg-slate-100 py-16 px-4">
        <h2 className="text-3xl font-bold">How to Enroll</h2>
        <p className="mt-2 text-gray-600">
          Simple steps to get started with your training journey.
        </p>

        <div className="flex flex-wrap justify-center gap-16 mt-12">
          {steps.map((step) => (
            <div key={step.number} className="max-w-[200px] text-center">
              <div className="w-12 h-12 bg-teal-700 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="font-semibold text-lg">{step.title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0d7377] mb-10 text-white text-center py-28 px-4">
        <h2 className="text-4xl font-bold">
          Start Your Learning Journey Today
        </h2>
        <p className="mt-3 text-white/90">
          Invest in yourself and unlock new opportunities through quality
          training.
        </p>
        <button className="mt-6 bg-white text-sm text-teal-700 px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
          Browse All Courses →
        </button>
      </section>
    </>
  );
};

export default HowToEnroll;
