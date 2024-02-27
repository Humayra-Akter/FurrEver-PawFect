import React from 'react';
import './Input.css'

const Input = () => {
    return (
        <div>
            <input type="text" autocomplete="off" name="text" class="input" placeholder="Username"></input>
        </div>
    );
};

export default Input;