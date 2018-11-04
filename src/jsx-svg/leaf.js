import React from 'react';

const Leaf = ({ style }) => {
  let pathStyle = { 
    fill:"none",
    strokeWidth:"1px",
    stroke:"#000",
    ...style
  }
  return (
    <svg viewBox="0 0 12.254 13.369" xmlns="http://www.w3.org/2000/svg" id="leaf-svg">
      <g transform="translate(-101.97 -119.47)">
        <path d="m105.44 132.44c-0.18634-0.23622-0.67236-0.55738-0.94482-0.83636-0.70787-0.72479-1.306-1.0874-2.2192-4.2119-1.253-6.1439 1.8868-5.6823 4.0736-1.3235-0.1966-7.7407 4.1022-9.7576 3.3222 0.0189 0.37572-1.8762 5.6679-6.3648 4.311 0.73739-0.68846 2.073-1.2782 4.1648-3.2431 5.9936l-5.2404-0.30252z" style={pathStyle} />
      </g>
    </svg>
  );
}

export default Leaf;