// react
import React, { Component } from 'react';
// import { Link } from 'react-router';

// components
import Footer from '../components/Footer';
import SquareAppointment2 from '../components/SquareAppointment2';

// assets



class Appointment extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	getIframe = () => document.querySelector('iframe[src^="https://squareup.com/appointments"]')

	componentDidMount(){
		let iframe = this.getIframe();
		console.log('componentDidMount', iframe);
		iframe && (iframe.style.display = 'block');
	}

	componentWillUnmount(){
		let iframe = this.getIframe();
		console.log('componentWillUnmount', iframe);
		iframe && (iframe.style.display = 'none');
	}

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>
						<div className='row hero-container-text'>
							<div className='col-sm-12'>
								<h2>Appointment</h2>
								<div className='divider-honey mt-30'></div>
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-12'>
								<SquareAppointment2 />
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

export default Appointment;
