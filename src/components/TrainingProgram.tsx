import React from "react";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineDesktopComputer,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const TrainingProgram: React.FC = () => {
  const programs = [
    {
      title: "Youth ICT & Digital Skills",
      description:
        "Comprehensive training in computer basics, internet usage, and digital literacy for youth.",
      icon: <HiOutlineUserGroup className="w-6 h-6 text-green-600" />,
      highlighted: false,
    },
    {
      title: "Entrepreneurship & Business Skills",
      description:
        "Business planning, financial management, and entrepreneurship development programs.",
      icon: <HiOutlineBriefcase className="w-6 h-6 text-green-600" />,
      highlighted: false, // blue border card
    },
    {
      title: "Life Skills Programs",
      description:
        "Personal development, communication, and professional skills training.",
      icon: <HiOutlineDesktopComputer className="w-6 h-6 text-green-600" />,
      highlighted: false,
    },
    {
      title: "Specialized Courses",
      description:
        "MS Office, Irembo navigation, mobile banking, and other specialized technical courses.",
      icon: <HiOutlineClipboardList className="w-6 h-6 text-green-600" />,
      highlighted: false,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      {/* Header */}
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Training Programs
      </h2>

      <p className="text-gray-600 mb-10">
        Empower yourself with essential digital and business skills.
      </p>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {programs.map((item) => (
          <div
            key={item.title}
            className={`rounded-xl p-6 shadow-sm bg-white hover:scale-105 cursor-pointer flex flex-col border transition
              ${
                item.highlighted
                  ? "border-teal-300 shadow-md"
                  : "border-gray-200 hover:shadow"
              }
            `}
          >
            {/* Icon + Title */}
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-gray-100 p-3 rounded-lg flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base flex-grow">
              {item.description}
            </p>

            {/* Request Link */}
            <Link to="/programs" className="mt-4 text-green-600 font-medium flex items-center gap-1 hover:underline">
              Request Service 
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrainingProgram;
