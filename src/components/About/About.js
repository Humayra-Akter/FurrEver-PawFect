import React from "react";

const About = () => {
  return (
    <div>
      <h1 className="text-3xl text-black mt-20 text-center font-bold ">
        Hello world!
      </h1>
      <div className="grid grid-cols-3">
        <div className="flex flex-col mx-auto mt-20 gap-4 w-96">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>{" "}
        <div className="flex flex-col mx-auto mt-20 gap-4 w-96">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>{" "}
        <div className="flex flex-col mx-auto mt-20 gap-4 w-96">
          <div className="flex gap-4 items-center">
            <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
            <div className="flex flex-col gap-4">
              <div className="skeleton h-4 w-20"></div>
              <div className="skeleton h-4 w-28"></div>
            </div>
          </div>
          <div className="skeleton h-32 w-full"></div>
        </div>
      </div>
     
    </div>
  );
};

export default About;
