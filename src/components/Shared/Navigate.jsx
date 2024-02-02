import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div className="justify-center items-center text-center">
      <Link className="text-2xl pr-20 text-black font-bold" to="/">
        Home
      </Link>
      <Link className="text-2xl pr-20 text-black font-bold" to="/about">
        About
      </Link>
      <Link className="text-2xl pr-20 text-black font-bold" to="/service">
        Service
      </Link>
      <Link className="text-2xl pr-20 text-black font-bold" to="/contact">
        Contact
      </Link>
    </div>
  );
};

export default Navigate;
