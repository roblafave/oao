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
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-12'>
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
