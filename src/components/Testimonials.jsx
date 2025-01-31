import React, { Component } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import testimonials_data from "../demodata/testimonials";
import { TestimonialNav } from '../components/testinav';

export class Testimonials extends Component {
  render() {
    return (
		<section className="testimonials" style={{ backgroundImage: `url(assets/img/bg/rev_bg.png)` }}>
			<div className="container">
				<div className="row">
					<div className="col-lg-6 wow fadeInLeft">
						<div className="testimonials_image">
							<div className="row">
								<div className="col-sm-6 text-center">
									<img src="assets/img/review/1.png" className="test_image1" alt="img" />
									<img src="assets/img/review/2.png" className="test_image3" alt="img" />
								</div>
								
								<div className="col-sm-6 align-self-center text-center">
									<img src="assets/img/review/3.png" className="test_image2" alt="img" />
									<TestimonialNav />
								</div>	
	
							</div>
						</div>
					</div>

					<div className="col-lg-6 align-self-center overflow wow fadeInRight">
						<div className="section-heading mb-40 position-relative">
							<span>Testimonials</span>
							<h2>Our Valuable Customer Says</h2>
							<hr />
							<img src="assets/img/icons/quote.svg" className="test_quote" alt="" />
						</div>
						
						<div className="test_slider">
						
						<Swiper
								spaceBetween={0}
								slidesPerView={1}
								loop={true}
								onSlideChange={() => console.log('slide change')}
								onSwiper={(swiper) => console.log(swiper)}
							>

								{testimonials_data.map((item, i) => (
									<SwiperSlide key={i}>
										<div className="testimonials_item">
											<div className="test_rating">
												<i className="fa-solid fa-star"></i>
												<i className="fa-solid fa-star"></i>
												<i className="fa-solid fa-star"></i>
												<i className="fa-solid fa-star"></i>
												<i className="fa-solid fa-star"></i>
											</div>
											
											<p>
												“{item.content}”																									
											</p>
											<h4>{item.name}</h4>
											<span className="designation">{item.designation}</span>
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

export default Testimonials