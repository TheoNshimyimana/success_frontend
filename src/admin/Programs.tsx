import React, { useEffect, useState } from "react";
import axios from "axios";

interface ProgramItem {
  _id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  icon: string;
  themeColor: string;
  image: string;
}

export default function AllPrograms() {
  const API_URL = "http://localhost:5000/api/programs";
  const token = localStorage.getItem("token");

  const [programs, setPrograms] = useState<ProgramItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingProgram, setEditingProgram] = useState<ProgramItem | null>(
    null
  );

  const [form, setForm] = useState<Omit<ProgramItem, "_id">>({
    title: "",
    subtitle: "",
    description: "",
    features: [],
    icon: "",
    themeColor: "#006051",
    image: "",
  });

  /* ================= FETCH ================= */
  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get(API_URL);
      setPrograms(res.data);
    } catch (err) {
      console.error("Failed to fetch programs", err);
    } finally {
      setLoading(false);
    }
  };

  /* ================= MODAL ================= */
  const openAddModal = () => {
    setEditingProgram(null);
    setForm({
      title: "",
      subtitle: "",
      description: "",
      features: [],
      icon: "",
      themeColor: "#006051",
      image: "",
    });
    setShowModal(true);
  };

  const openEditModal = (program: ProgramItem) => {
    const { _id, ...rest } = program;
    setEditingProgram(program);
    setForm(rest);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  /* ================= FEATURES ================= */
  const handleFeaturesChange = (value: string) => {
    setForm({
      ...form,
      features: value.split("\n").filter(Boolean),
    });
  };

  /* ================= SAVE ================= */
  const handleSave = async () => {
    try {
      if (editingProgram) {
        const res = await axios.put(`${API_URL}/${editingProgram._id}`, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPrograms(
          programs.map((p) => (p._id === res.data._id ? res.data : p))
        );
      } else {
        const res = await axios.post(API_URL, form, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPrograms([...programs, res.data]);
      }
      closeModal();
    } catch (err) {
      console.error("Save failed", err);
      alert("Failed to save program");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id: string) => {
    if (!window.confirm("Delete this program?")) return;
    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPrograms(programs.filter((p) => p._id !== id));
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  if (loading) return <p className="p-10 text-gray-700">Loading programs...</p>;

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          All Programs
        </h1>
        <button
          onClick={openAddModal}
          className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg shadow-md transition"
        >
          + Add Program
        </button>
      </div>

      {/* PROGRAM LIST */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {programs.map((p) => (
          <div
            key={p._id}
            className="bg-white border rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
          >
            {/* Image */}
            {p.image && (
              <div
                className="h-48 w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              />
            )}

            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 text-gray-800">
                {p.title}
              </h3>
              <p className="font-semibold mb-2" style={{ color: p.themeColor }}>
                {p.subtitle}
              </p>
              <p className="text-gray-600 mb-4 text-sm">{p.description}</p>

              {/* Features */}
              <ul className="list-disc list-inside text-sm mb-4 space-y-1">
                {p.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* Actions */}
              <div className="flex gap-3 mt-4">
                <button
                  onClick={() => openEditModal(p)}
                  className="flex-1 bg-[#005F5A] text-white py-2 rounded hover:bg-green-900 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(p._id)}
                  className="flex-1 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-gray-800">
              {editingProgram ? "Edit Program" : "Add Program"}
            </h2>

            <div className="space-y-3">
              <input
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
              />

              <input
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Subtitle"
                value={form.subtitle}
                onChange={(e) => setForm({ ...form, subtitle: e.target.value })}
              />

              <textarea
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
              />

              <textarea
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Features (one per line)"
                value={form.features.join("\n")}
                onChange={(e) => handleFeaturesChange(e.target.value)}
              />

              <input
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Icon key"
                value={form.icon}
                onChange={(e) => setForm({ ...form, icon: e.target.value })}
              />

              <input
                type="color"
                className="w-full h-12 rounded border cursor-pointer"
                value={form.themeColor}
                onChange={(e) =>
                  setForm({ ...form, themeColor: e.target.value })
                }
              />

              <input
                className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Image URL"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
              />
            </div>

            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
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
