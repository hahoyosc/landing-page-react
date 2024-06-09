import './Highlights.css'
import React, {useState} from 'react';
import Tag from '../../assets/tag.svg'
import CircleButton from '../CircleButton/CircleButton';
import {Highlight1, Highlight2, Highlight3, Highlight4} from "../../assets/highlights";

const Highlights = React.forwardRef((props, ref) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  }
  const highlights = [
    Highlight1,
    Highlight2,
    Highlight3,
    Highlight4
  ];

  return (
    <div className={"highlights-container"} ref={ref}>
      <div className={"highlights-title"}>
        <h1 className={"lato-bold"}>Destacados de la semana</h1>
        <img src={Tag} alt={""}/>
      </div>
      <div className={"carousel"}>
        <video className="carousel-highlight" src={highlights[activeIndex]} controls="controls"/>
        <div className={"carousel-buttons"}>
          {highlights.map((highlight, index) => (
            <CircleButton
              key={index}
              onClick={() => handleClick(index)}
              isActive={activeIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

export default Highlights;