// src/components/ClientSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'; // Updated Swiper styles import
import '../../../public/';
import 'swiper/modules/pagination/pagination.min.css';
import { mockClients } from './CpOurClients_data';

const CpOurClients = () => {
  return (
    <div className="client-slider">
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {mockClients.map((client) => (
          <SwiperSlide key={client.id}>
            <div className="client-slide">
              <img src={client.logo} alt={client.name} />
              <p>{client.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CpOurClients;