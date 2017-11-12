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
					<div className='index-hero-container-img'></div>
					<div className='container'>
						<div className='row'>
							<div className='col-sm-12'>
								<div className='row hero-container-text'>
									<h2>This is header text</h2>
									<div className='divider-honey mt-30'></div>
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
					<hr />
				</section>

				<section className='overview section-block'>
					<div className='container'>
						<div className='row text-center'>
							<div className='col-sm-4 col-xs-12 mt-30'>
								<img className='featured-icon' src={ lightbulb } alt='Lightbulb' />
								<div className='section-break size-xs'></div>
								<h5 className='tx-aol-blue h3 type-bold mb-20'>Opportunities</h5>
								<div className='section-break size-xs'></div>
								<p className='size-lg tx-aol-black pad-txt npt npb nmt nmb mb-40'>Exposing you to the countless possibilities for a career in tech</p>
								<hr className='visible-xs'></hr>
							</div>
							<div className='col-sm-4 col-xs-12	mt-30'>
								<img className='featured-icon' src={ rockstar } alt='Rockstar' />
								<div className='section-break size-xs'></div>
								<h5 className='tx-aol-blue h3 type-bold mb-20'>Practical Skills</h5>
								<div className='section-break size-xs'></div>
								<p className='size-lg tx-aol-black pad-txt npt npb nmt nmb mb-40'>Arming you with the tools to leverage tech for any passion</p>
								<hr className='visible-xs'></hr>
							</div>
							<div className='col-sm-4 col-xs-12 mt-30'>
								<img className='featured-icon' src={ network } alt='Network' />
								<div className='section-break size-xs'></div>
								<h5 className='tx-aol-blue h3 type-bold mb-20'>Connections</h5>
								<div className='section-break size-xs'></div>
								<p className='size-lg tx-aol-black pad-txt npt npb nmt nmb mb-40'>Building you a network of rockstar professional advisors</p>
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
