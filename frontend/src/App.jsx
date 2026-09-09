import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Activities from "./pages/Activities";
import Coaches from "./pages/Coaches";
import Planning from "./pages/Planning";
import Plans from "./pages/Plans";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";

function PublicSite() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/activites" element={<Activities />} />
        <Route path="/coachs" element={<Coaches />} />
        <Route path="/planning" element={<Planning />} />
        <Route path="/abonnements" element={<Plans />} />
        <Route path="/galerie" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* The original admin/ panel was two standalone HTML documents with
            no site navbar/footer - kept the same way here, outside PublicSite. */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/*" element={<PublicSite />} />
      </Routes>
    </>
  );
}
