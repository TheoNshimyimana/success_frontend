import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer, ToastClassNameProps, TypeOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/* ================= CONTEXT ================= */
import { UserProvider } from "./UserContext";

/* ================= LAYOUT ================= */
import Layout from "./Layout";

/* ================= PAGES ================= */
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Training from "./pages/Training";
import Programs from "./pages/Program";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import EnrollProgram from "./pages/EnrollProgram";

/* ================= ADMIN ================= */
import AllUsers from "./admin/AllUsers";
import AllCourses from "./admin/AllCourses";
import AllPrograms from "./admin/Programs";
import EnrollmentsAdmin from "./admin/EnrollmentsAdmin";
import AdminProgramEnrollments from "./admin/ProgramEnrollmentAdmin";
import Profile from "./admin/Profile";
import Settings from "./admin/Settting";

function App() {
  return (
    <UserProvider>
      <Router>
        {/* ================= ROUTES ================= */}
        <Routes>
          <Route path="/" element={<Layout />}>
            {/* Public */}
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Services />} />
            <Route path="training" element={<Training />} />
            <Route path="programs" element={<Programs />} />
            <Route path="contact" element={<Contact />} />

            {/* Auth */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="reset-password/:token" element={<ResetPassword />} />

            {/* User */}
            <Route path="profile" element={<Profile />} />
            <Route path="change-password" element={<Settings />} />
            <Route path="programs/:id/enroll" element={<EnrollProgram />} />

            {/* Admin */}
            <Route path="admin/users" element={<AllUsers />} />
            <Route path="admin/courses" element={<AllCourses />} />
            <Route path="admin/programs" element={<AllPrograms />} />
            <Route
              path="admin/course-enrollments"
              element={<EnrollmentsAdmin />}
            />
            <Route
              path="admin/program-enrollments"
              element={<AdminProgramEnrollments />}
            />
          </Route>
        </Routes>

        {/* ================= TOAST ================= */}
        <ToastContainer
          position="top-center"
          autoClose={4000}
          newestOnTop
          pauseOnHover={false}
          closeOnClick
          draggable={false}
          theme="light"
          toastClassName={(props: ToastClassNameProps) => {
            const type = props?.type as TypeOptions | undefined;
            return `rounded-xl shadow-lg border p-4 flex items-center ${
              type === "success"
                ? "border-green-200 bg-green-50 text-green-800"
                : type === "error"
                ? "border-red-200 bg-red-50 text-red-800"
                : type === "info"
                ? "border-blue-200 bg-blue-50 text-blue-800"
                : "border-gray-200 bg-white text-gray-800"
            }`;
          }}
          progressClassName={(props) => {
            const type = props?.type as TypeOptions | undefined;
            return type === "success"
              ? "bg-green-600"
              : type === "error"
              ? "bg-red-600"
              : "bg-blue-600";
          }}
        />
      </Router>
    </UserProvider>
  );
}

export default App;
