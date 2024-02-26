import React from "react";

const Service = () => {
  return (
    <div>
      {" "}
      <div class="loader">
        <div class="cell d-0"></div>
        <div class="cell d-1"></div>
        <div class="cell d-2"></div>

        <div class="cell d-1"></div>
        <div class="cell d-2"></div>

        <div class="cell d-2"></div>
        <div class="cell d-3"></div>

        <div class="cell d-3"></div>
        <div class="cell d-4"></div>
      </div>
      <button class="Btn"></button>
       <input type="checkbox" id="checkbox"/>
    <label for="checkbox" class="toggle">
        <div class="bars" id="bar1"></div>
        <div class="bars" id="bar2"></div>
        <div class="bars" id="bar3"></div>
    </label>
    </div>
  );
};

export default Service;
