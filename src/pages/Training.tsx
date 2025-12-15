import React from "react";
import { Users, Award, Clock } from "lucide-react";
import FeaturedCourses from "../components/FeaturedCourses";
import Footer from "../components/Footer";
import AlumniSuccess from "../components/AlumniSuccess";
import HowToEnroll from "../components/HowToEnroll";

interface FeatureItem {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureItem[] = [
  {
    icon: <Users className="w-6 h-6 text-emerald-600" />,
    title: "Expert Instructors",
    description:
      "Learn from experienced professionals with real-world expertise and passion for teaching.",
  },
  {
    icon: <Award className="w-6 h-6 text-emerald-600" />,
    title: "Certificates",
    description:
      "Earn recognized certificates upon completion to boost your career prospects.",
  },
  {
    icon: <Clock className="w-6 h-6 text-emerald-600" />,
    title: "Flexible Scheduling",
    description:
      "Classes scheduled at convenient times to fit your work and personal life.",
  },
];

function Training() {
  return (
    <>
      <div className="w-full bg-slate-100  px-0">
        {/* Header */}
        <div className="w-full bg-slate-100 mx-auto py-20 text-center mb-10">
          <h2 className="text-4xl font-bold mb-4">Training Programs</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empower yourself with essential digital and business skills through
            our comprehensive training programs.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="max-w-full mx-auto grid pt-16 bg-white grid-cols-1 md:grid-cols-3 gap-8 px-12 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-100 border border-gray-200 rounded-2xl shadow-sm p-6 text-center hover:shadow-md transition"
            >
              {/* Icon wrapper */}
              <div className="w-14 h-14 rounded-full bg-slate-200 flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold mb-5">{feature.title}</h3>
              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
          <FeaturedCourses />
          <AlumniSuccess />
          <HowToEnroll />
          <Footer />
          
    </>
  );
}

export default Training;
