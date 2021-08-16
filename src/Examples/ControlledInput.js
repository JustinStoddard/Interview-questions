import React, { useState } from 'react';
import styles from './Example.module.css';
import Count from './Count';

// This is a controlled input.
const ControlledInput = ({ count }) => {
  const [inputValue, setInputValue] = useState("");

  console.log("Child Rendered");

  return (
    <div className={styles.containerDiv}>
      <input
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />
      <Count count={count} />
    </div>
  );
};

export default ControlledInput;