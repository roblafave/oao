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
						<div className='row mt-40	'>
							<div className='col-sm-1'></div>
								<div className='col-sm-5 mt-60'><img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-7b40c.appspot.com/o/starburst.gif?alt=media&token=5d09f294-5c03-4807-ab1d-553d9b545e22' } width={ '250px' }alt='' className='img-circle team-member-img' />
							</div>
							<div className='col-sm-5 hidden-md-down'>
								<img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-7b40c.appspot.com/o/starburst.gif?alt=media&token=5d09f294-5c03-4807-ab1d-553d9b545e22' } width={ '250px' }alt='' className='img-circle team-member-img' />
							</div>
						</div>

						<div className='row'>
							<div className='col-sm-3 hidden-md-down mt-60'><img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-7b40c.appspot.com/o/starburst.gif?alt=media&token=5d09f294-5c03-4807-ab1d-553d9b545e22' } width={ '250px' }alt='' className='img-circle team-member-img' /></div>
							<div className='col-sm-2'></div>
							<div className='col-sm-2 hidden-md-down'>
								<img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-7b40c.appspot.com/o/starburst.gif?alt=media&token=5d09f294-5c03-4807-ab1d-553d9b545e22' } width={ '250px' }alt='' className='img-circle team-member-img' />
							</div>
							<div className='col-sm-2'></div>
							<div className='col-sm-3 hidden-md-down mt-40'>
								<img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-7b40c.appspot.com/o/starburst.gif?alt=media&token=5d09f294-5c03-4807-ab1d-553d9b545e22' } width={ '250px' }alt='' className='img-circle team-member-img' />
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
