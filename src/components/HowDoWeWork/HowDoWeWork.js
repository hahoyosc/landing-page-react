import './HowDoWeWork.css'
import React from 'react';
import Card from '../Card/Card';

const HowDoWeWork = React.forwardRef((props, ref) => {

  return (
    <div className={"how-do-we-work-container"} ref={ref}>
      <h1 className={"lato-bold"}>¿Cómo funcionamos?</h1>
      <div className={"cards"}>
        <Card
          icon={"whatsapp"}
          title={"Contáctanos"}
          description={["Contáctanos a través de WhatsApp o redes sociales y ",
            "agenda tu servicio de grabación indicándonos lugar y hora del partido."]}
        />
        <Card
          icon={"ball"}
          title={"Juega el partido"}
          description={["Desarrolla tu partido ", "con normalidad."]}
        />
        <Card
          icon={"cloud"}
          title={"Recibe los videos de tu partido"}
          description={["Recibirás un link donde podrás ver y descargar, el mejor contenido de tu partido: ",
            "video completo, jugadas destacadas y más."]}
        />
      </div>
    </div>
  );
});

export default HowDoWeWork;