// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class Treatments extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	render() {
		return (
			<div className='bg-tan'>
				<section className='hero'>
					<div className='container'>
						<div className='row hero-container-text'>
							<div className='col-sm-12'>
								<h2>Treatments</h2>
								<div className='divider-blue mt-30'></div>
							</div>
						</div>


						<div className='row'>
							<div className='col-sm-12 center'>
							<center>
							<Link to="/book" className=''><img src={ 'https://firebasestorage.googleapis.com/v0/b/on-and-on-7b40c.appspot.com/o/services.png?alt=media&token=07efab8d-931e-43fc-9356-ca8b28b50e23' } style={{ width: 400 }} alt="services" /></Link></center>
							</div>
						</div>
					</div>
					<div className='row mt-50 mb-30'>
					<div className='col-sm-2'></div>
					<div className='col-sm-8'>
					<p>We invite you to join On &amp; On in our no tip culture. For information on packages, memberships & private parties, please contact us at <a href="mailto:info@on-and-on.co"  target="_blank">info@on-and-on.co</a> or <a href="tel:1-808-826-4444">808.826.4444</a>.</p>
					</div>
					</div>
				</section>


				<Footer />
			</div>
		);
	}
}

export default Treatments;
