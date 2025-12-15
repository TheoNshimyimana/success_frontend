import { Code2, Users2, Zap, Target } from "lucide-react";

export default function HomeServiceSection() {
  const services = [
    {
      icon: <Code2 className="text-green-600" size={28} />,
      title: "ICT Services",
      desc: "Technical support, device repair, and networking solutions for businesses.",
    },
    {
      icon: <Users2 className="text-green-600" size={28} />,
      title: "Digital Training",
      desc: "Smartphone literacy, computer skills, and corporate digital training programs.",
    },
    {
      icon: <Zap className="text-green-600" size={28} />,
      title: "Digital Transformation",
      desc: "Software installation, cloud solutions, and business modernization.",
    },
    {
      icon: <Target className="text-green-600" size={28} />,
      title: "Youth Empowerment",
      desc: "Innovation programs and startup support for young entrepreneurs.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* TITLE */}
        <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>

        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Comprehensive ICT solutions and digital empowerment programs tailored
          for your needs.
        </p>

        {/* SERVICE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((srv, index) => (
            <div
              key={index}
              className="border rounded-xl p-6 text-left hover:shadow-lg transition bg-white"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-green-100 rounded-lg mb-4">
                {srv.icon}
              </div>

              <h3 className="font-bold text-lg text-gray-800">{srv.title}</h3>

              <p className="text-gray-600 text-sm mt-2">{srv.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
