// import Swiper core and required modules
import { Navigation,  A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import herodata from "../demodata/hero";
import { SwiperNavButtons } from '../components/heronav';

export class Hero extends Component {
  render() {
    return (
      <div>
		<section className="tr_slider_wrap text-center wow fadeInUp">
			<div className="container-fluid">
				<div className="tr_slider">		
					<Swiper
						// Swiper modules
						modules={[Navigation , EffectFade, A11y]}
						loop={true}
						spaceBetween={50}
						slidesPerView={1}								
						effect="fade"
						EffectFade 
						onSwiper={(swiper) => console.log(swiper)}
						onSlideChange={() => console.log('slide change')}
						>
						{herodata.map((item, i) => (
							<SwiperSlide key={i}>				
								<div className="slider_item" style={{ backgroundImage:`url(${item.image})` }}>
									<div className="container">
										<span className="subheading active_animation">{item.subtitle}</span>
										<h1 className="heading active_animation">{item.title}</h1>
										<p className="active_animation">{item.content}</p>
										<Link to={item.btnlink} className="yellow_btn active_animation">{item.btntext} <i className="ph ph-arrow-right"></i></Link>
									</div>
								</div>
							</SwiperSlide>
						))} 
						<SwiperNavButtons />				
					</Swiper>
					{/* <div className="hs_prev_arrow harrow" ref={hs_prev_arrow}><i className="ph ph-caret-left"></i></div>
					<div className="hs_next_arrow harrow" ref={hs_next_arrow}><i className="ph ph-caret-right"></i></div> */}
				</div>
			</div>
		</section>
		   
      </div>
    )
  }
}

export default Hero