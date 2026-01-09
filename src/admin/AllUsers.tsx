import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiEdit, FiTrash2 } from "react-icons/fi";

interface User {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
}

export default function AllUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [editName, setEditName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editRole, setEditRole] = useState<"admin" | "user">("user");
  const [searchTerm, setSearchTerm] = useState("");

  const API_URL = "http://localhost:5000/api/auth";

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("You must be logged in");

      const res = await axios.get(`${API_URL}/users`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUsers(res.data);
    } catch (err: any) {
      console.error("Failed to fetch users", err);
      setError(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${API_URL}/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUsers(users.filter((user) => user._id !== id));
    } catch (err: any) {
      console.error("Failed to delete user", err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  const openEditModal = (user: User) => {
    setEditingUser(user);
    setEditName(user.name);
    setEditEmail(user.email);
    setEditRole(user.role);
  };

  const closeEditModal = () => setEditingUser(null);

  const handleEditSave = async () => {
    if (!editingUser) return;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${API_URL}/users/${editingUser._id}`,
        { name: editName, email: editEmail, role: editRole },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setUsers(users.map((u) => (u._id === res.data._id ? res.data : u)));
      closeEditModal();
    } catch (err: any) {
      console.error("Failed to update user", err);
      alert(err.response?.data?.message || "Update failed");
    }
  };

  const filteredUsers = users.filter((user) =>
    [user.name, user.email, user.role].some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  if (loading) return <p className="p-10">Loading users...</p>;
  if (error) return <p className="p-10 text-red-500">{error}</p>;

  return (
    <div className="p-6 md:p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        All Users
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, email, or role"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full max-w-md p-2 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow">
        <table className="w-full text-base divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              {["Name", "Email", "Role", "Joined", "Actions"].map((h) => (
                <th
                  key={h}
                  className="px-4 py-3 text-left font-semibold text-gray-700 uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredUsers.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-3 text-gray-800 font-medium">
                  {user.name}
                </td>
                <td className="px-4 py-3 text-gray-600">{user.email}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      user.role === "admin"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString()}
                </td>
                <td className="px-4 py-3 flex gap-4">
                  <FiEdit
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                    onClick={() => openEditModal(user)}
                  />
                  <FiTrash2
                    className="cursor-pointer text-red-600 hover:text-red-800"
                    onClick={() => handleDelete(user._id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {filteredUsers.map((user) => (
          <div
            key={user._id}
            className="bg-white rounded-lg shadow p-4 hover:shadow-md transition"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h2 className="text-gray-800 font-semibold">{user.name}</h2>
                <p className="text-gray-500 text-sm">{user.email}</p>
                <p
                  className={`mt-1 inline-block px-2 py-1 rounded-full text-xs font-semibold ${
                    user.role === "admin"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {user.role}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Joined: {new Date(user.createdAt).toLocaleDateString()}
                </p>
              </div>
              <div className="flex gap-3 mt-1">
                <FiEdit
                  className="cursor-pointer text-blue-600 hover:text-blue-800"
                  onClick={() => openEditModal(user)}
                />
                <FiTrash2
                  className="cursor-pointer text-red-600 hover:text-red-800"
                  onClick={() => handleDelete(user._id)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Edit Modal */}
      {editingUser && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit User</h2>
            <div className="space-y-4">
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Name"
              />
              <input
                type="email"
                value={editEmail}
                onChange={(e) => setEditEmail(e.target.value)}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Email"
              />
              <select
                value={editRole}
                onChange={(e) =>
                  setEditRole(e.target.value as "admin" | "user")
                }
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <div className="mt-5 flex justify-end gap-4">
              <button
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleEditSave}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
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
