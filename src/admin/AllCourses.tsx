import React, { useEffect, useState } from "react";
import axios from "axios";

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

export default function AllCourses() {
  const API_URL = "https://success-backnd.onrender.com/api/courses";
  const token = localStorage.getItem("token");

  const [courses, setCourses] = useState<CourseItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCourse, setEditingCourse] = useState<CourseItem | null>(null);

  const [form, setForm] = useState({
    title: "",
    level: "Beginner",
    description: "",
    duration: "",
    students: 0,
    price: "",
    topics: [] as string[],
    schedule: "",
  });

  const [topicInput, setTopicInput] = useState("");

  /* ================= FETCH COURSES ================= */
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(res.data);
    } catch (err) {
      console.error("Failed to fetch courses", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= TOPICS ================= */
  const addTopic = () => {
    if (!topicInput.trim()) return;
    setForm({ ...form, topics: [...form.topics, topicInput.trim()] });
    setTopicInput("");
  };

  const removeTopic = (index: number) => {
    setForm({
      ...form,
      topics: form.topics.filter((_, i) => i !== index),
    });
  };

  /* ================= MODAL ================= */
  const openAddModal = () => {
    setEditingCourse(null);
    setForm({
      title: "",
      level: "Beginner",
      description: "",
      duration: "",
      students: 0,
      price: "",
      topics: [],
      schedule: "",
    });
    setShowModal(true);
  };

  const openEditModal = (course: CourseItem) => {
    setEditingCourse(course);
    setForm({ ...course });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  /* ================= SAVE ================= */
  const handleSave = async () => {
    try {
      if (editingCourse) {
        const res = await axios.put(`${API_URL}/${editingCourse._id}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses(courses.map((c) => (c._id === res.data._id ? res.data : c)));
      } else {
        const res = await axios.post(API_URL, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCourses([...courses, res.data]);
      }
      closeModal();
    } catch (err) {
      console.error("Save failed", err);
      alert("Failed to save course");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this course?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setCourses(courses.filter((c) => c._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  if (loading) return <p className="p-10 text-center">Loading courses...</p>;

  return (
    <div className="p-4 sm:p-6 md:p-10">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4 md:gap-0">
        <h1 className="text-2xl md:text-3xl font-bold">All Courses</h1>
        <button
          onClick={openAddModal}
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg transition"
        >
          + Add Course
        </button>
      </div>

      {/* COURSES */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course._id}
            className="border rounded-xl p-6 sm:p-8 bg-slate-50 relative flex flex-col"
          >
            <span className="absolute right-4 top-4 bg-yellow-100 px-3 py-1 rounded-full text-xs font-semibold">
              {course.level}
            </span>

            <h3 className="text-lg sm:text-xl font-bold mb-2">
              {course.title}
            </h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">
              {course.description}
            </p>

            <div className="grid grid-cols-3 text-center border-y py-3 mb-4 text-xs sm:text-sm">
              <div>
                <p className="text-gray-500">Duration</p>
                {course.duration}
              </div>
              <div>
                <p className="text-gray-500">Students</p>
                {course.students}
              </div>
              <div>
                <p className="text-gray-500">Price</p>
                <span className="text-emerald-700">{course.price}</span>
              </div>
            </div>

            <h4 className="text-xs font-semibold mb-2">TOPICS</h4>
            <ul className="mb-4 space-y-1 text-xs sm:text-sm">
              {course.topics.map((t, i) => (
                <li key={i}>• {t}</li>
              ))}
            </ul>

            <p className="bg-gray-100 p-3 rounded mb-4 text-xs sm:text-sm">
              <strong>Schedule:</strong>
              <br />
              {course.schedule}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <button
                onClick={() => openEditModal(course)}
                className="flex-1 bg-[#005F5A] text-white py-2 rounded hover:bg-green-900 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 px-4 sm:px-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl w-full max-w-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-lg sm:text-xl font-bold mb-4">
              {editingCourse ? "Edit Course" : "Add Course"}
            </h2>

            <div className="space-y-3 text-sm sm:text-base">
              <input
                className="w-full border p-2 rounded"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              <textarea
                className="w-full border p-2 rounded"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <select
                className="w-full border p-2 rounded"
                value={form.level}
                onChange={(e) => setForm({ ...form, level: e.target.value })}
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <input
                className="w-full border p-2 rounded"
                placeholder="Duration"
                value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
              />

              <input
                className="w-full border p-2 rounded"
                placeholder="Price"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
              />

              {/* TOPICS */}
              <div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    className="flex-1 border p-2 rounded"
                    placeholder="Add topic"
                    value={topicInput}
                    onChange={(e) => setTopicInput(e.target.value)}
                  />
                  <button
                    onClick={addTopic}
                    className="bg-green-600 text-white px-4 py-2 rounded"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.topics.map((t, i) => (
                    <span
                      key={i}
                      className="bg-emerald-100 px-3 py-1 rounded-full text-xs flex items-center"
                    >
                      {t}
                      <button
                        onClick={() => removeTopic(i)}
                        className="ml-2 text-red-500 text-sm"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <input
                className="w-full border p-2 rounded"
                placeholder="Schedule"
                value={form.schedule}
                onChange={(e) => setForm({ ...form, schedule: e.target.value })}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-end gap-3 mt-5">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
