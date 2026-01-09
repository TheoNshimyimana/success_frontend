import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../components/UserContext";

interface Program {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

export default function EnrollProgram() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // ✅ SINGLE context usage
  const { user, loading: authLoading } = useContext(UserContext);

  // 📦 Program state
  const [program, setProgram] = useState<Program | null>(null);
  const [programLoading, setProgramLoading] = useState(true);
  const [enrolling, setEnrolling] = useState(false);

  // 🔐 Auth guard (WAIT for context to hydrate)
  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/login", {
        state: { from: `/programs/${id}/enroll` },
        replace: true,
      });
    }
  }, [authLoading, user, navigate, id]);

  // 📦 Fetch program
  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await axios.get(`https://success-backnd.onrender.com/api/programs/${id}`);
        setProgram(res.data);
      } catch (err) {
        console.error("Failed to load program", err);
      } finally {
        setProgramLoading(false);
      }
    };

    fetchProgram();
  }, [id]);

  // 📩 Enroll handler
  const handleEnroll = async () => {
    try {
      setEnrolling(true);

      await axios.post(
        `https://success-backnd.onrender.com/api/enrollments`,
        { programId: id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      alert("Enrollment successful 🎉");
      navigate("/profile");
    } catch (error) {
      console.error(error);
      alert("Enrollment failed");
    } finally {
      setEnrolling(false);
    }
  };

  // ⏳ Loading states
  if (authLoading || programLoading) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  if (!program) {
    return <div className="pt-32 text-center">Program not found</div>;
  }
  console.log("authLoading:", authLoading);
  console.log("user:", user);

  return (
    <div className="pt-28 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-[#00485C] mb-2">
          {program.title}
        </h1>
        <p className="text-green-700 font-semibold mb-6">{program.subtitle}</p>

        <p className="text-gray-700 mb-6">{program.description}</p>

        <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
          {program.features.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <button
          onClick={handleEnroll}
          disabled={enrolling}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-md"
        >
          {enrolling ? "Enrolling..." : "Confirm Enrollment"}
        </button>
      </div>
    </div>
  );
}
