import { Route, Routes } from "react-router-dom";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Navigate from "./components/Shared/Navigate";
import Service from "./components/Service/Service";

function App() {
  return (
    <>
      <Navigate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
