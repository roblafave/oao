// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets
import starburst from '../assets/starburst.png';
import map from '../assets/map.png';
import placemark from '../assets/placemark.svg';
import interior from '../assets/storeinterior.jpg';


class Location extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>
						<div className='navbar-oao-page-container'>
							<div className='navbar-oao-link-active-location'></div>
						</div>

						<div className='row'>
							<div className='col-sm-12 mt-50'>
								<img src={ interior } width={ '100%' } alt='ON & ON Store Interior' className='hidden-xs' />
							</div>
						</div>

						<div className='row mb-50'>
							<div className='col-sm-6 location-container-left mt-30'>
								<div className='location-container-left-title'>
									<b>h &nbsp; a &nbsp; n &nbsp; a &nbsp; l &nbsp; e &nbsp; i</b>
								</div>
								<br/>
								<a href='https://www.google.com/maps/place/ON+%26+ON/@22.202636,-159.4987253,17z/data=!3m1!4b1!4m5!3m4!1s0x7c06fac13259d821:0x770dfbfc59b3e02c!8m2!3d22.202631!4d-159.4965313' target='_blank'>5-5161 kuhio hwy suite 210
								<br/>
								hanalei, hi 96714</a>
								<br/><br/>
								Mon – Sat, 9a – 6p
								<br/>
								Sun, CLOSED*
								<br/><br/>
								<i>*special events & workshops TBA</i>

								<div className='row'>
								<img src={ starburst } width={ '200px' }alt='ON & ON Starburst Graphic' className='location-starburst-img hidden-xs hidden-sm' />
								</div>
							</div>
							<div className='col-sm-6 mt-30'>
								<a href='https://www.google.com/maps/place/ON+%26+ON/@22.202636,-159.4987253,17z/data=!3m1!4b1!4m5!3m4!1s0x7c06fac13259d821:0x770dfbfc59b3e02c!8m2!3d22.202631!4d-159.4965313' target='_blank'><img src={ map } style={{ width:'100%' }} alt="services" /></a>
							</div>
						</div>

						<div className='row'>
							<div className='col-sm-12'>

							</div>
						</div>
					</div>
				</section>


				<Footer />
			</div>
		);
	}
}

export default Location;
