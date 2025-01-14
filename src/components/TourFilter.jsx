import React, { Component } from 'react'

export class TourFilter extends Component {
  render() {
    return (
		<section className="tour_packages wow fadeInUp">
			<div className="container">
				<div className="row">
					<div className="col-xl-12 text-center wow fadeInUp">
						<div className="section-heading">
							<span>Popular Tour</span>
							<h2>Amazing Tour Places</h2>
						</div>
					</div>
					
					<div className="col-xl-12">
						
						<ul className="package_nav">
							<li className="filter" data-filter="all">New</li>
							<li className="filter" data-filter=".featured">Featured</li>
							<li className="filter" data-filter=".discount">Discount</li>
							<li className="filter" data-filter=".popular">Popular</li>
						</ul>
						
						
						<div className="packages_wrap  wow fadeInUp">		
							<div className="row tour_items">
								<div className="col-xl-4 col-md-6 col-12 mix new featured">
									<div className="package_item">
										<div className="pack_image">
											<img src="assets/img/tour/1.jpg" alt="img" />
											<div className="pac_badge">
												<span className="feat">Featured</span>
												<span className="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" className="tour_btn"><i className="fa-regular fa-eye"></i></a>
										</div>	
										
										<div className="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
											<div className="pack_btm d-flex">
												<span className="pack_price">$245 / <small>Person</small></span>
												<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div className="col-xl-4 col-md-6 col-12 mix new discount">
									<div className="package_item">
										<div className="pack_image">
											<img src="assets/img/tour/2.jpg" alt="img" />
											<div className="pac_badge">
												<span className="feat">30% Off</span>
												<span className="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" className="tour_btn"><i className="fa-regular fa-eye"></i></a>
										</div>	
										
										<div className="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
											<div className="pack_btm d-flex">
												<span className="pack_price">$245 / <small>Person</small></span>
												<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div className="col-xl-4 col-md-6 col-12 mix new featured popular">
									<div className="package_item">
										<div className="pack_image">
											<img src="assets/img/tour/3.jpg" alt="img" />
											<div className="pac_badge">
												<span className="feat">Featured</span>
												<span className="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" className="tour_btn"><i className="fa-regular fa-eye"></i></a>
										</div>	
										
										<div className="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
											<div className="pack_btm d-flex">
												<span className="pack_price">$245 / <small>Person</small></span>
												<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div className="col-xl-4 col-md-6 col-12 mix new discount popular">
									<div className="package_item">
										<div className="pack_image">
											<img src="assets/img/tour/4.jpg" alt="img" />
											<div className="pac_badge">
												<span className="feat">25% Off</span>
												<span className="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" className="tour_btn"><i className="fa-regular fa-eye"></i></a>
										</div>	
										
										<div className="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
											<div className="pack_btm d-flex">
												<span className="pack_price">$245 / <small>Person</small></span>
												<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div className="col-xl-4 col-md-6 col-12 mix new discount popular">
									<div className="package_item">
										<div className="pack_image">
											<img src="assets/img/tour/5.jpg" alt="img" />
											<div className="pac_badge">
												<span className="feat">20% Off</span>
												<span className="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" className="tour_btn"><i className="fa-regular fa-eye"></i></a>
										</div>	
										
										<div className="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
											<div className="pack_btm d-flex">
												<span className="pack_price">$245 / <small>Person</small></span>
												<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div className="col-xl-4 col-md-6 col-12 mix new popular featured">
									<div className="package_item">
										<div className="pack_image">
											<img src="assets/img/tour/6.jpg" alt="img" />
											<div className="pac_badge">
												<span className="feat">Featured</span>
												<span className="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" className="tour_btn"><i className="fa-regular fa-eye"></i></a>
										</div>	
										
										<div className="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div className="pac_location d-flex gap-2"><i className="ph ph-map-pin-area align-self-center"></i> <span className="align-self-center">Abu Dhabi, Dubai</span></div>
											<div className="pack_btm d-flex">
												<span className="pack_price">$245 / <small>Person</small></span>
												<span className="pack_rating ms-auto align-self-center"><i className="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>
	
							</div>
						</div>	
						
						<div className="text-center mt-4  wow fadeInUp">
							<a href="tour.html" className="green_btn">Explore More <i className="ph ph-arrow-right"></i></a>
						</div>	
					</div>	
				</div>
			</div>
		</section>
			 
    )
  }
}

export default TourFilter