import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Navbar from "./Component/Shared/Navbar";
import Login from "./Component/Login/Login";
import Registration from "./Component/Login/Registration";
import Error from "./Component/Shared/Error";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </>
  );
}

export default App;
