import React from 'react';
import './Input.css'

const Input = () => {
    return (
      <div>
        <input
          type="text"
          autocomplete="off"
          name="text"
          class="input"
          placeholder="Username"
        ></input>

        <div class="loader">
          <div class="wrapper">
            <div class="circle"></div>
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
            <div class="line-4"></div>
          </div>
        </div>
      </div>
    );
};

export default Input;