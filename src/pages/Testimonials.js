// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import EmailCapture from '../components/EmailCapture';
import Footer from '../components/Footer';

// assets
import starburst from '../assets/starburst.png';

class Testimonials extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>
						<div className='navbar-oao-page-container'>
							<div className='navbar-oao-link-active-about'></div>
						</div>
						<div className='row hero-container-text'>
							<div className='col-xs-12 hidden-xs hidden-sm'>
								<h1><b>Testimonials</b></h1>
								content
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default Testimonials;
