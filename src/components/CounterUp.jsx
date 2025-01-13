import React, { Component } from 'react'
import counterup from "../demodata/counterup";

export class CounterUp extends Component {
  render() {
    return (
        <section className="counter_up section-padding">	
            <div className="container">
                <div className="row">
					{counterup.map((item, i) => (

						<div key={i} className="col-xl-3 col-md-6 col-12 wow fadeInUp">
							<div className="counter_item" style={{ backgroundImage:`url(${item.image})` }}>
								<i className={item.icon}></i>
								<h4><span className="count">{item.count}</span>+</h4>
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
