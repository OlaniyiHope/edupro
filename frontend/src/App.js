import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home2 from "./pages/Home2";
import About from "./pages/About";
import Innovate from "./pages/Innovate";
import PageTitleSetter from "./pages/PageTitleSetter";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <PageTitleSetter />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/innovation" element={<Innovate />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
