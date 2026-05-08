import React from 'react';
import './Ex3.scss';

const Ex3 = ({ size = 'md', variant, children }) => {
  return (
    <button className={`btn btn-${size}${variant ? ` ${variant}` : ''}`}>
      {children}
    </button>
  );
};

export default Ex3;
