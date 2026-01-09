import Footer from "../components/Footer";
import OurImpacts from "../components/OurImpacts";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { programIcons } from "../utils/ProgramIcons";

interface Program {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  themeColor: string;
  ctaText: string;
  ctaLink: string;
  imagePosition: "left" | "right";
}

interface Enrollment {
  _id: string;
  program: {
    _id: string;
  };
  status: "pending" | "approved" | "rejected";
}

export default function ProgramsSection() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loadingEnroll, setLoadingEnroll] = useState<string | null>(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  /* ================= FETCH PROGRAMS ================= */
  useEffect(() => {
    axios
      .get("https://success-backnd.onrender.com/api/programs")
      .then((res) => setPrograms(res.data))
      .catch(console.error);
  }, []);

  /* ================= FETCH USER ENROLLMENTS ================= */
  useEffect(() => {
    if (!token) return;

    axios
      .get("https://success-backnd.onrender.com/api/enrollments/my", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setEnrollments(res.data))
      .catch(console.error);
  }, [token]);

  /* ================= ENROLL ================= */
  const handleEnroll = async (programId: string) => {
    if (!token) {
      // redirect to login with return URL
      navigate(`/login?redirect=/programs/${programId}/enroll`);
      return;
    }

    try {
      setLoadingEnroll(programId);

      await axios.post(
        "https://success-backnd.onrender.com/api/enrollments",
        { programId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // Refresh enrollments
      const res = await axios.get("https://success-backnd.onrender.com/api/enrollments/my", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setEnrollments(res.data);

      // Show toast for staff approval
      toast.success(
        "Thank you! Your enrollment has been submitted successfully, and our staff will be in touch with you shortly."
      );
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Enrollment failed");
    } finally {
      setLoadingEnroll(null);
    }
  };

  /* ================= HELPERS ================= */
  const getEnrollmentStatus = (programId: string) => {
    return enrollments.find((e) => e.program._id === programId)?.status;
  };

  /* ================= UI ================= */
  return (
    <>
      {/* HERO */}
      <section className="w-full bg-[#00485C] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Programs
          </h1>
          <p className="max-w-2xl text-gray-200 mx-auto md:mx-0">
            Empowering youth with skills, mentorship, and opportunities.
          </p>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          {programs.map((p, idx) => {
            const isReversed = idx % 2 === 1;
            const status = getEnrollmentStatus(p._id);

            let label = "Enroll Now";
            let disabled = false;
            let btnStyle = "bg-[#41933A] hover:bg-green-700";

            if (status === "pending") {
              label = "Pending Approval";
              disabled = true;
              btnStyle = "bg-yellow-400 cursor-not-allowed";
            }
            if (status === "approved") {
              label = "Approved";
              disabled = true;
              btnStyle = "bg-green-600 cursor-not-allowed";
            }
            if (status === "rejected") {
              label = "Rejected";
              disabled = true;
              btnStyle = "bg-red-600 cursor-not-allowed";
            }

            return (
              <div
                key={p._id}
                className="grid md:grid-cols-2 gap-8 items-center rounded-xl shadow-md hover:shadow-lg transition overflow-hidden bg-white"
              >
                {/* TEXT */}
                <div
                  className={`flex flex-col justify-between h-full p-6 md:p-10 ${
                    isReversed ? "md:order-2" : "md:order-1"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="p-3 rounded-md text-white text-2xl flex items-center justify-center transition-transform transform hover:scale-110"
                      style={{ backgroundColor: p.themeColor }}
                    >
                      {programIcons[p.icon]}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#00485C]">
                        {p.title}
                      </h3>
                      <p className="text-green-700 font-semibold">
                        {p.subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{p.description}</p>

                  <ul className="list-disc list-inside space-y-1 mb-6 text-gray-600">
                    {p.features.map((f, i) => (
                      <li key={i} className="marker:text-green-700">
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleEnroll(p._id)}
                    disabled={disabled || loadingEnroll === p._id}
                    className={`${btnStyle} font-bold text-white px-6 py-3 rounded-md flex items-center justify-center gap-2 transition`}
                  >
                    {loadingEnroll === p._id ? "Processing..." : label}
                  </button>
                </div>

                {/* BACKGROUND */}
                <div
                  className={`h-64 md:h-80 rounded-xl overflow-hidden flex items-center justify-center transition-transform transform hover:scale-105 ${
                    isReversed ? "md:order-1" : "md:order-2"
                  }`}
                  style={{
                    background: `linear-gradient(135deg, ${p.themeColor}33, ${p.themeColor}99)`,
                  }}
                ></div>
              </div>
            );
          })}
        </div>
      </section>

      <OurImpacts />
      <Footer />
    </>
  );
}
