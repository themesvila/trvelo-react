import React from 'react';
import { useSwiper } from 'swiper/react';

export const TestimonialNav = () => {
  const swiper = useSwiper();

  return (
    <div className="test_arrow">
      <span onClick={() => swiper.slidePrev()} className="tarrow_left"><i className="ph ph-caret-left"></i></span>
      <span onClick={() => swiper.slideNext()} className="tarrow_right"><i className="ph ph-caret-right"></i></span>
    </div>
  );
};