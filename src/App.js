import { useState } from "react";
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

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const themes = {
    dark: {
      primary: "#800000",
      secondary: "#FFD700",
      accent: "#0E241A",
      neutral: "#F5F5F5",
      "base-100": "#000",
    },
    light: {
      primary: "dark-green",
      secondary: "blue",
      accent: "green",
      neutral: "#F5F5F5",
      "base-100": "#fff",
    },
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
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
