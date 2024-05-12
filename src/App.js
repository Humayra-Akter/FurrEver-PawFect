import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Navbar from "./Component/Shared/Navbar";
import Login from "./Component/Login/Login";
import Error from "./Component/Shared/Error";
import Register from "./Component/Login/Register";
import Contact from "./Component/Contact/Contact";
import Services from "./Component/Services/Services";
import Dashboard from "./Component/Dashboard/Dashboard";
import Feedback from "./Component/Feedback/Feedback";
import Donation from "./Component/Donation/Donation";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(false); // Initialize dark mode state to false
  const themes = [
    {
      primary: "#800000",
      secondary: "#FFD700",
      accent: "#0E241A",
      neutral: "#F5F5F5",
      "base-100": "#000",
    },
    {
      primary: "#FF6347",
      secondary: "#6A5ACD",
      accent: "#87CEEB",
      neutral: "#F5F5F5",
      "base-100": "#000",
    },
  ];

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        theme={themes[darkMode ? 0 : 1]}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
