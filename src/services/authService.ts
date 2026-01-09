import axios from "axios";

const API_URL = "https://success-backnd.onrender.com/api/auth";

/* LOGIN */
export const loginUser = async (data: {
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/login`, data);
  return response.data;
};

/* SIGNUP */
export const signupUser = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${API_URL}/signup`, data);
  return response.data;
};

/* LOGOUT */
export const logoutUser = () => {
  localStorage.removeItem("token");
};

