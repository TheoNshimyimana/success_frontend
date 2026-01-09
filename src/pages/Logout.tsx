import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token"); // remove JWT
    navigate("/login"); // redirect to login
  }, [navigate]);

  return null; // or a loading spinner while redirecting
}
