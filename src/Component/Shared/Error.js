import React from "react";
import img from "../../images/error.jpg";

const Error = () => {
  return (
    <div
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        fontFamily: "'Concert One', cursive",
      }}
    >
      <h1 className="h-screen w-screen font-extrabold text-center my-auto text-5xl text-accent pt-28">
        SORRY YOU ENTERED A WRONG URL
      </h1>
    </div>
  );
};

export default Error;
