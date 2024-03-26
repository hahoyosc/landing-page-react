import './Card.css'
import React from 'react';
import {IoLogoWhatsapp, IoCloudDownloadOutline} from "react-icons/io5";
import {IoIosFootball} from "react-icons/io";

const Card = ({icon, title, description}) => {

  const iconColor = "#268BA9";
  const iconSize = 100;

  let renderedIcon;
  if (icon === "whatsapp") {
    renderedIcon = <IoLogoWhatsapp color={iconColor} size={iconSize} />;
  } else if (icon === "ball") {
    renderedIcon = <IoIosFootball color={iconColor} size={iconSize} />;
  } else {
    renderedIcon = <IoCloudDownloadOutline color={iconColor} size={iconSize} />;
  }

  return (
    <div className={"card"}>
      <div className={"card-icon"}>
        {renderedIcon}
      </div>
      <div className="card-content">
        <h2 className={"lato-bold"}>{title}</h2>
        <p className={"lato-regular"}>
          {description[0]}
          <strong>{description[1]}</strong>
        </p>
      </div>
    </div>
  );
};

export default Card;