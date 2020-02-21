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

  if (value) {
    return (
      <div>
        <Input key={1} value={value} setValue={setValue} />
      </div>
    );
  } else {
    return (
      <span>
        <Input key={1} value={value} setValue={setValue} />
      </span>
    );
  }
};

export default StatefulInput;
