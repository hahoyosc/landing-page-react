import './Header.css'
import React from 'react';
import Logo from '../../assets/full-logo.svg';

const Header = ({
                  onOurServicesClick,
                  onHeroClick,
                  onHighlightsClick,
                  onHowDoWeWorkClick,
                  onOurTeamClick
}) => {

  return (
    <nav>
      <div className={"header-logo-container"}>
        <img src={Logo} alt={""}/>
      </div>
      <div className={"header-links-container lato-bold"}>
        <a onClick={onHeroClick}>Inicio</a>
        <a onClick={onOurServicesClick}>Servicios</a>
        <a onClick={onHighlightsClick}>Destacados</a>
        <a onClick={onHowDoWeWorkClick}>¿Cómo funcionamos?</a>
        <a onClick={onOurTeamClick}>Nuestro equipo</a>
      </div>
    </nav>
  );
};

export default Header;