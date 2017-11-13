// react
import React, { Component } from 'react';
// import { Link } from 'react-router';

// components
import EmailCapture from '../components/EmailCapture';
import Footer from '../components/Footer';

// assets


class About extends Component {

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
								<h2>About</h2>
								<div className='divider-blue mt-30'></div>
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-12'>
								<p>
									Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
									<br /><br />
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
								</p>
								<br />
							</div>
						</div>
					</div>
				</section>

				<section className='team'>
					<div className='container'>
						<div className='row mb-40'>
							<div className='col-sm-12 mb-30'>
									<h3>Our Team</h3>
							</div>

							<div className='col-sm-4'>
								<article className='team-member-container'>
									<img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-96714.appspot.com/o/owner.jpeg?alt=media&token=ba660251-3249-472b-bf70-e7ad138aa45c' } width={ '200px' }alt='' className='img-circle team-member-img' />
									<div className='team-member-name'>
										<h4>Name</h4>
									</div>
									<div className='team-member-title'> Title </div>
									<hr className='visible-xs-block' />
								</article>
							</div>

							<div className='col-sm-4'>
								<article className='team-member-container'>
									<img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-96714.appspot.com/o/owner.jpeg?alt=media&token=ba660251-3249-472b-bf70-e7ad138aa45c' } width={ '200px' }alt='' className='img-circle team-member-img' />
									<div className='team-member-name'>
											<h4>Name</h4>
									</div>
									<div className='team-member-title'> Title </div>
									<hr className='visible-xs-block' />
								</article>
							</div>

							<div className='col-sm-4'>
								<article className='team-member-container'>
									<img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-96714.appspot.com/o/owner.jpeg?alt=media&token=ba660251-3249-472b-bf70-e7ad138aa45c' } width={ '200px' }alt='' className='img-circle team-member-img' />
									<div className='team-member-name'>
											<h4>Name</h4>
									</div>
									<div className='team-member-title'> Title </div>
								</article>
							</div>
						</div>
					</div>
				</section>

				<Footer />
			</div>
		);
	}
}

export default About;
