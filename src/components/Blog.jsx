import React, { Component } from 'react'

export class Blog extends Component {
  render() {
    return (
		<section class="tr_blog section-padding">
			<div class="container">
				<div class="row">
					<div class="col-md-6 col-12 wow fadeInUp">
						<div class="section-heading">
							<span>Travel tips & advice</span>
							<h2>News & views from Travelo</h2>
						</div>
					</div>

					<div class="col-md-6 col-12 text-start text-md-end  wow fadeInUp">
						<a href="#" class="green_btn">Explore More <i class="ph ph-arrow-right"></i></a>
					</div>
				</div>
				
				<div class="row">
					<div class="col-xl-4 col-md-6 col-12  wow fadeInUp">	
						<div class="blog_item">
							<div class="blog_image">
								<img src="assets/img/blog/1.jpg" alt="img" />
								<div class="blog_date">5 Jan, 2025</div>
							</div>
							
							<div class="blog_content">
								<div class="blog_meta">
									<span><i class="fa-regular fa-user"></i> By <a href="#">Admin</a></span>
									<span><i class="fa-regular fa-bookmark"></i> <a href="#">Tent</a> , <a href="#">Traveling</a></span>
								</div>
								<h3><a href="blog-details.html">The ultimate southwest USA road trip itinerary</a></h3>
								<p>
									Located in Montecito, California, Rosewood Miramar 
									Beach is accessible from various nearby cities.
								</p>
							</div>
						</div>
					</div>				
					
					<div class="col-xl-4 col-md-6 col-12  wow fadeInUp">	
						<div class="blog_item">
							<div class="blog_image">
								<img src="assets/img/blog/2.jpg" alt="img" />
								<div class="blog_date">5 Jan, 2025</div>
							</div>
							
							<div class="blog_content">
								<div class="blog_meta">
									<span><i class="fa-regular fa-user"></i> By <a href="#">Admin</a></span>
									<span><i class="fa-regular fa-bookmark"></i> <a href="#">Tent</a> , <a href="#">Traveling</a></span>
								</div>
								<h3><a href="blog-details.html">The ultimate southwest USA road trip itinerary</a></h3>
								<p>
									Located in Montecito, California, Rosewood Miramar 
									Beach is accessible from various nearby cities.
								</p>
							</div>
						</div>
					</div>					
					
					<div class="col-xl-4 col-md-6 col-12  wow fadeInUp">	
						<div class="blog_item">
							<div class="blog_image">
								<img src="assets/img/blog/3.jpg" alt="img" />
								<div class="blog_date">5 Jan, 2025</div>
							</div>
							
							<div class="blog_content">
								<div class="blog_meta">
									<span><i class="fa-regular fa-user"></i> By <a href="#">Admin</a></span>
									<span><i class="fa-regular fa-bookmark"></i> <a href="#">Tent</a> , <a href="#">Traveling</a></span>
								</div>
								<h3><a href="blog-details.html">The ultimate southwest USA road trip itinerary</a></h3>
								<p>
									Located in Montecito, California, Rosewood Miramar 
									Beach is accessible from various nearby cities.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	
    )
  }
}

export default Blog