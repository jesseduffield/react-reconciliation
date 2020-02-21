import React, { Component, useState, useEffect } from 'react';
import './App.css';

import One from './examples/One';
import Two from './examples/Two';
import Three from './examples/Three';
import Four from './examples/Four';
import Five from './examples/Five';
import Six from './examples/Six';
import Seven from './examples/Seven';
import Eight from './examples/Eight';
import Nine from './examples/Nine';
import Ten from './examples/Ten';
import Eleven from './examples/Eleven';
import Twelve from './examples/Twelve';
import Thirteen from './examples/Thirteen';
import Fourteen from './examples/Fourteen';
import Fifteen from './examples/Fifteen';

const components = [
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  Ten,
  Eleven,
  Twelve,
  Thirteen,
  Fourteen,
  Fifteen,
];

const App = () => {
  const [value, setValue] = useState(0);

  const Component = components[value];

  return (
    <div className="App">
      <h1>Worlds #1 Input App</h1>
      <button
        onClick={() =>
          setValue(prev => (prev - 1 < 0 ? components.length - 1 : prev - 1))
        }
      >
        previous
      </button>
      <button
        onClick={() =>
          setValue(prev => (prev + 1 === components.length ? 0 : prev + 1))
        }
      >
        next
      </button>
      <h2>{`Example ${value + 1}`}</h2>
      <Component />
    </div>
  );
};

export default App;
