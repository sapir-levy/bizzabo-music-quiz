import React from 'react';
import './hint.css';

const Hint = (props) => {
  return (
    <div className="hint-container">
      <span className="hint-text">Need a hint?</span>
      <img src={props.img}/>
    </div>
  );
};

export default Hint;

