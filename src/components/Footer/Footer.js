import './Footer.css'
import React from 'react';
import {IoLogoWhatsapp} from "react-icons/io5";

const Footer = () => {

  return (
    <div className={"contact-us-container"}>
      <div className={"contact-us-content"}>
        <h1 className={"lato-bold"}>Comunícate con nosotros</h1>
        <h2 className={"lato-bold"}>Escríbenos y agenda tu grabación</h2>
        <p className={"lato-regular"}>*Las grabaciones deben de agendarse como mínimo con un día de anticipación.</p>
        <div className={"recording-button"} onClick={() => {
          window.open(
            "https://api.whatsapp.com/send/?phone=573195520962&text=%C2%A1Hola%21+Estoy+interesado%2Fa+en+agendar+una+grabaci%C3%B3n+para+un+evento+deportivo&type=phone_number&app_absent=0",
            "_blank",
            "noreferrer"
          )}}>
          <IoLogoWhatsapp className={"recording-icon"} color={"#268BA9"} />
          <p className={"lato-bold"}>Graben mi partido</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;