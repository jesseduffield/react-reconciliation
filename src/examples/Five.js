import React, { Component, useState, useEffect } from 'react';

const Input = ({ value, setValue }) => {
  useEffect(() => {
    console.log('\n\ninput mounted\n\n');
  }, []);

  return (
    <input
      value={value}
      onChange={event => {
        setValue(event.target.value);
      }}
    />
  );
};

const StatefulInput = ({ component }) => {
  const [value, setValue] = useState('');

  const extra = value
    ? [<>value</>, <>value</>, <Input value={value} setValue={setValue} />]
    : [<Input value={value} setValue={setValue} />];

  return <>{extra}</>;
};

export default StatefulInput;
