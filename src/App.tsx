import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import TobiServe from "./pages/TobiServe";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Programs from "./pages/Program";

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<Layout />}>
          {/* Nested routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="tobiserve" element={<TobiServe />} />
          <Route path="training" element={<Training />} />
          <Route path="contact" element={<Contact />} />
          <Route path="programs" element={<Programs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
