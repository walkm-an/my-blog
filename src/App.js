import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Nofount from "./pages/Nofound";
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          {/* <Route path="/*" element={<PageRenderer />} /> */}
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nofount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
