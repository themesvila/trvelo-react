import React, { Component } from 'react'
import features_data from "../demodata/features";

export class Features extends Component {
  render() {
    return (
		
		<section className="features section-padding wow fadeInUp">
			<div className="container">
				<div className="row">
					<div className="col-12 wow fadeInUp">
						<div className="section-heading text-center">
							<span>Special Features</span>
							<h2>Our Tour Features</h2>
						</div>
					</div>
				</div>
				
				<div className="row">
					{features_data.map((item, i) => (
						<div key={i} className="col-xl-3 col-md-6 col-12 wow fadeInUp">
							<div className="feature_item">
								<i className={item.icon}></i>
								<div className="feature_content">
									<h3>{item.title}</h3>
									<p>
										{item.content}
									</p>
								</div>
							</div>
						</div>                 
					))}                    

				</div>
			</div>
		</section>
		
    )
  }
}

export default Features