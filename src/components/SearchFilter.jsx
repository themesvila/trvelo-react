import React, { Component } from 'react'

export class SearchFilter extends Component {
  render() {
	return (
	  <div>	
		<div class="container">
			<div class="row">
				<div class="col-xl-10 col-lg-12 col-md-10 col-10 mx-auto text-center">
					<div class="tr_search_filter">
						<form action="#" class="d-flex justify-content-center" method="post">
							<div class="tr_search_location">
								<label for="trs_location">Location*</label>
								<select id="trs_location">
									<option>Dubai Oasis</option>
									<option>Barcelona Beach</option>
									<option>Caribbean Cove</option>
									<option>Dubai Oasis</option>
									<option>London Luxe</option>
									<option>Maldives Haven</option>
								</select>
							</div>		

							<div class="check_in">
								<label for="checkin_field">Check - In*</label>
								<div class="trdate_picker date" id="tr_dpicker1">
									<input type="text" class="form-control" placeholder="Check In Date" id="checkin_field" />
									<span class="input-group-append">
										<i class="fa-solid fa-calendar-days"></i>
									</span>
								</div>
							</div>		

							<div class="check_out">
								<label for="checkout_field">Check - Out*</label>
								<div class="trdate_picker date" id="tr_dpicker2">
									<input type="text" class="form-control" placeholder="Check Out Date" id="checkout_field" />
									<span class="input-group-append">
										<i class="fa-solid fa-calendar-days"></i>
									</span>									
								</div>
							</div>		

							<div class="adut_box">
								<label>Adult*</label>
								<select>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
									<option>9</option>
									<option>10</option>
								</select>
							</div>
							
							<button type="submit">Search <i class="ph ph-magnifying-glass"></i></button>
						</form>
					</div>
				</div>
			</div>
		</div>		
	  </div>
	)
  }
}

export default SearchFilter

