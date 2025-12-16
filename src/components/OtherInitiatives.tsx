import React from "react";
import {
  HiOutlineUserGroup,
  HiOutlineBriefcase,
  HiOutlineDesktopComputer,
  HiOutlineCube,
} from "react-icons/hi";
import { Link } from "react-router-dom";

const OtherInitiatives: React.FC = () => {
  const items = [
    {
      title: "Agereyo Initiative",
      description:
        "Comprehensive youth empowerment program combining skills, entrepreneurship, and mentorship.",
      icon: <HiOutlineUserGroup className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Community Projects",
      description:
        "Strategic partnerships with schools, NGOs, and community organizations for digital transformation.",
      icon: <HiOutlineBriefcase className="w-6 h-6 text-green-600" />,
    },
    {
      title: "ICT Equipment Sales",
      description:
        "Quality computer equipment, peripherals, and maintenance services.",
      icon: <HiOutlineDesktopComputer className="w-6 h-6 text-green-600" />,
    },
    {
      title: "Custom Solutions",
      description:
        "Tailored digital solutions designed to meet specific organizational needs.",
      icon: <HiOutlineCube className="w-6 h-6 text-green-600" />,
    },
  ];

  return (
    <section className="px-6 md:px-20 py-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Other Programs
      </h2>

      <p className="text-gray-600 mb-10">
        Community-focused programs and strategic partnerships.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-xl hover:scale-105 cursor-pointer p-6 shadow-sm bg-white flex flex-col border border-gray-200 hover:shadow transition"
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

            {/* Button */}
            <Link to="/programs" className="mt-4 text-green-600 font-medium flex items-center gap-1 hover:underline">
              Request Service 
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OtherInitiatives;
