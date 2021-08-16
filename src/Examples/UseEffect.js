import React, { useState, useEffect } from 'react';

const UseEffect = () => {
  const [inputValue, setInputValue] = useState("1");
  const [apiValue, setApiValue] = useState({});

  useEffect(() => {
    // Do Api Call
    const whatsReturnedFromApi = {
      restaurant: {
        name: "McDonalds"
      }
    };
    setApiValue(whatsReturnedFromApi);
    console.log("Hey");
  }, [inputValue]);

  return (
    <div>
      <h1>Hello World!</h1>
      <select value={inputValue} onChange={(e) => setInputValue(e.target.value)}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <div>{apiValue?.restaurant?.name || ""}</div>
    </div>
  );
};

export default UseEffect;