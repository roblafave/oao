// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// assets
import logo from '../assets/logo.svg';
import socialFBB from '../assets/images/icons/social/facebook-blue.svg';
import socialInstagramB from '../assets/images/icons/social/instagram-blue.svg';
import socialTwitterB from '../assets/images/icons/social/twitter-blue.svg';

class Footer extends Component {

	render() {
		return (
			<footer className='footer-container'>
				<div className='container'>
					<nav className='footer-nav-container'>
						<div className='row'>

							<div className='col-sm-3 footer-nav-item'><Link to='/'>HOME</Link></div>
							<div className='col-sm-3 footer-nav-item'><Link to='/services'>SERVICES</Link></div>
							<div className='col-sm-3 footer-nav-item'><Link to='/appointment'>APPOINTMENT</Link></div>
							<div className='col-sm-3 footer-nav-item'><Link to='/location'>LOCATION</Link></div>

						</div>
					</nav>
					<hr className='footer-hr'/>

					<section className='footer-brand-container mt-50'>
						<center><Link to='/'><img src={ logo } style={{ width: 100 }} alt='On & On' /></Link></center>
					</section>

					<nav className='social-nav mt-20'>

						<a className='social-instagram' href='https://instagram.com/onandon' target='_blank'>
							<img src={ socialInstagramB } alt='On & On Health Spa Instagram' className='social-instagram-icon' />
						</a>

						<a className='social-twitter' href='https://twitter.com/onandon' target='_blank'>
							<img src={ socialTwitterB } alt='On & On Health Spa Twitter' className='social-twitter-icon' />
						</a>

						<a className='social-facebook' href='https://facebook.com/onandon' target='_blank'>
							<img src={ socialFBB } alt='On & On Health Spa Facebook' className='social-facebook-icon' />
						</a>
					</nav>

					<section className='footer-legal-container mb-20'>
						<p>
							<Link to="/welcome">Signup Waiver</Link>
							<br />
							&copy; 2017 The Great Rearranged, LLC. All rights reserved.
						</p>

					</section>
				</div>
			</footer>
		);
	}
}

export default Footer;
