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

  return [
    ...(value ? [value] : []),
    <Input value={value} setValue={setValue} />,
  ];
};

export default StatefulInput;
