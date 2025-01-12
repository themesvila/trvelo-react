import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (   
		<section class="tr_about" style={{ backgroundImage: `url(assets/img/bg/about_bg.jpg)` }}>
			<div class="container">
				<div class="row">
					<div class="col-xl-6 wow fadeInLeft">
						<div class="about_image position-relative">
							<img src="assets/img/about/1.png" class="ab_img_1" alt="img" />
							<img src="assets/img/about/2.png" class="ab_img_2" alt="img" />
							<div class="about_badge">
								<span>Established In</span>
								<h3>1980</h3>
							</div>
							<img src="assets/img/about/plane_shape.png" alt="img" class="about_shape" />
						</div>
					</div>
					
					<div class="col-xl-6 align-self-center wow fadeInRight">
						<div class="about_content ">
							<div class="section-heading">
								<span>About Our Company</span>
								<h2>Discover Every Corner of The <br /> 
								World With Us</h2>
							</div>
							
							<p>
								There are many variations of passages of Lorem Ipsum available, 
								but the  majority have suffered alteration in some form, by injected 
								humour, or  randomised words which don't look even slightly 
								believable. If you are  going to use a passage of Lorem Ipsum
							</p>
							<div class="d-flex gap-4 about_btm">
								<a href="#" class="green_btn">About Info <i class="ph ph-arrow-right"></i></a>
								<div class="phone_number align-self-center">
									<i class="ph ph-phone-call"></i> <a href="tel:+880325468756">+88032 546 87 56</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}

export default About