import './OurTeam.css'
import React, {useEffect, useState} from 'react';
import Hector from '../../assets/hector.jpg'
import Santiago from '../../assets/santiago.jpg'
import Sebastian from '../../assets/sebastian.jpg'

const OurTeam = React.forwardRef((props, ref) => {

  const avatars = [
    Hector,
    Santiago,
    Sebastian
  ];
  let [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === avatars.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [avatars.length]);

  return (
    <div className={"our-team-container"} ref={ref}>
      <h1 className={"lato-bold"}>Nuestro equipo</h1>
      <div className={"our-team-content"}>
        <div className={"avatar"}>
          {avatars.map((avatar, index) => (
            <img
              key={index}
              src={avatar}
              alt={""}
              className={index === currentIndex ? "" : "hidden"}
            />
          ))}
        </div>
        <div className={"our-team-info"}>
          <h2 className={"lato-bold"}>¡El fútbol también es nuestra pasión!</h2>
          <p className={"lato-regular"}>Somos <strong>Sebastián</strong>, <strong>Héctor</strong> y <strong>Santiago</strong>,
            trabajamos para que vivas la pasión del fútbol hasta fuera de la cancha.</p>
        </div>
      </div>
    </div>
  );
});

export default OurTeam;