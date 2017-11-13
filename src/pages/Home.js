// react
import React, { Component } from 'react';
// import { Link } from 'react-router';
// import appState from '../appState'

// firebase
// import fire from '../fire';

// components
import Footer from '../components/Footer';

// assets
import lightbulb from '../assets/images/icons/site/lightbulb.svg';
import network from '../assets/images/icons/site/network.svg';
import rockstar from '../assets/images/icons/site/rockstar.svg';


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {showAppointmentWidget: false}
	}

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12'>
								<div className='row hero-container-text'>
									<h2>This is header text</h2>
									<div className='divider-blue mt-30'></div>
									<p className='mt-20'>This is subheader text.</p>
								</div>
								<div className='row hero-container-btn mt-30 mb-4 0'>
									<div className='col-sm-3'></div>
									<div className='col-sm-6'>

									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default Home;
