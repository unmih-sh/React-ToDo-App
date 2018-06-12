import React from 'react';
import '../styles/stylesheet.css';

const Greeter = props => {
  return (
    <div className="greeting">
      <h2>Hello, {props.name}!</h2>
      <h3>Start adding your To-Dos!</h3>
    </div>
  );
};
export default Greeter;
