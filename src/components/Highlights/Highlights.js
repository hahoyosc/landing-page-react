import './Highlights.css'
import React, {useState} from 'react';
import Tag from '../../assets/tag.svg'
import CircleButton from '../CircleButton/CircleButton';
import highlight1 from '../../assets/002649-highlight.mp4';
import highlight2 from '../../assets/005123-goal.mp4';
import highlight3 from '../../assets/001145-goal.mp4';

const Highlights = React.forwardRef((props, ref) => {

  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    setActiveIndex(index);
  }
  const highlights = [
    highlight1,
    highlight2,
    highlight3
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
          <CircleButton onClick={() => {
            handleClick(0)
          }} isActive={activeIndex === 0}/>
          <CircleButton onClick={() => {
            handleClick(1)
          }} isActive={activeIndex === 1}/>
          <CircleButton onClick={() => {
            handleClick(2)
          }} isActive={activeIndex === 2}/>
        </div>
      </div>
    </div>
  );
});

export default Highlights;