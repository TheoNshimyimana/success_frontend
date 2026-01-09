import {
  FaBriefcase,
  FaServer,
  FaGraduationCap,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import ApproachAndAudienceSection from "../components/ApproachAndAudienceSection";
import Footer from "../components/Footer";

const Services = () => {
  return (
    <>
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="mt-2 text-gray-600 font-semibold text-lg">
            Practical digital, administrative, and business support — made
            simple
          </p>

          {/* Intro Box */}
          <div className="mt-6 max-w-4xl font-semibold font-sans mx-auto border-3 border-gray-200 rounded-lg p-4 text-lg text-gray-600">
            At <span className="text-gray-900 font-bold">Success Tech Lab Ltd</span>, we provide practical digital,
            business, and public support services that help individuals,
            entrepreneurs, and organizations operate efficiently, comply with
            regulations, and grow in the digital economy.
          </div>

          {/* Services Grid */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business & Public Support */}
            <ServiceCard
              icon={<FaBriefcase />}
              title="Business & Public Support"
              description="One-stop support for administrative, government, education, and financial processes."
              items={[
                "Administrative Support",
                "Public Services & Document Facilitation",
                "Tax Advisory & Compliance (RRA – TIN)",
                "Business Registration & Regulatory Support",
                "Education Payments & School Services",
                "Fintech & Document Processing",
                "Financial Access & Payments Support",
                "Business Document Writing",
              ]}
              note="Note: We provide facilitation services and do not act as official representatives of government or financial institutions."
            />

            {/* ICT Services Center */}
            <ServiceCard
              icon={<FaServer />}
              title="ICT Services "
              description="Reliable and affordable ICT solutions for functional, secure, and efficient technology systems."
              items={[
                "Device Repair & Maintenance",
                "Network Infrastructure Setup (LAN & Wi-Fi)",
                "IT Support & Help Desk Services",
                "ICT Platform Integration",
                "Hardware & Software Troubleshooting",
              ]}
            />

            {/* Digital Training Center */}
            <ServiceCard
              icon={<FaGraduationCap />}
              title="Digital Training Center"
              description="Practical, hands-on digital skills training for all ages, focusing on real-life application."
              items={[
                "Smartphone Skills Training",
                "Computer Literacy Programs",
                "Advanced Digital Skills Training",
                "Digital Skills for SMEs & Staff",
                "Hands-on Learning Labs",
                "Customized Corporate Training",
              ]}
            />

            {/* Digital Transformation */}
            <ServiceCard
              icon={<FaRocket />}
              title="Digital Transformation"
              description="Supporting SMEs and organizations in adopting digital tools for improved efficiency and growth."
              items={[
                "Software Installation & Configuration",
                "Business Digital Solutions (POS, Inventory, Accounting)",
                "Cloud Systems Setup & Migration",
                "Digital Strategy Consulting",
                "SME Digital Readiness Assessment",
              ]}
            />
          </div>
        </div>
      </section>
      <ApproachAndAudienceSection />
      <Footer />
    </>
  );
};

const ServiceCard = ({
  icon,
  title,
  description,
  items,
  note,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: string[];
  note?: string;
}) => {
  return (
    <>
      <div className=" border-2 border-green-300 rounded-xl p-6 text-left hover:shadow-lg transition">
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-3 text-green-600 text-xl">
          {icon}
          <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        </div>

        <p className="text-lg leading-8 font-semibold text-gray-600 mb-4">
          {description}
        </p>

        {/* List */}
        <ul className="space-y-4 text-base font-semibold text-gray-700">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <FaCheckCircle className="text-green-500 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        {/* Note */}
        {note && (
          <p className="mt-4 text-sm leading-7 text-gray-500 italic">{note}</p>
        )}
      </div>
    </>
  );
};

export default Services;
