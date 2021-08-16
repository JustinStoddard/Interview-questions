import React from 'react';

const ReactKeys = () => {
  const myArray = ["1", "2", "3", "4", "5"];
  const myArrayOfObjects = [
    {
      id: "1",
      name: "Tristan",
    },
    {
      id: "2",
      name: "Justin"
    }
  ];

  return (
    <div>
      <ul>
        {myArray.map((item) => {
          return (
            <li key={item}>{item}</li>
          );
        })}
      </ul>
      <ul>
        {myArrayOfObjects.map((item) => {
          return (
            <li key={item.id}>{item.name}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default ReactKeys;