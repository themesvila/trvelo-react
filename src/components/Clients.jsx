import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import clients_data from "../demodata/clients";

export default class Clients extends Component {
  render() {
    return (
	
		<div className="tr_clients wow fadeInUp">
			<div className="container-fluid">
				<div className="clients_slider">
				<Swiper
					spaceBetween={100}
					slidesPerView={6}
					loop={true}
					onSlideChange={() => console.log('slide change')}
					onSwiper={(swiper) => console.log(swiper)}
					>
						{clients_data.map((item, i) => (
							<SwiperSlide key={i}>	
								<div key={i} className="client_item">
									<a href={item.url}><img src={item.image} alt="img" /></a>
								</div>	       
							</SwiperSlide>
						))}
		
					</Swiper>
										
				</div>
			</div>
		</div>
	
    )
  }
}
