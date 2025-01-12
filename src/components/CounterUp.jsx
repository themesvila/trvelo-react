import React, { Component } from 'react'

export class CounterUp extends Component {
  render() {
    return (
        <section class="counter_up section-padding">	
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-md-6 col-12 wow fadeInUp">
                        <div class="counter_item" style={{ backgroundImage: `url(assets/img/counter-up/1.jpg)` }}>
                            <i class="ph ph-smiley"></i>
                            <h4><span class="count">85974</span>+</h4>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>			
                    
                    <div class="col-xl-3 col-md-6 col-12 wow fadeInUp">
                        <div class="counter_item" style={{ backgroundImage: `url(assets/img/counter-up/2.jpg)` }}>
                            <i class="ph ph-star"></i>
                            <h4><span class="count">9875</span>+</h4>
                            <p>Positive Review</p>
                        </div>
                    </div>			
                    
                    <div class="col-xl-3 col-md-6 col-12 wow fadeInUp">
                        <div class="counter_item" style={{ backgroundImage: `url(assets/img/counter-up/3.jpg)` }}>
                            <i class="ph ph-heart"></i>
                            <h4><span class="count">5647</span>+</h4>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>			
                    
                    <div class="col-xl-3 col-md-6 col-12 wow fadeInUp">
                        <div class="counter_item" style={{ backgroundImage: `url(assets/img/counter-up/4.jpg)` }}>
                            <i class="ph ph-trophy"></i>
                            <h4><span class="count">1200</span>+</h4>
                            <p>Wining Awards</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
  }
}

export default CounterUp
