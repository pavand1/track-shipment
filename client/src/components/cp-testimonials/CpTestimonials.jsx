// src/components/TestimonialSlider/TestimonialSlider.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import testimonials from './CpTestimonials_data';
import styles from './cpTestimonials.module.scss';

const CpTestimonials = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      spaceBetween={30}
      slidesPerView={1}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      navigation={{
        nextEl: `.${styles.swiperButtonNext}`,
        prevEl: `.${styles.swiperButtonPrev}`,
      }}
      pagination={{
        clickable: true,
        el: `.${styles.swiperPagination}`,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id} className={styles.slide}>
          <div className={styles.avatarContainer}>
            <img
              src={testimonial.avatar}
              alt={`${testimonial.name}'s avatar`}
              className={styles.avatar}
            />
          </div>
          <h3 className={styles.heading}>{testimonial.name}</h3>
          <p className={styles.title}>{testimonial.title}</p>
          <p className={styles.testimonial}>{testimonial.testimonial}</p>
        </SwiperSlide>
      ))}

      {/* Add Navigation Arrows */}
      <div className={styles.swiperButtonPrev}></div>
      <div className={styles.swiperButtonNext}></div>

      {/* Pagination */}
      <div className={styles.swiperPagination}></div>
    </Swiper>
  );
};

export default CpTestimonials;
