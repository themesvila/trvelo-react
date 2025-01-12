import React, { Component } from 'react'
import { Link } from "react-router-dom";
import herodata from "../demodata/hero";

export class Hero extends Component {
  render() {
    return (
      <div>
		
		<section className="tr_slider_wrap text-center wow fadeInUp">
			<div className="container-fluid">
				<div className="tr_slider">
					<div className="swiper-wrapper">
						{herodata.map((item, i) => (
							<div key={i} className="swiper-slide">
								<div className="slider_item" style={{ backgroundImage:`url(${item.image})` }}>
									<div className="container">
										<span className="subheading active_animation">{item.subtitle}</span>
										<h1 className="heading active_animation">{item.title}</h1>
										<p className="active_animation">{item.content}</p>
										<Link to={item.btnlink} className="yellow_btn active_animation">{item.btntext} <i className="ph ph-arrow-right"></i></Link>
									</div>
								</div>
							</div>
						))} 						
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