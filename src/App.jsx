import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Agency from "./pages/Agency";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import Footer from "./components/common/Footer";

const App = () => {
  const location = useLocation();
  const showFooter =
    location.pathname !== "/" && location.pathname !== "/contact";

  return (
    <div className="overflow-x-hidden relative min-h-screen">
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agency" element={<Agency />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

export default App;
