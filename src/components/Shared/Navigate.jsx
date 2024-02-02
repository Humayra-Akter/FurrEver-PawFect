import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <div className="items-center justify-center">
      <Link className="text-2xl text-black font-bold" to="/">
        Home
      </Link>{" "}
      <Link className="text-2xl text-black font-bold" to="/about">
        About
      </Link>{" "}
      <Link className="text-2xl text-black font-bold" to="/service">
        Service
      </Link>
    </div>
  );
};

export default Navigate;
