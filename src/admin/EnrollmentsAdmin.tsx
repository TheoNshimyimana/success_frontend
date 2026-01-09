import React, { useEffect, useState } from "react";
import axios from "axios";

interface CourseEnrollment {
  _id: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
  user: {
    name: string;
    email: string;
  };
  course: {
    title: string;
  };
}

export default function CourseEnrollmentsAdmin() {
  const [enrollments, setEnrollments] = useState<CourseEnrollment[]>([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState<
    CourseEnrollment[]
  >([]);
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchEnrollments();
  }, []);

  useEffect(() => {
    // Filter enrollments whenever `search` changes
    const term = search.toLowerCase();
    setFilteredEnrollments(
      enrollments.filter(
        (e) =>
          e.user.name.toLowerCase().includes(term) ||
          e.user.email.toLowerCase().includes(term) ||
          e.course.title.toLowerCase().includes(term)
      )
    );
  }, [search, enrollments]);

  const fetchEnrollments = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/course-enrollments",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEnrollments(res.data);
      setFilteredEnrollments(res.data); // initialize filtered list
    } catch (error) {
      console.error("Failed to load enrollments", error);
    }
  };

  const updateStatus = async (id: string, status: "approved" | "rejected") => {
    try {
      await axios.put(
        `http://localhost:5000/api/course-enrollments/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEnrollments((prev) =>
        prev.map((e) => (e._id === id ? { ...e, status } : e))
      );
    } catch (error) {
      console.error("Status update failed", error);
    }
  };

  const deleteEnrollment = async (id: string) => {
    try {
      await axios.delete(`http://localhost:5000/api/course-enrollments/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setEnrollments((prev) => prev.filter((e) => e._id !== id));
    } catch (error) {
      console.error("Failed to delete enrollment", error);
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Course Enrollment Approvals
      </h1>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email or course"
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D7377] focus:border-transparent"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
          <thead className="bg-gray-50">
            <tr>
              {["Name", "Email", "Course", "Date", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-medium text-gray-700 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEnrollments.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-6 text-gray-500">
                  No enrollments found
                </td>
              </tr>
            ) : (
              filteredEnrollments.map((e) => (
                <tr key={e._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {e.user.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{e.user.email}</td>
                  <td className="px-4 py-3 font-medium text-gray-700">
                    {e.course.title}
                  </td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(e.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-3 py-1 rounded-full font-semibold text-white text-xs ${
                        e.status === "approved"
                          ? "bg-green-600"
                          : e.status === "rejected"
                          ? "bg-red-600"
                          : "bg-yellow-500"
                      }`}
                    >
                      {e.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 flex gap-2">
                    <button
                      onClick={() => updateStatus(e._id, "approved")}
                      disabled={e.status === "approved"}
                      className="bg-green-600 disabled:bg-gray-300 text-white px-3 py-1 rounded hover:bg-green-700 transition"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => updateStatus(e._id, "rejected")}
                      disabled={e.status === "rejected"}
                      className="bg-red-600 disabled:bg-gray-300 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => deleteEnrollment(e._id)}
                      className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {filteredEnrollments.length === 0 ? (
          <div className="text-center p-6 text-gray-500 bg-white rounded-lg shadow">
            No enrollments found
          </div>
        ) : (
          filteredEnrollments.map((e) => (
            <div
              key={e._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="font-semibold text-gray-800">{e.user.name}</h2>
                  <p className="text-gray-500 text-sm">{e.user.email}</p>
                  <p className="text-gray-700 font-medium">{e.course.title}</p>
                  <p className="text-gray-500 text-xs">
                    {new Date(e.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full font-semibold text-white text-xs ${
                    e.status === "approved"
                      ? "bg-green-600"
                      : e.status === "rejected"
                      ? "bg-red-600"
                      : "bg-yellow-500"
                  }`}
                >
                  {e.status}
                </span>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <button
                  onClick={() => updateStatus(e._id, "approved")}
                  disabled={e.status === "approved"}
                  className="flex-1 bg-green-600 disabled:bg-gray-300 text-white py-1 rounded hover:bg-green-700 transition text-sm"
                >
                  Approve
                </button>
                <button
                  onClick={() => updateStatus(e._id, "rejected")}
                  disabled={e.status === "rejected"}
                  className="flex-1 bg-red-600 disabled:bg-gray-300 text-white py-1 rounded hover:bg-red-700 transition text-sm"
                >
                  Reject
                </button>
                <button
                  onClick={() => deleteEnrollment(e._id)}
                  className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-1 rounded transition text-sm"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
