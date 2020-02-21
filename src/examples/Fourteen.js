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
    }, 3000);
  }, []);

  const renderFirstForm = () => (
    <>
      <h1>My form</h1>
      <div>
        <h4>People I like</h4>
        <Input />
      </div>

      <div>
        <p>People I don't mind</p>
        <Input />
      </div>
    </>
  );

  const renderSecondForm = () => (
    <>
      <h3>My completely different form</h3>
      <div>
        <p>People I hate</p>
        <Input />
      </div>
      <h2>blah blah blah</h2>
      <p>ha ha ha</p>
    </>
  );

  if (!swap) {
    return renderFirstForm();
  } else {
    return renderSecondForm();
  }
};

export default StatefulInput;
