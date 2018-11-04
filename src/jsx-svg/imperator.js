import React from 'react';

const Imperator = ({ style, leafStyle }) => {
  let pathStyle = {
    fill: 'none',
    stroke: '#000000',
    strokeWidth: '0.26458332px',
    ...style
  }

  let leafPathStyle = {
    fill: 'none',
    strokeWidth: '.26458px',
    stroke: '#000',
    ...leafStyle
  }
  return (
    <svg viewBox="0 0 17.137 73.961" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(.54774 0 0 .54774 5.3243 26.954)">
        <path d="m0.88665 2.7395c1.6373-2.846 5.9459-3.8528 7.6566-0.49675 0.50244 1.2443 0.10922 2.7699 0.24299 4.13 0.0486 18.523 0.19752 37.051 0.1835 55.571-0.48938 4.6426-0.97877 9.2851-1.4682 13.928-0.9563 3.1736-1.2468 6.5765-2.6727 9.5883-3.0699-9.7022-4.1993-19.886-4.3565-30.027-0.56425-17.558-0.42639-35.148 0.41427-52.693z" style={pathStyle} />
        <path d="m0.36065 10.671c0.77894 0.13335 2.1371 0.14437 2.9293 0" style={pathStyle} />
        <path d="m0.36065 10.671c-0.21891 2.3463 1.4067 1.8464 3.0238 1.8899" style={pathStyle} />
        <path d="m8.8646 34.292c-1.183 0.0285-2.2144 0.70523-3.4963 0.47249h0.0945" style={pathStyle} />
        <path d="m0.26565 45.252c0.92195 0.0581 1.8267-0.1072 2.6458-0.28349" style={pathStyle} />
        <path d="m9.2446 56.692c-1.8273-0.0301-3.7136 0.0799-5.4807-0.0945" style={pathStyle} />
      </g>
      <path d="m5.81 28.454c-4.1179-2.9692-4.8239-6.4106-4.8396-8.4275 0.65107-0.91417 2.0854-0.5167 2.5962 0.04161-1.8888-3.0201-4.2398-5.6428-3.202-9.5908 0.60028-1.0526 2.5938 0.29299 3.3229 1.202-0.57898-2.2474-2.5227-3.8304-1.1884-7.1307 1.8213-2.1701 3.541-1.6089 4.1112 1.2629 0.3182-3.916 1.6102-5.5135 3.4949-5.6998 1.9018 0.4242 1.161 3.3966 1.1092 5.7046 3.1595-3.8359 6.7405-3.3998 1.3469 5.0707 6.056-2.3563 5.7491 0.29425 0.3025 7.5733 1.1125-0.78466 8.9585-2.6503-2.6802 10.006-0.97878-1.9199-3.0425-2.0381-4.3735-0.01243z" style={leafPathStyle} />
    </svg>
  )
}

export default Imperator