import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
