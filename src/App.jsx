import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Coaching from "./Pages/Coaching";
import Contact from "./Pages/Contact";
import Imprint from "./Pages/Imprint";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaching" element={<Coaching />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/imprint" element={<Imprint />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
