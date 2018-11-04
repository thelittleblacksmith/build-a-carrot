import React from 'react';

const Danvers = ({ style, leafStyle }) => {
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
    <svg viewBox="0 0 25.757 93.378" xmlns="http://www.w3.org/2000/svg">
      <g transform="matrix(1.0162 0 0 1.0162 -97.324 -62.363)">
        <g transform="translate(-17.693,-16.637)">
          <path d="m118.54 118.24c3.8754-1.4786 8.1011-0.7794 12.095-0.28348 1.5683 1.4809 2.9046 3.334 3.047 5.5554 0.53344 2.3686 0.24975 4.8765 0.28532 7.3025-0.19628 5.8955-0.88076 11.78-1.8879 17.586-1.4107 5.7033-2.8213 11.407-4.232 17.11-1.2785 1.1974-2.3191 2.7894-3.0889 4.2243-1.0212-0.36135-1.0211-2.6806-2.5484-3.1784-2.1241-1.297-1.7466-4.2618-2.602-6.3777-1.4631-6.054-2.7682-12.152-3.986-18.256-0.67124-6.3809-2.1752-13.126 0.34948-19.304 0.63725-1.5744 1.5131-3.0487 2.5683-4.3786z" style={pathStyle} />
          <path d="m115.19 124.81c1.0629 0.12517 2.2698 0.25016 3.274 0.4676 0.6832 0.15313 1.4379 0.0331 2.0713 0.2672" style={pathStyle} />
          <path d="m114.59 126.88c0.93355 0.36324 1.9244 0.44946 2.8731 0.60126 1.2173 0.14431 2.4986 0.0305 3.7418 0.0668" style={pathStyle} />
          <path d="m133.97 132.36c-1.2592 0.0503-2.4543-0.0549-3.6749-0.1336-0.55331-0.0763-1.1643-0.14123-1.8709-0.26723" style={pathStyle} />
          <path d="m134.04 134.1c-1.6299 0.0108-3.2179 0.0112-4.8108-0.1336-0.22202-0.29031-0.95697-0.0611-1.3363-0.1336" style={pathStyle} />
          <path d="m115.46 139.71c1.078 0.39547 2.315 0.11549 3.4663 0.20045h1.9459" style={pathStyle} />
          <path d="m132.24 147.75c0.66529-1.4966-0.70283-1.2206-1.7077-1.2194-1.1479 0.0878-2.1909-0.15991-3.3164-0.1336-0.0184-0.23237-0.83517-0.0967-1.1359-0.13364" style={pathStyle} />
          <path d="m118.33 155.21c0.89357 0.15598 1.781 0.32688 2.7638 0.2672 0.86175-0.0214 1.7059 0.0879 2.4478-0.2004l-0.0668 0.0668" style={pathStyle} />
          <path d="m118.73 156.68c1.1235 0.28582 2.3668 0.0641 3.5413 0.13363 0.63225-0.0393 1.2512-0.0755 1.804-0.26723" style={pathStyle} />
        </g>
      </g>
      <g transform="translate(1.7789 -17.941)">
        <path d="m5.2745 58.186c-6.0304-4.3482-5.9797-7.5543-6.0027-10.508 0.95344-1.3387 3.0539-0.75666 3.8019 0.060939-2.766-4.4227-6.2089-8.2635-4.6891-14.045 0.87907-1.5415 3.7984 0.42906 4.8661 1.7603-0.84787-3.2912-3.6944-5.6093-1.7404-10.442 2.6672-3.178 5.1855-2.3561 6.0205 1.8494 0.46598-5.7348 2.358-8.0742 5.118-8.3469 2.785 0.62121 1.7002 4.9741 1.6244 8.3539 4.6269-5.6174 9.871-4.9787 1.9725 7.4257 8.8686-3.4506 8.4191 0.43091 0.44299 11.091 1.6292-1.1491 14.811-5.5199-2.2329 13.015-2.8636-0.34994-5.5645-0.93032-9.1814-0.21307z" style={leafPathStyle} />
      </g>
    </svg>
  )
}

export default Danvers