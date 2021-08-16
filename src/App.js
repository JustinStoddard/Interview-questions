import React, { useState, Suspense, lazy } from 'react';
import './App.css';
import ControlledInput from './Examples/ControlledInput';
import UncontrolledInput from './Examples/UncontrolledInput';
// import UseMemo from './Examples/UseMemo';
import ReactKeys from './Examples/ReactKeys';
import UseEffect from './Examples/UseEffect';

const UseMemo = lazy(() => import('./Examples/UseMemo'));

const App = () => {
  const [count, setCount] = useState(0);

  console.log("Parent Rendered")

  const string = "hey"; // Type is string
  const number = 5; // Type is number
  const bigInt = 0 //09128374908123740987123409871234098 // Type is BigInt
  const boolean = true || false; // Type is boolean
  const myVar = undefined; // Type is undefined
  const myVar1 = null; // Type is null
  const myObject = {
    name: '4',
    hi: "5",
    there: "5"
  }; //Type is object
  const myArr = []; //Type is array
  const myFunc = (name, ...rest) => {}; //Type is function

  const logOutput = (num) => {
    console.log(num);
  };

  const myFunc2 = (num1, num2, callback) => {
    return callback(num1 * num2);
  };

  myFunc2(6, 5, logOutput);

  const heyThere = async () => {
    return await 5 * 6;
  };

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading...</h1>}>
        <ControlledInput count={count} />
        <UncontrolledInput />
        <button onClick={() => setCount(count + 1)}>+</button>
        <UseMemo />
        <ReactKeys />
        <UseEffect />
      </Suspense>
    </div>
  );
};

export default App;
