import { ArrowRight, User } from "lucide-react";
import Footer from "../components/Footer";
import { Users } from "lucide-react";
import { TbWorld } from "react-icons/tb";
import { FiUsers } from "react-icons/fi";
import { HiOutlineRocketLaunch } from "react-icons/hi2";
import { RiFlashlightLine } from "react-icons/ri";
import OurImpacts from "../components/OurImpacts";
import { Link } from "react-router-dom";

export default function ProgramsSection() {
  return (
    <>
      <section className="w-full bg-[#00485C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Programs
          </h1>
          <p className="max-w-2xl text-gray-200 text-base md:text-lg leading-relaxed">
            Innovation, youth empowerment, and community impact initiatives
            driving digital transformation.
          </p>
        </div>
      </section>
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-6">
          {/* ================= ROW 1 ================= */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <HiOutlineRocketLaunch
                  size={48}
                  className="text-white bg-green-700 p-2 rounded-md"
                />
                <div className=" mt-3">
                  <h3 className="text-2xl text-[#00485C] font-bold">
                    YES Program
                  </h3>
                  <p className="text-base text-green-700 font-semibold mb-4">
                    Youth Entrepreneurship & Startup Program
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Empowering young entrepreneurs with the skills, knowledge, and
                resources needed to launch and grow successful startups.
              </p>

              <ul className="list-disc list-inside text-base text-gray-700 space-y-0 mb-6">
                <li className="marker:text-green-700 marker:text-2xl">
                  Entrepreneurship training and mentorship
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Business plan development
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Access to funding opportunities
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Networking with industry experts
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Ongoing support and guidance
                </li>
              </ul>

              <button className="bg-[#41933A] font-bold text-white px-6 py-3 rounded-md flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            {/* IMAGE BLOCK */}
            <div className="h-[260px] bg-green-100 rounded-xl"></div>
          </div>

          {/* ================= ROW 2 ================= */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* IMAGE BLOCK */}
            <div className="h-[260px] bg-[#dbe6e8] rounded-xl"></div>

            {/* TEXT */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <TbWorld
                  size={52}
                  className="text-white bg-[#00485C] p-2 rounded-md"
                />
                <div className=" mt-3">
                  <h3 className="text-2xl text-[#00485C] font-bold">
                    Digital Accelerators
                  </h3>
                  <p className="text-base text-green-700 font-semibold mb-4">Rwanda Network</p>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-6">
                A comprehensive network designed to accelerate business growth
                through digital innovation and market expansion.
              </p>

              <ul className="list-disc list-inside text-base text-gray-700 space-y-0 mb-6">
                <li className="marker:text-green-700 marker:text-2xl">
                  Business acceleration programs
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Digital marketing training
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Market research and analytics
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Partnership opportunities
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Growth strategy development
                </li>
              </ul>

              <button className="bg-[#41933A] font-bold text-white px-6 py-3 rounded-md flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* ================= ROW 3 ================= */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* TEXT */}
            <div>
              ``
              <div className="flex items-center gap-3 mb-5">
                <FiUsers
                  size={52}
                  className="text-white bg-[#00664E] p-2 rounded-md"
                />
                <div className=" mt-3">
                  <h3 className="text-2xl text-[#00485C] font-bold">
                    Agereyo Initiatives
                  </h3>
                  <p className="text-base text-green-700 font-semibold mb-4">
                    Digital Literacy & Community Upliftment
                  </p>
                </div>
              </div>
              <p className="text-base text-green-700 font-semibold mb-4">
                Digital Literacy & Community Upliftment
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                Bridging the digital divide by providing comprehensive digital
                literacy training to underserved communities.
              </p>
              <ul className="list-disc list-inside text-base text-gray-700 space-y-0 mb-6">
                <li className="marker:text-green-700 marker:text-2xl">
                  Basic digital literacy programs
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Computer and smartphone training
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Internet safety and security
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Community workshops and events
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Inclusive digital access initiatives
                </li>
              </ul>
              <button className="bg-[#41933A] font-bold text-white px-6 py-3 rounded-md flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>

            {/* IMAGE BLOCK */}
            <div className="h-[260px] bg-green-100 rounded-xl"></div>
          </div>

          {/* ================= ROW 4 ================= */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* IMAGE BLOCK */}
            <div className="h-[260px] bg-[#dcebe6] rounded-xl"></div>

            {/* TEXT */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <RiFlashlightLine
                  size={52}
                  className="text-white bg-[#006051] p-2 rounded-md"
                />
                <div className=" mt-3">
                  <h3 className="text-2xl text-[#00485C] font-bold">
                    Smart Trade
                  </h3>
                  <p className="text-base text-green-700 font-semibold mb-4">
                    myAgereyo App for Digital Commerce
                  </p>
                </div>
              </div>

              <p className="text-base text-gray-700 leading-relaxed mb-6">
                A mobile platform enabling seamless digital trading and commerce
                for entrepreneurs and small businesses.
              </p>

              <ul className="list-disc list-inside text-base text-gray-700 space-y-0 mb-6">
                <li className="marker:text-green-700 marker:text-2xl">
                  Digital marketplace access
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Payment processing solutions
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Inventory management tools
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Customer analytics
                </li>
                <li className="marker:text-green-700 marker:text-2xl">
                  Business growth resources
                </li>
              </ul>

              <button className="bg-[#41933A] font-bold text-white px-6 py-3 rounded-md flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ___________________Imapacts_____________________ */}
      <OurImpacts />
      <section className="w-full bg-[#00485C] py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Join Our Programs?
          </h2>
          <p className="text-gray-200 mb-8">
            Take the first step towards digital transformation and
            entrepreneurial success.
          </p>

          <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal-900 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition">
            Get Started Today <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
