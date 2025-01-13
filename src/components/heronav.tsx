import React from 'react';
import { useSwiper } from 'swiper/react';

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div>
      <button onClick={() => swiper.slidePrev()} className="hs_prev_arrow harrow"><i className="ph ph-caret-left"></i></button>
      <button onClick={() => swiper.slideNext()} className="hs_next_arrow harrow"><i className="ph ph-caret-right"></i></button>
    </div>
  );
};