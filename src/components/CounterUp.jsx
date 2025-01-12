import React, { Component } from 'react'
import counterup from "../demodata/counterup";

export class CounterUp extends Component {
  render() {
    return (
        <section class="counter_up section-padding">	
            <div class="container">
                <div class="row">
                 {counterup.map((item, i) => (

                            <div key={i} class="col-xl-3 col-md-6 col-12 wow fadeInUp">
                                <div class="counter_item" style={{ backgroundImage:`url(${item.image})` }}>
                                    <i class={item.icon}></i>
                                    <h4><span class="count">{item.count}</span>+</h4>
                                    <p>{item.title}</p>
                                </div>
                            </div>                           
						))}                    
                </div>
            </div>
        </section>

    )
  }
}

export default CounterUp
