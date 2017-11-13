// react
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

// components
import Footer from '../components/Footer';

// assets
import indicator3o3 from '../assets/indicator-3o3.svg'

class Confirmation extends Component {

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>
						<div className='row hero-container-text'>
							<div className='col-sm-12'>
								<h2>Thank You For Signing Up!</h2>
								<div className='divider-blue mt-30'></div>
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-12'>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
								<br />
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default Confirmation;
