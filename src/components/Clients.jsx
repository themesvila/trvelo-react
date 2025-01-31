import React, { Component } from 'react'
import clients_data from "../demodata/clients";
import OwlCarousel from "./OwlCarousel";

export default class Clients extends Component {
  render() {
    return (
	
		<div className="tr_clients wow fadeInUp">
			<div className="container-fluid">
				<div className="clients_slider owl-carousel">
				
					{clients_data.map((item, i) => (
						<div key={i} className="client_item">
							<a href={item.url}><img src={item.image} alt="img" /></a>
						</div>	              
					))}  			
										
				</div>
			</div>
		</div>
	
    )
  }
}
