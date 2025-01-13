import React, { Component } from 'react'
import testimonials_data from "../demodata/testimonials";

export class Testimonials extends Component {
  render() {
    return (
		<section class="testimonials" style={{ backgroundImage: `url(assets/img/bg/rev_bg.png)` }}>
			<div class="container">
				<div class="row">
					<div class="col-lg-6 wow fadeInLeft">
						<div class="testimonials_image">
							<div class="row">
								<div class="col-sm-6 text-center">
									<img src="assets/img/review/1.png" class="test_image1" alt="img" />
									<img src="assets/img/review/2.png" class="test_image3" alt="img" />
								</div>
								
								<div class="col-sm-6 align-self-center text-center">
									<img src="assets/img/review/3.png" class="test_image2" alt="img" />
									<div class="test_arrow">
										<span class="tarrow_left"><i class="ph ph-arrow-left"></i></span>
										<span class="tarrow_right"><i class="ph ph-arrow-right"></i></span>
									</div>	
								</div>	
	
							</div>
						</div>
					</div>

					<div class="col-lg-6 align-self-center overflow wow fadeInRight">
						<div class="section-heading mb-40 position-relative">
							<span>Testimonials</span>
							<h2>Our Valuable Customer Says</h2>
							<hr />
							<img src="assets/img/icons/quote.svg" class="test_quote" alt="" />
						</div>
						
						<div class="test_slider">
							<div class="swiper-wrapper">
							 {testimonials_data.map((item, i) => (
								<div key={i} class="swiper-slide">
									<div class="testimonials_item">
										<div class="test_rating">
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
											<i class="fa-solid fa-star"></i>
										</div>
										
										<p>
											“{item.content}”																									
										</p>
										<h4>{item.name}</h4>
										<span class="designation">{item.designation}</span>
									</div>
								</div>
								                      
								))}							
	
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}

export default Testimonials