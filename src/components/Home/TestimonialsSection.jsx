import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './TestimonialsSection.css';
import homeData from '../../data/homeData.json';

const TestimonialsSection = () => {
  const { testimonials } = homeData;

  return (
    <section className="testimonials-section">
      <div className="container" style={{ textAlign: 'center' }}>
        <h2 className="section-title reveal">What They <span>Say?</span></h2>
        
        <div className="testimonials-slider-container reveal">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper"
          >
            {testimonials.map((item, i) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card">
                  <div className="testimonial-header">
                    <img src={`https://i.pravatar.cc/100?img=${(i % 50) + 1}`} alt={item.name} className="testimonial-avatar" />
                    <div className="testimonial-author">
                      <h4>{item.name}</h4>
                      <div className="stars">
                        {'★'.repeat(item.stars)}
                        {'☆'.repeat(5 - item.stars)}
                      </div>
                    </div>
                  </div>
                  <div className="testimonial-body">
                    <p>"{item.comment}"</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
