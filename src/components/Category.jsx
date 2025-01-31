import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import category_data from "../demodata/category";

export class Category extends Component {
  render() {
    return (
		<section className="travel_category pb100 wow fadeInUp">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-heading">
							<span>Popular Destination</span>
							<h2>Trendy Travel  Locations</h2>
						</div>
					</div>
					
					<div className="col-12">
						<div className="trcategory_slider">
							<Swiper
								spaceBetween={50}
								slidesPerView={6}
								loop={true}
								onSlideChange={() => console.log('slide change')}
								onSwiper={(swiper) => console.log(swiper)}
							>

								{category_data.map((item, i) => (
									<SwiperSlide key={i}>	
										<div className="category_item text-center">
											<a href={item.url}>
												<div className="tcat_image_wrap">
													<div className="tcat_img" style={{ backgroundImage:`url(${item.image})` }}>
														<i className="ph ph-arrow-square-out"></i>
													</div>
												</div>
												<h4>{item.title}</h4>
												<span>{item.counter} Places</span>
											</a>
										</div>
									</SwiperSlide>
								))}		

							</Swiper>
							
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}

export default Category