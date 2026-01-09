import { ReactNode } from "react";
import { Sparkles, Zap, Globe, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function ApproachAndAudienceSection() {
  const approachItems: { icon: ReactNode; label: string }[] = [
    {
      icon: <Sparkles className="h-7 w-7" />,
      label: "Practical & User-Focused",
    },
    {
      icon: <Zap className="h-7 w-7" />,
      label: "On-Demand Support",
    },
    {
      icon: <Globe className="h-7 w-7" />,
      label: "Digital-First",
    },
    {
      icon: <Lock className="h-7 w-7" />,
      label: "Transparent & Compliant",
    },
  ];

  const serveItems: string[] = [
    "Individuals & Households",
    "Youth & Job Seekers",
    "SMEs & Startups",
    "Traders & Informal Businesses",
    "Schools & Training Institutions",
    "NGOs & Community Organizations",
  ];

  return (
    <section className="w-full bg-white ">
      <div className="mx-auto max-w-6xl px-4">
        {/* Our Approach */}
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Our Approach
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {approachItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 transition hover:scale-105"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-900">
                {item.icon}
              </div>
              <p className="text-base font-medium text-slate-700">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Who We Serve */}
        <h2 className="mt-20 text-center text-3xl font-bold text-slate-900">
          Who We Serve
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-y-6 text-center sm:grid-cols-2 md:grid-cols-3">
          {serveItems.map((label, index) => (
            <p
              key={index}
              className="text-base font-medium text-slate-700 transition hover:text-emerald-600"
            >
              {label}
            </p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 p-10 text-center shadow-sm">
          <h3 className="text-2xl font-bold text-slate-900">
            Need Support?
          </h3>
          <p className="mx-auto text-base mt-4 mb-10 max-w-xl text-slate-600">
            We are here to help you save time, reduce complexity, and focus on
            what matters most.
          </p>
          <Link to="/contact" className="mt-10 rounded-xl bg-emerald-500 px-6 py-3 text-base font-bold text-white shadow transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-400">
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
