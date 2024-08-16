import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import { testimonials } from './CpOurClients_data'; // Import the mock data
import styles from './cpOurClients.module.scss';

const CpOurClients = () => {
  return (
    <div className={styles.sliderContainer}>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        className={styles.swiper}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            <div className={styles.testimonial}>
              <p className={styles.feedback}>"{testimonial.feedback}"</p>
              <h4 className={styles.client}>{testimonial.client}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CpOurClients;
