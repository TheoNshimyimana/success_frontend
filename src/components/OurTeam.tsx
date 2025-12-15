import React from "react";

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  description: string;
}

const team: TeamMember[] = [
  {
    initials: "JM",
    name: "John Mutesi",
    role: "Founder & CEO",
    description: "Visionary leader with 15+ years of ICT experience",
  },
  {
    initials: "SN",
    name: "Sarah Nkosi",
    role: "Head of Operations",
    description: "Operations expert ensuring seamless service delivery",
  },
  {
    initials: "PK",
    name: "Peter Kagame",
    role: "Head of Training",
    description: "Education specialist designing impactful programs",
  },
  {
    initials: "GU",
    name: "Grace Uwimana",
    role: "Community Manager",
    description: "Passionate about community engagement and impact",
  },
];

export default function OurTeam() {
  return (
    <section className="w-full bg-[#F5ECEE] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-[#00485C]">
            Our Team
          </h2>
          <p className="text-gray-600">
            Meet the talented professionals driving our mission forward.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl shadow-md overflow-hidden text-center"
            >
              {/* Avatar Header */}
              <div className="bg-[#B3D3C9] h-36 flex items-center justify-center">
                <div className="w-20 h-20 text-3xl rounded-full bg-green-700 text-white font-bold flex items-center justify-center">
                  {member.initials}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-semibold text-lg text-teal-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-700 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
