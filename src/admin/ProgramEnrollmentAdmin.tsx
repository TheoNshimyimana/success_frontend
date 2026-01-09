import React, { useEffect, useState } from "react";
import axios from "axios";

interface Program {
  _id: string;
  title: string;
}

interface User {
  _id: string;
  name: string;
  email: string;
}

interface Enrollment {
  _id: string;
  user: User;
  program: Program;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export default function AdminProgramEnrollments() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [filteredEnrollments, setFilteredEnrollments] = useState<Enrollment[]>(
    []
  );
  const [search, setSearch] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchEnrollments();
  }, []);

  useEffect(() => {
    const term = search.toLowerCase();
    setFilteredEnrollments(
      enrollments.filter(
        (e) =>
          e.user.name.toLowerCase().includes(term) ||
          e.user.email.toLowerCase().includes(term) ||
          e.program.title.toLowerCase().includes(term)
      )
    );
  }, [search, enrollments]);

  const fetchEnrollments = async () => {
    try {
      const res = await axios.get(
        "https://success-backnd.onrender.com/api/enrollments",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEnrollments(res.data);
      setFilteredEnrollments(res.data);
    } catch (error) {
      console.error("Failed to fetch enrollments", error);
    }
  };

  const deleteEnrollment = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this enrollment?"))
      return;

    try {
      await axios.delete(
        `https://success-backnd.onrender.com/api/enrollments/${id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEnrollments((prev) => prev.filter((e) => e._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const updateStatus = async (
    id: string,
    status: "pending" | "approved" | "rejected"
  ) => {
    try {
      await axios.put(
        `https://success-backnd.onrender.com/api/enrollments/${id}`,
        { status },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEnrollments((prev) =>
        prev.map((e) => (e._id === id ? { ...e, status } : e))
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        Program Enrollments (Admin)
      </h1>

      {/* Search Field */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, email, or program"
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0D7377] focus:border-transparent"
        />
      </div>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-sm divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {["Name", "Email", "Program", "Date", "Status", "Actions"].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-3 text-left font-semibold text-gray-700 uppercase tracking-wide"
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredEnrollments.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-6 text-gray-500">
                  No enrollments found
                </td>
              </tr>
            ) : (
              filteredEnrollments.map((e) => (
                <tr key={e._id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-3 text-gray-800 font-medium">
                    {e.user.name}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{e.user.email}</td>
                  <td className="px-4 py-3 text-gray-700">{e.program.title}</td>
                  <td className="px-4 py-3 text-gray-500">
                    {new Date(e.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full font-semibold text-white ${
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
                  <td className="px-4 py-3 flex gap-2 flex-wrap">
                    {e.status !== "approved" && (
                      <button
                        onClick={() => updateStatus(e._id, "approved")}
                        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded transition"
                      >
                        Approve
                      </button>
                    )}
                    {e.status !== "rejected" && (
                      <button
                        onClick={() => updateStatus(e._id, "rejected")}
                        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition"
                      >
                        Reject
                      </button>
                    )}
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
              className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-gray-800 font-semibold">{e.user.name}</h2>
                  <p className="text-gray-500 text-sm">{e.user.email}</p>
                  <p className="text-gray-700 text-sm">{e.program.title}</p>
                  <p className="text-gray-400 text-xs mt-1">
                    Joined: {new Date(e.createdAt).toLocaleDateString()}
                  </p>
                  <span
                    className={`mt-2 inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                      e.status === "approved"
                        ? "bg-green-600 text-white"
                        : e.status === "rejected"
                        ? "bg-red-600 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {e.status}
                  </span>
                </div>
                <div className="flex flex-col gap-2 mt-1">
                  {e.status !== "approved" && (
                    <button
                      onClick={() => updateStatus(e._id, "approved")}
                      className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded text-xs transition"
                    >
                      Approve
                    </button>
                  )}
                  {e.status !== "rejected" && (
                    <button
                      onClick={() => updateStatus(e._id, "rejected")}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-xs transition"
                    >
                      Reject
                    </button>
                  )}
                  <button
                    onClick={() => deleteEnrollment(e._id)}
                    className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs transition"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
