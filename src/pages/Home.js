// react
import React, { Component } from 'react';
// import { Link } from 'react-router';
// import appState from '../appState'

// firebase
// import fire from '../fire';

// components
import Footer from '../components/Footer';

// assets
import starburst from '../assets/starburst.gif';


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
						<div className='row mt-40	'>
							<div className='col-sm-1'></div>
								<div className='col-sm-5 mt-60  hidden-xs'><img src={ starburst } width={ '200px' }alt='' className='img-circle team-member-img' />
							</div>
							<div className='col-sm-5'>
								<img src={ starburst } width={ '200px' }alt='' className='img-circle team-member-img' />
							</div>
						</div>

						<div className='row'>
							<div className='col-sm-2  hidden-xs mt-60'><img src={ starburst } width={ '200px' }alt='' className='img-circle team-member-img' /></div>
							<div className='col-sm-2'></div>
							<div className='col-sm-2  hidden-xs'>
								<img src={ starburst } width={ '200px' }alt='' className='img-circle team-member-img' />
							</div>
							<div className='col-sm-2'></div>
							<div className='col-sm-3  hidden-xs mt-40'>
								<img src={ starburst } width={ '200px' }alt='' className='img-circle team-member-img' />
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
