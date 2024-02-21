import './Hero.css'
import React from 'react';

const Hero = React.forwardRef((props, ref) => {
  return (
    <div className={"hero-container"} ref={ref}>
      <div className={"hero-content"}>
        <h2 className={"lato-regular"}>¡YA ESTAMOS LISTOS!</h2>
        <p className={"lato-black"}>El fútbol amateur nunca <br/> se sintió tan profesional</p>
        <h2 className={"lato-regular"}>¡Siéntete #Likeapro!</h2>
      </div>
    </div>
  );
});

export default Hero;