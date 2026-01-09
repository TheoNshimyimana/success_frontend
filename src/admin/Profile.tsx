import React, { useEffect, useState } from "react";
import axios from "axios";

interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: "admin" | "user";
  profilePicture?: string;
}

const API_URL = "https://success-backnd.onrender.com/api/auth";
const SERVER_URL = "https://success-backnd.onrender.com";

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");

      const res = await axios.get(`${API_URL}/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(res.data);
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone || "");
      setPreview(
        res.data.profilePicture
          ? `${SERVER_URL}/${res.data.profilePicture.replace(/\\/g, "/")}`
          : null
      );
    } catch (err: any) {
      setError(err.response?.data?.message || "Failed to load profile");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleUpdate = async () => {
    if (!user) return;

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      if (profilePicture) formData.append("profilePicture", profilePicture);

      const res = await axios.put(`${API_URL}/users/${user._id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      setUser(res.data);
      localStorage.setItem("user", JSON.stringify(res.data));
      setMessage("Profile updated successfully");
      setError("");
      setPreview(
        res.data.profilePicture
          ? `${SERVER_URL}/${res.data.profilePicture.replace(/\\/g, "/")}`
          : null
      );
    } catch (err: any) {
      setError(err.response?.data?.message || "Update failed");
      setMessage("");
    }
  };

  if (loading) return <p className="p-10 text-center">Loading profile...</p>;
  if (error && !user)
    return <p className="p-10 text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-6 text-gray-800 text-center sm:text-left">
        My Profile
      </h1>

      {message && (
        <div className="mb-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
          {message}
        </div>
      )}
      {error && user && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md text-center">
          {error}
        </div>
      )}

      <div className="bg-white shadow-md rounded-xl p-6 space-y-6 sm:space-y-8 flex flex-col sm:flex-row sm:items-start sm:space-x-8">
        {/* Profile Picture */}
        <div className="flex-shrink-0 flex flex-col items-center sm:items-start">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-gray-100 border-2 border-gray-200">
            {preview ? (
              <img
                src={preview}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="flex items-center justify-center h-full w-full text-gray-400">
                No Image
              </span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="mt-3 text-sm text-gray-600 sm:text-left text-center"
          />
        </div>

        {/* Profile Info */}
        <div className="flex-1 space-y-4 sm:space-y-6">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>

          {/* Update Button */}
          <button
            onClick={handleUpdate}
            className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-lg font-medium transition-colors"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
}
