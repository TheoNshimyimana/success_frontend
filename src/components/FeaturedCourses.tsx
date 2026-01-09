import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

/* ================= TYPES ================= */

interface CourseItem {
  _id: string;
  title: string;
  level: string;
  description: string;
  duration: string;
  students: number;
  price: string;
  topics: string[];
  schedule: string;
}

interface Enrollment {
  _id: string;
  status: "pending" | "approved" | "rejected";
  course: {
    _id: string;
  };
}

/* ================= COMPONENT ================= */

export default function FeaturedCourses() {
  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const location = useLocation();

  /* ================= FETCH COURSES ================= */
  useEffect(() => {
    axios
      .get("https://success-backnd.onrender.com/api/courses")
      .then((res) => setCourses(res.data))
      .catch(() => toast.error("Failed to load courses"));
  }, []);

  /* ================= FETCH USER ENROLLMENTS ================= */
  useEffect(() => {
    if (!token) return;

    axios
      .get("https://success-backnd.onrender.com/api/course-enrollments/my", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => setEnrollments(res.data))
      .catch(() => toast.error("Failed to load enrollments"));
  }, [token]);

  /* ================= AUTO-ENROLL AFTER LOGIN ================= */
  useEffect(() => {
    if (!token) return;

    const pending = localStorage.getItem("pendingEnroll");
    if (!pending) return;

    const { courseId, redirectTo } = JSON.parse(pending);

    // Only continue if user returned to correct page
    if (redirectTo === location.pathname) {
      localStorage.removeItem("pendingEnroll");
      handleEnroll(courseId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token, location.pathname]);

  /* ================= ENROLL ================= */
  const handleEnroll = async (courseId: string) => {
    // 🔐 Not logged in
    if (!token) {
      localStorage.setItem(
        "pendingEnroll",
        JSON.stringify({
          courseId,
          redirectTo: location.pathname,
        })
      );

      navigate("/login", {
        state: { from: location.pathname },
      });
      return;
    }

    // ℹ️ Toast info instead of confirm
   

    try {
      setLoadingId(courseId);

      await axios.post(
        "https://success-backnd.onrender.com/api/course-enrollments",
        { courseId },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      toast.success(
        "Thank you! Your enrollment has been submitted successfully, and our staff will be in touch with you shortly."
      );

      const res = await axios.get(
        "https://success-backnd.onrender.com/api/course-enrollments/my",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEnrollments(res.data);
    } catch (error: any) {
      toast.error(error.response?.data?.message || "Enrollment failed");
    } finally {
      setLoadingId(null);
    }
  };

  /* ================= HELPER ================= */
  const getEnrollmentStatus = (courseId: string) => {
    return enrollments.find((e) => e.course._id === courseId)?.status;
  };

  /* ================= UI ================= */
  return (
    <div className="w-full py-20 px-4 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-3">Featured Courses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from our diverse range of courses designed to meet your
          learning goals.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {courses.map((course) => {
          const status = getEnrollmentStatus(course._id);

          let label = "Enroll Now";
          let buttonStyle = "bg-[#0D7377] hover:bg-emerald-800 text-white";
          let disabled = false;

          if (status === "pending") {
            label = "Pending Approval";
            buttonStyle = "bg-yellow-400 cursor-not-allowed";
            disabled = true;
          }
          if (status === "approved") {
            label = "Approved";
            buttonStyle = "bg-green-600 cursor-not-allowed";
            disabled = true;
          }
          if (status === "rejected") {
            label = "Rejected";
            buttonStyle = "bg-red-600 cursor-not-allowed";
            disabled = true;
          }

          return (
            <div
              key={course._id}
              className="border border-gray-200 rounded-2xl p-10 bg-slate-50 shadow-sm hover:shadow-md transition relative"
            >
              {/* COURSE LEVEL */}
              <span className="absolute right-6 top-6 bg-[#F9F3D5] text-[#0D7377] text-xs px-3 py-1 rounded-full font-semibold">
                {course.level}
              </span>

              {/* COURSE TITLE */}
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {course.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {course.description}
              </p>

              {/* COURSE STATS */}
              <div className="w-full border-t border-b border-gray-200 py-4 grid grid-cols-3 text-center mb-6 text-sm">
                <div>
                  <p className="text-gray-500">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
                <div>
                  <p className="text-gray-500">Students</p>
                  <p className="font-semibold">{course.students}</p>
                </div>
                <div>
                  <p className="text-gray-500">Price</p>
                  <p className="font-semibold text-emerald-700">
                    {course.price}
                  </p>
                </div>
              </div>

              {/* TOPICS */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold text-gray-500 mb-2 tracking-wide">
                  TOPICS COVERED
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {course.topics.map((topic, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-600" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              {/* SCHEDULE */}
              <div className="bg-gray-100 rounded-xl p-4 text-sm mb-6">
                <p className="text-gray-600">
                  <span className="font-semibold">Schedule</span>
                  <br />
                  {course.schedule}
                </p>
              </div>

              {/* ENROLL BUTTON */}
              <button
                disabled={disabled || loadingId === course._id}
                onClick={() => handleEnroll(course._id)}
                className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center transition
      ${buttonStyle}
      ${disabled ? "opacity-80" : "hover:scale-[1.01]"}
    `}
              >
                {loadingId === course._id ? "Processing..." : label}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
