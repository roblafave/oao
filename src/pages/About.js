// react
import React, { Component } from 'react';
// import { Link } from 'react-router';

// components
import EmailCapture from '../components/EmailCapture';
import Footer from '../components/Footer';

// assets
import starburst from '../assets/starburst.png';

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
							<div className='col-sm-12 hidden-sm hidden-xs'>
								<h1><b>We offer a daily tradition</b>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<br/>
								uniting treatments, products,
								<br/>
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;tonics and teas.
								</h1>
							</div>
							<div className='col-sm-12 visible-sm'>
								<h3><b>We offer a daily tradition</b>
								<br/>
								uniting treatments, products,
								<br/>
								tonics and teas.
								</h3>
							</div>
							<div className='col-sm-12 visible-xs'>
								<h3><b>We offer a daily tradition</b>
								<br/>
								uniting treatments, products, tonics and teas.
								</h3>
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-3  hidden-xs hidden-sm'><img src={ starburst } width={ '200px' }alt='ON & ON Starburst Graphic' className='location-starburst-img hidden-xs hidden-sm' /></div>
							<div className='col-sm-3'></div>
							<div className='col-sm-6 mt-80 about-body-text hidden-xs hidden-sm'>
									Introducing a new era of skin & body health that encourages detoxification, cellular regeneration, and potent nourishment.
								<br />
							</div>
							<div className='col-sm-6 visible-xs visible-sm about-body-text'>
									Introducing a new era of skin & body health that encourages detoxification, cellular regeneration, and potent nourishment.
								<br />
							</div>
						</div>
						<div className='row mt-30'>
							<div className='col-sm-3'></div>
							<div className='col-sm-3  hidden-xs hidden-sm'><img src={ starburst } width={ '200px' }alt='ON & ON Starburst Graphic' className='location-starburst-img hidden-xs hidden-sm' /></div>

							<div className='row'>
								<div className='col-sm-1 hidden-xs hidden-sm'></div>
								<div className='col-sm-5 mt-70 about-body-text hidden-xs hidden-sm'>
								Efficient in time.
								<br />
								Effective in result.
								</div>
								<div className='col-sm-6 visible-xs visible-sm about-body-text'>
								Efficient in time.
								<br />
								Effective in result.
								</div>

								<div className='col-sm-1 hidden-xs hidden-sm hidden-md'></div>
								<div className='col-sm-3 mt-30 hidden-xs hidden-sm'>
									<b><h3>
									find&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
									<br/>
									your
									<br/>
									&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;combo
									</h3></b>
								</div>
								<div className='col-sm-12 mt-30 visible-xs visible-sm about-body-text'>
									<b><h3>find your combo</h3></b>
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

export default About;
