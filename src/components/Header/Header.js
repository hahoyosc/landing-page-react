import './Header.css'
import React, {useState} from 'react';
import Logo from '../../assets/full-logo.svg';
import {IoMenu} from "react-icons/io5";
import {Drawer} from "@mui/material";

const Header = ({
                  onOurServicesClick,
                  onHeroClick,
                  onHighlightsClick,
                  onHowDoWeWorkClick,
                  onOurTeamClick
}) => {

  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    'Inicio',
    'Servicios',
    'Destacados',
    '¿Cómo funcionamos?',
    'Nuestro equipo'
  ];

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
      <div className={"header-menu-container"}>
        <IoMenu onClick={() => setOpenMenu(true)} color={"#333333"} size={50}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor={"right"}></Drawer>
    </nav>
  );
};

export default Header;