import React, { Component } from 'react'

export class Hero extends Component {
  render() {
    return (
      <div>
		
		<section className="tr_slider_wrap text-center wow fadeInUp">
			<div className="container-fluid">
				<div className="tr_slider">
					<div className="swiper-wrapper">
						<div className="swiper-slide">
							<div className="slider_item" style={{ backgroundImage: `url(/assets/img/slider/1.jpg)` }}>
								<div className="container">
									<span className="subheading active_animation">Best Choice for Family</span>
									<h1 className="heading active_animation">Embark on Your Next <br /> Adventure Today !</h1>
									<p className="active_animation">There are many variations of passages of Lorem Ipsum available, but the <br /> 
									majority have suffered alteration in some form</p>
									<a href="#" className="yellow_btn active_animation">Explore More <i className="ph ph-arrow-right"></i></a>
								</div>
							</div>
						</div>

						<div className="swiper-slide">
							<div className="slider_item" style={{ backgroundImage: `url(/assets/img/slider/2.jpg)` }}>
								<div className="container">
									<span className="subheading active_animation">The Perfect Choice for Family</span>
									<h1 className="heading active_animation">Begin Your Next <br /> Adventure Today !</h1>
									<p className="active_animation">There are many variations of passages of Lorem Ipsum available, but the <br /> 
									majority have suffered alteration in some form</p>
									<a href="#" className="yellow_btn active_animation">Explore More <i className="ph ph-arrow-right"></i></a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="hs_prev_arrow harrow"><i className="ph ph-caret-left"></i></div>
					<div className="hs_next_arrow harrow"><i className="ph ph-caret-right"></i></div>
				</div>
			</div>
		</section>
		   
      </div>
    )
  }
}

export default Hero