import React, { Component, useState, useEffect } from 'react';

const Input = ({}) => {
  useEffect(() => {
    console.log('\n\ninput mounted\n\n');
  }, []);

  return <input />;
};

const StatefulInput = ({ component }) => {
  const [swap, setSwap] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setSwap(true);
    }, 1500);
  }, []);

  if (swap) {
    return [
      <div>
        <p>Input 1</p>
        <Input />
      </div>,
      <div>
        <p>Input 2</p>
        <Input />
      </div>,
    ];
  } else {
    return [
      <div>
        <p>Input 2</p>
        <Input />
      </div>,
      <div>
        <p>Input 1</p>
        <Input />
      </div>,
    ];
  }
};

export default StatefulInput;
