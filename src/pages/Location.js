// react
import React, { Component } from 'react';
// import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class Location extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>
						<div className='row hero-container-text'>
							<div className='col-sm-12'>
								<h2>Location</h2>
								<div className='divider-honey mt-30'></div>
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-12'>
								<p>
									Body text.
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

export default Location;
