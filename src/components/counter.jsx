import React, { useState } from "react";
import iconPlus from "../images/icon-plus.svg";
import iconMinus from "../images/icon-minus.svg";

const Counter = (props) => {
  const { value, onIncrement, onDecrement } = props;
  return (
    <div className="flex-col bg-lightGray self-center px-1 py-1 rounded-lg md:self-center md:flex md:flex-row md:justify-around md:w-1/5 md:px-2 md:py-1 md:mt-2 md:ml-6 sm:w-2/5 sm:ml-1">
      <button onClick={onIncrement} className="p-2">
        <img className="" src={iconPlus} alt="user profile's avatar" />
      </button>
      <p className="mt-2 md:mt-0 text-moderateBlue px-2">{value}</p>
      <button onClick={onDecrement} className="p-2">
        <img className="" src={iconMinus} alt="user profile's avatar" />
      </button>
    </div>
  );
};

export default Counter;