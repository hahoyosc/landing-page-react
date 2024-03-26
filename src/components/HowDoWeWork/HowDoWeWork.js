import './HowDoWeWork.css'
import React from 'react';
import Card from '../Card/Card';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const HowDoWeWork = React.forwardRef((props, ref) => {

  const cardsInfo = [
    {
      id: 1,
      icon: "whatsapp",
      title: "Contáctanos",
      description: ["Contáctanos a través de WhatsApp o redes sociales y ",
        "agenda tu servicio de grabación indicándonos lugar y hora del partido."]
    },
    {
      id: 2,
      icon: "ball",
      title: "Juega el partido",
      description: ["Desarrolla tu partido ", "con normalidad."]
    },
    {
      id: 3,
      icon: "cloud",
      title: "Recibe los videos de tu partido",
      description: ["Recibirás un link donde podrás ver y descargar, el mejor contenido de tu partido: ",
        "video completo, jugadas destacadas y más."]
    }
  ];

  return (
    <div className={"how-do-we-work-container"} ref={ref}>
      <h1 className={"lato-bold"}>¿Cómo funcionamos?</h1>
      <div className={"cards"}>
        {cardsInfo.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className={"cards-swiper"}>
        <Swiper
          spaceBetween={5}
          slidesPerView={1.3}
          centeredSlides={true}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {cardsInfo.map((card) => (
            <SwiperSlide key={card.id}>
              <Card
                key={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
});

export default HowDoWeWork;