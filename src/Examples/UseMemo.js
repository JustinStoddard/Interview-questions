import React, { useState, useCallback } from 'react';

const UseMemo = () => {
  const [count, setCount] = useState(0);

  console.log("memo rendered");

  const renderTheCount = useCallback(() => {
    const multiply = count * 25;
    const subtract = multiply - 10;
    console.log("Computed");
    return subtract;
  }, []);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>{renderTheCount()}</h1>
    </div>
  );
};

export default UseMemo;