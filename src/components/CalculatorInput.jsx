import { useState } from "react";

const CalculatorInput = ({ result, setResult }) => {
  const onChangeResult = (e) => {
    setResult(e.target.value);
  };

  return (
    <input
      className="py-2 px-4 text-xl text-right w-full rounded-xl focus:outline-none"
      type="text"
      value={result}
      onChange={onChangeResult}
    />
  );
};

export default CalculatorInput;
