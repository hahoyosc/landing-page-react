import './CircleButton.css';
import React from 'react';
import {FaCircle} from 'react-icons/fa6';
import {FaRegCircle} from 'react-icons/fa6';

const CircleButton = ({isActive, onClick}) => {

  const iconSize = 15;
  const iconColor = "white";

  return (
    <div onClick={onClick} className='circle-btn'>
      <button onClick={onClick} className="toggle">
        {isActive ? <FaCircle color={iconColor} size={iconSize} /> : <FaRegCircle color={iconColor} size={iconSize} />}
      </button>
    </div>
  );
}

export default CircleButton;