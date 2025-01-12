import React, { Component } from 'react'

export class cta extends Component {
  render() {
    return (
      <div>
        <section class="container pb100 wow fadeInUp">
			<div class="tr_cta" style={{ backgroundImage: `url(assets/img/bg/cta.jpg)` }}>
				<div class="row">
					<div class="col-lg-5 d-md-none d-lg-block">
						<div class="cta_img" style={{ backgroundImage: `url(assets/img/cta/cta2.png)` }} ></div>
					</div>

					<div class="col-lg-7 align-self-center">
						<div class="cta_content">
							<span>Ready to Start?</span>
							<h2>Discover Incredible<br />
							Deals Just for You!</h2>
							<a href="#" class="green_btn">Explore More <i class="ph ph-arrow-right"></i></a>
							<img src="assets/img/cta/mail-icon.svg" alt="img" class="cta_shape" />
						</div>
					</div>
				</div>
			</div>
		</section>		
		       
      </div>
    )
  }
}

export default cta