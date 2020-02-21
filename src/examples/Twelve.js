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

class StatefulInput extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  render() {
    const { value } = this.state;
    const setValue = newValue => this.setState({ value: newValue });

    const Wrapper = ({ v, sV }) => <Input value={value} setValue={setValue} />;

    return <Wrapper v={value} sV={setValue} />;
  }
}

export default StatefulInput;
