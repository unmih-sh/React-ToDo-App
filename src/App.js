import React from 'react';
import ToDo from './ToDo';

function App(props) {
  const styles = {
    fontFamily: ['Arial', 'sans-serif']
  };
  return (
    <div style={styles}>
      <ToDo name="Mihir" />
    </div>
  );
}

export default App;
