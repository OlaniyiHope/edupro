import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Terms from "./pages/Terms";
import Login from "./pages/Login";
import Test from "./pages/Test";
import reviews from "./data";
import Blog from "./pages/Blog";
import Download from "./pages/Download";
import Cbt from "./pages/Cbt";
import Innovate from "./pages/Innovate";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/cbt" element={<Cbt />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/innovation" element={<Innovate />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/terms" element={<Test reviews={reviews} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
