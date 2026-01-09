import { useContext, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { UserContext } from "./UserContext";
import Logo from "./images/logo.png";

interface User {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: "admin" | "user";
  profilePicture?: string;
}

const SERVER_URL = "https://success-backnd.onrender.com";

export default function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const logout = () => {
    setMenuOpen(false);
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
    setMobileMenuOpen(false);
  };

  const profileImageUrl = user?.profilePicture
    ? `${SERVER_URL}/${user.profilePicture.replace(/\\/g, "/")}`
    : null;

  return (
    <header className="w-full bg-white shadow-md fixed top-0 z-50">
      <div className="max-w-8xl mx-auto flex items-center justify-between py-3 px-6 md:px-10">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium text-base">
          <Link to="/" className="hover:text-green-700 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-green-700 transition-colors">
            About
          </Link>
          <Link
            to="/services"
            className="hover:text-green-700 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/training"
            className="hover:text-green-700 transition-colors"
          >
            Training
          </Link>
          <Link
            to="/programs"
            className="hover:text-green-700 transition-colors"
          >
            Programs
          </Link>
          <Link
            to="/contact"
            className="hover:text-green-700 transition-colors"
          >
            Contact
          </Link>

          {!user && (
            <Link
              to="/login"
              className="bg-green-700 hover:bg-green-800 text-white rounded-lg px-5 py-2 shadow-md transition-colors"
            >
              Login
            </Link>
          )}

          {user && (
            <div className="relative" ref={menuRef}>
              {profileImageUrl ? (
                <img
                  onClick={() => setMenuOpen((prev) => !prev)}
                  src={profileImageUrl}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover cursor-pointer border-2 border-green-700 hover:border-green-800 transition"
                />
              ) : (
                <IoPersonOutline
                  onClick={() => setMenuOpen((prev) => !prev)}
                  className="text-4xl text-green-700 p-1 rounded-full cursor-pointer hover:text-green-800 transition"
                />
              )}

              {menuOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white shadow-lg rounded-xl border border-gray-200 py-2 text-sm z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="font-semibold text-gray-800">{user.name}</p>
                    <p className="text-gray-500 text-xs">{user.email}</p>
                    <p className="text-xs text-green-700 capitalize">
                      {user.role}
                    </p>
                  </div>

                  <Link
                    to="/profile"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    My Profile
                  </Link>

                  <Link
                    to="/settings"
                    onClick={() => setMenuOpen(false)}
                    className="block px-4 py-2 hover:bg-gray-100 transition"
                  >
                    Settings
                  </Link>

                  {user.role === "admin" && (
                    <>
                      <hr className="my-2 border-gray-200" />
                      <Link
                        to="/admin/course-enrollments"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        Course Enrollments
                      </Link>
                      <Link
                        to="/admin/program-enrollments"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        Program Enrollments
                      </Link>
                      <Link
                        to="/admin/users"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        Manage Users
                      </Link>
                      <Link
                        to="/admin/courses"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        Manage Courses
                      </Link>
                      <Link
                        to="/admin/programs"
                        onClick={() => setMenuOpen(false)}
                        className="block px-4 py-2 hover:bg-gray-100 transition"
                      >
                        Manage Programs
                      </Link>
                    </>
                  )}

                  <hr className="my-2 border-gray-200" />

                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <HiOutlineX className="w-8 h-8 text-green-700" />
            ) : (
              <HiOutlineMenu className="w-8 h-8 text-green-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-200">
          <div className="flex flex-col px-6 py-4 space-y-3 text-gray-700 font-medium">
            <Link to="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link to="/training" onClick={() => setMobileMenuOpen(false)}>
              Training
            </Link>
            <Link to="/programs" onClick={() => setMobileMenuOpen(false)}>
              Programs
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>

            {!user && (
              <Link
                to="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-green-700 text-white rounded-lg px-5 py-2 text-center"
              >
                Login
              </Link>
            )}

            {user && (
              <>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                  My Profile
                </Link>
                <Link
                  to="/change-password"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Update password
                </Link>

                {user.role === "admin" && (
                  <>
                    <Link
                      to="/admin/course-enrollments"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Course Enrollments
                    </Link>
                    <Link
                      to="/admin/program-enrollments"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Program Enrollments
                    </Link>
                    <Link
                      to="/admin/users"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Manage Users
                    </Link>
                    <Link
                      to="/admin/courses"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Manage Courses
                    </Link>
                    <Link
                      to="/admin/programs"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Manage Programs
                    </Link>
                  </>
                )}

                <button onClick={logout} className="text-red-600 text-left">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
