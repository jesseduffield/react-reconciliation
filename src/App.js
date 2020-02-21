import React, { Component, useState, useEffect } from 'react';
import './App.css';

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

  return <Input value={value} setValue={setValue} />;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Worlds #1 Input App</h1>
        <StatefulInput />
      </div>
    );
  }
}

export default App;
