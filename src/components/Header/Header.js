import './Header.css'
import React, {useState} from 'react';
import Logo from '../../assets/full-logo.svg';
import {IoMenu} from "react-icons/io5";
import {Box, Drawer, List, ListItem, ListItemButton, ListItemText, Typography} from "@mui/material";

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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenMenu(open);
  };

  return (
    <nav className={"header-container"}>
      <div className={"header-menu-container lato-bold"}>
        <IoMenu onClick={toggleDrawer(true)} color={"#333333"} size={50}/>
        <Drawer className={"header-drawer"} open={openMenu} onClose={toggleDrawer(false)}>
          <Box sx={{width: 250}} role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
            <List>
              {menuOptions.map((option, index) => (
                <ListItem key={option}>
                  <ListItemButton onClick={() => {
                    switch (index) {
                      case 0:
                        onHeroClick();
                        break;
                      case 1:
                        onOurServicesClick();
                        break;
                      case 2:
                        onHighlightsClick();
                        break;
                      case 3:
                        onHowDoWeWorkClick();
                        break;
                      case 4:
                        onOurTeamClick();
                        break;
                      default:
                        break;
                    }
                  }}>
                    <ListItemText
                      disableTypography
                      primary={<Typography variant="p" style={{color: '#333333'}}>{option}</Typography>}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </div>
      <div className={"header-logo-container"}>
        <img src={Logo} alt={""}/>
      </div>
      <div className={"header-buttons-container lato-bold"}>
        <button title={menuOptions[0]} onClick={onHeroClick}>{menuOptions[0]}</button>
        <button title={menuOptions[1]} onClick={onOurServicesClick}>{menuOptions[1]}</button>
        <button title={menuOptions[2]} onClick={onHighlightsClick}>{menuOptions[2]}</button>
        <button title={menuOptions[3]} onClick={onHowDoWeWorkClick}>{menuOptions[3]}</button>
        <button title={menuOptions[4]} onClick={onOurTeamClick}>{menuOptions[4]}</button>
      </div>
    </nav>
  );
};

export default Header;