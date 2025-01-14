import React, { Component } from 'react'

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
						<div className="trcategory_slider owl-carousel">
							<div className="category_item text-center">
								<a href="#">
									<div className="tcat_image_wrap">
										<div className="tcat_img" style={{ backgroundImage: `url(/assets/img/category/1.png)` }}>
											<i className="ph ph-arrow-square-out"></i>
										</div>
									</div>
									<h4>Abu Dhabi</h4>
									<span>200 Places</span>
								</a>
							</div>							
							
							<div className="category_item text-center">
								<a href="#">
									<div className="tcat_image_wrap">
										<div className="tcat_img" style={{ backgroundImage: `url(/assets/img/category/2.png)` }}>
											<i className="ph ph-arrow-square-out"></i>
										</div>
									</div>
									<h4>Australia</h4>
									<span>150 Places</span>
								</a>
							</div>	

							<div className="category_item text-center">
								<a href="#">
									<div className="tcat_image_wrap">
										<div className="tcat_img" style={{ backgroundImage: `url(/assets/img/category/3.png)` }}>
											<i className="ph ph-arrow-square-out"></i>
										</div>
									</div>
									<h4>Switzerland</h4>
									<span>220 Places</span>
								</a>
							</div>	

							<div className="category_item text-center">
								<a href="#">
									<div className="tcat_image_wrap">
										<div className="tcat_img" style={{ backgroundImage: `url(/assets/img/category/4.png)` }}>
											<i className="ph ph-arrow-square-out"></i>
										</div>
									</div>
									<h4>Germany</h4>
									<span>150 Places</span>
								</a>
							</div>							
							
							<div className="category_item text-center">
								<a href="#">
									<div className="tcat_image_wrap">
										<div className="tcat_img" style={{ backgroundImage: `url(/assets/img/category/5.png)` }}>
											<i className="ph ph-arrow-square-out"></i>
										</div>
									</div>
									<h4>France</h4>
									<span>160 Places</span>
								</a>
							</div>		

							<div className="category_item text-center">
								<a href="#">
									<div className="tcat_image_wrap">
										<div className="tcat_img" style={{ backgroundImage: `url(/assets/img/category/6.png)` }}>
											<i className="ph ph-arrow-square-out"></i>
										</div>
									</div>
									<h4>Romania</h4>
									<span>225 Places</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    )
  }
}

export default Category