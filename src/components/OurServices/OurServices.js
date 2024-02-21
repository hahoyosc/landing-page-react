import './OurServices.css'
import React from 'react';
import Mesh from '../../assets/mesh.png'
import FootballMan from '../../assets/football-man.png'

const OurServices = React.forwardRef((props, ref) => {
  return (
    <div className={"services-container"} ref={ref}>
      <img className={"mesh"} src={Mesh} alt={""}/>
      <div className={"services-content"}>
        <img className={"football-man"} src={FootballMan} alt={""}/>
        <div className={"services-info"}>
          <h1 className={"lato-bold"}>¿Qué te ofrecemos?</h1>
          <h2 className={"lato-bold"}>Siéntete como un profesional en la cancha.</h2>
          <p className={"lato-regular"}>Juega tu partido y <strong>#SiénteteLikeaPro</strong> mientras graban tus
            mejores jugadas.</p>
        </div>
      </div>
    </div>
  );
});

export default OurServices;