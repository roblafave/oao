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

					<hr className='footer-hr'/>

					<div className='row mb-50 footer-contact-info'>
						<div classname='col-sm-12'><center><b>address:</b> 5-5161 kuhio hwy suite 210, hanalei, hi 96714</center></div>
						<div className='col-sm-4 footer-nav-item'><center><a href="tel:1-808-826-4444"><b>phone:</b> 808.826.4444</a></center></div>
						<div className='col-sm-4'>
							<center>
								<a href='https://www.instagram.com/onandon.co' target='_blank'>
									<img src={ socialInstagramB } alt='ON & ON Instagram' className='social-instagram-icon footer-nav-item' />
								</a>
							</center>
						</div>
						<div className='col-sm-4 footer-nav-item'><center><a href="mailto:info@on-and-on.co"  target="_blank"><b>email:</b> info@on-and-on.co</a></center></div>
					</div>

					<section className='footer-legal-container mb-20'>
							<Link to="/welcome"><h4>Signup Waiver</h4></Link>
							<br />
							&copy; 2017 The Great Rearranged, LLC. All rights reserved.

					</section>
				</div>
			</footer>
		);
	}
}

export default Footer;
