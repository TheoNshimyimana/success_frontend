import { Code2, Users2, Zap, Target, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeServiceSection() {
  const services = [
    {
      icon: <Code2 className="text-green-600" size={40} />,
      title: "ICT Services",
      subtitle: "Tech Solutions",
      desc: "Technical support, device repair, and networking solutions for businesses.",
      background: "bg-[#EFF6FF]",
    },
    {
      icon: <Users2 className="text-green-600" size={40} />,
      title: "Digital Training",
      subtitle: "Skill Development",
      desc: "Smartphone literacy, computer skills, and corporate digital training programs.",
      background: "bg-[#FFF7ED]",
    },
    {
      icon: <Zap className="text-green-600" size={40} />,
      title: "Digital Transformation",
      subtitle: "Business Modernization",
      desc: "Software installation, cloud solutions, and business modernization.",
      background: "bg-[#EFF6FF]",
    },
    {
      icon: <Target className="text-green-600" size={40} />,
      title: "Youth Empowerment",
      subtitle: "Innovation Programs",
      desc: "Innovation programs and startup support for young entrepreneurs.",
      background: "bg-[#FFF7ED]",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-[#00485C]">Our Services</h2>

        <p className="text-gray-500 mt-3 text-lg max-w-2xl mx-auto">
          Comprehensive ICT solutions and digital empowerment programs tailored
          for your needs.
        </p>

        {/* SERVICE CARDS */}
        <Link to="/services">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 ">
            {services.map((srv, index) => (
              <div
                key={index}
                className={`border border-gray-200 rounded-xl hover:scale-105 p-6 text-left hover:shadow-lg transition ${srv.background}`}
              >
                <div className="size-20 p-2 flex items-center justify-center  rounded-lg mb-4">
                  {srv.icon}
                </div>

                <h3 className="font-bold text-xl text-[#00485C]">
                  {srv.title}
                </h3>
                <h3 className="font-semibold text-sm text-[#34888A] mt-4">
                  {srv.subtitle}
                </h3>

                <p className="text-gray-600 text-base leading-7 mt-3">
                  {srv.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-8 text-[#34888A] font-bold flex items-center  gap-1 hover:underline"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </section>
  );
}
