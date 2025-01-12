import React, { Component } from 'react'

export class TourFilter extends Component {
  render() {
    return (
		<section class="tour_packages wow fadeInUp">
			<div class="container">
				<div class="row">
					<div class="col-xl-12 text-center wow fadeInUp">
						<div class="section-heading">
							<span>Popular Tour</span>
							<h2>Amazing Tour Places</h2>
						</div>
					</div>
					
					<div class="col-xl-12">
						
						<ul class="package_nav">
							<li class="filter" data-filter="all">New</li>
							<li class="filter" data-filter=".featured">Featured</li>
							<li class="filter" data-filter=".discount">Discount</li>
							<li class="filter" data-filter=".popular">Popular</li>
						</ul>
						
						
						<div class="packages_wrap  wow fadeInUp">		
							<div class="row tour_items">
								<div class="col-xl-4 col-md-6 col-12 mix new featured">
									<div class="package_item">
										<div class="pack_image">
											<img src="assets/img/tour/1.jpg" alt="img" />
											<div class="pac_badge">
												<span class="feat">Featured</span>
												<span class="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" class="tour_btn"><i class="fa-regular fa-eye"></i></a>
										</div>	
										
										<div class="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div class="pac_location d-flex gap-2"><i class="ph ph-map-pin-area align-self-center"></i> <span class="align-self-center">Abu Dhabi, Dubai</span></div>
											<div class="pack_btm d-flex">
												<span class="pack_price">$245 / <small>Person</small></span>
												<span class="pack_rating ms-auto align-self-center"><i class="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div class="col-xl-4 col-md-6 col-12 mix new discount">
									<div class="package_item">
										<div class="pack_image">
											<img src="assets/img/tour/2.jpg" alt="img" />
											<div class="pac_badge">
												<span class="feat">30% Off</span>
												<span class="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" class="tour_btn"><i class="fa-regular fa-eye"></i></a>
										</div>	
										
										<div class="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div class="pac_location d-flex gap-2"><i class="ph ph-map-pin-area align-self-center"></i> <span class="align-self-center">Abu Dhabi, Dubai</span></div>
											<div class="pack_btm d-flex">
												<span class="pack_price">$245 / <small>Person</small></span>
												<span class="pack_rating ms-auto align-self-center"><i class="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div class="col-xl-4 col-md-6 col-12 mix new featured popular">
									<div class="package_item">
										<div class="pack_image">
											<img src="assets/img/tour/3.jpg" alt="img" />
											<div class="pac_badge">
												<span class="feat">Featured</span>
												<span class="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" class="tour_btn"><i class="fa-regular fa-eye"></i></a>
										</div>	
										
										<div class="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div class="pac_location d-flex gap-2"><i class="ph ph-map-pin-area align-self-center"></i> <span class="align-self-center">Abu Dhabi, Dubai</span></div>
											<div class="pack_btm d-flex">
												<span class="pack_price">$245 / <small>Person</small></span>
												<span class="pack_rating ms-auto align-self-center"><i class="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div class="col-xl-4 col-md-6 col-12 mix new discount popular">
									<div class="package_item">
										<div class="pack_image">
											<img src="assets/img/tour/4.jpg" alt="img" />
											<div class="pac_badge">
												<span class="feat">25% Off</span>
												<span class="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" class="tour_btn"><i class="fa-regular fa-eye"></i></a>
										</div>	
										
										<div class="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div class="pac_location d-flex gap-2"><i class="ph ph-map-pin-area align-self-center"></i> <span class="align-self-center">Abu Dhabi, Dubai</span></div>
											<div class="pack_btm d-flex">
												<span class="pack_price">$245 / <small>Person</small></span>
												<span class="pack_rating ms-auto align-self-center"><i class="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div class="col-xl-4 col-md-6 col-12 mix new discount popular">
									<div class="package_item">
										<div class="pack_image">
											<img src="assets/img/tour/5.jpg" alt="img" />
											<div class="pac_badge">
												<span class="feat">20% Off</span>
												<span class="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" class="tour_btn"><i class="fa-regular fa-eye"></i></a>
										</div>	
										
										<div class="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div class="pac_location d-flex gap-2"><i class="ph ph-map-pin-area align-self-center"></i> <span class="align-self-center">Abu Dhabi, Dubai</span></div>
											<div class="pack_btm d-flex">
												<span class="pack_price">$245 / <small>Person</small></span>
												<span class="pack_rating ms-auto align-self-center"><i class="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>

								<div class="col-xl-4 col-md-6 col-12 mix new popular featured">
									<div class="package_item">
										<div class="pack_image">
											<img src="assets/img/tour/6.jpg" alt="img" />
											<div class="pac_badge">
												<span class="feat">Featured</span>
												<span class="day">5 Days</span>
											</div>
											
											<a href="tour-details.html" class="tour_btn"><i class="fa-regular fa-eye"></i></a>
										</div>	
										
										<div class="pack_content">
											<h3><a href="tour-details.html">Acropolis, Parthenon, Plaka District 3 Day Athens Tour</a></h3>
											<div class="pac_location d-flex gap-2"><i class="ph ph-map-pin-area align-self-center"></i> <span class="align-self-center">Abu Dhabi, Dubai</span></div>
											<div class="pack_btm d-flex">
												<span class="pack_price">$245 / <small>Person</small></span>
												<span class="pack_rating ms-auto align-self-center"><i class="fa-regular fa-star"></i> 4.8</span>
											</div>
										</div>				
									</div>
								</div>
	
							</div>
						</div>	
						
						<div class="text-center mt-4  wow fadeInUp">
							<a href="tour.html" class="green_btn">Explore More <i class="ph ph-arrow-right"></i></a>
						</div>	
					</div>	
				</div>
			</div>
		</section>
			 
    )
  }
}

export default TourFilter