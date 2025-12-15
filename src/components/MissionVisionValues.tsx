import React from "react";
import { Target, Heart, Eye, ShieldCheck, Users } from "lucide-react";

export default function MissionVisionValues() {
  return (
    <>
      <section className="w-full bg-[#F5ECEE] py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Top Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#00485C]  mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-8">
                To empower communities through digital innovation, equitable
                access to ICT services, and practical youth skills development
                that drives sustainable economic growth.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#00485C]  mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-8">
                A digitally empowered Rwanda where every individual and business
                has equal access to skills, technology, and opportunities for
                success in the digital economy.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-[#00485C]  mb-3">
                Our Values
              </h3>
              <ul className="text-gray-600  space-y-2 border-gray-200">
                <li>✓ Innovation & Excellence</li>
                <li>✓ Integrity & Transparency</li>
                <li>✓ Empowerment & Impact</li>
                <li>✓ Community Focus</li>
              </ul>
            </div>
          </div>

          {/* Core Values */}
        </div>
      </section>
      <section className="bg-white py-10 px-4">
        <div className="text-center  items-center mb-10">
          <h2 className="text-4xl font-bold mb-3">Our Core Values</h2>
          <p className="text-gray-600 text-lg font-semibold">
            These principles guide every decision and action we take.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-10">
          <CoreValue
            icon={<Target />}
            title="Innovation"
            description="Constantly seeking new and better ways to solve problems and create value."
          />
          <CoreValue
            icon={<Heart />}
            title="Excellence"
            description="Committed to delivering the highest quality services and solutions."
          />
          <CoreValue
            icon={<Eye />}
            title="Integrity"
            description="Building trust through transparency, honesty, and ethical practices."
          />
          <CoreValue
            icon={<Target />}
            title="Empowerment"
            description="Enabling individuals and communities to reach their full potential."
          />
          <CoreValue
            icon={<Users />}
            title="Community Impact"
            description="Focused on creating positive, lasting change in the communities we serve."
          />
        </div>
      </section>
    </>
  );
}

function CoreValue({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-xl bg-gray-200 text-green-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-bold text-lg text-[#00485C] mb-2">{title}</h4>
      <p className="text-sm text-gray-600 leading-7">{description}</p>
    </div>
  );
}
