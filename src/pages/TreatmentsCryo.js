// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsCryo extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	render() {
		return (
			<div className='bg-tan'>
				<section className='hero'>
					<div className='container'>
						<div className='navbar-oao-page-container'>
							<div className='navbar-oao-link-active-treatments'></div>
						</div>
						<div className='treatment-container'>
							<div className='row'>
								<div className='col-sm-3'></div>
								<div className='col-sm-6'>
									<div className='treatment-title hidden-xs hidden-sm' style={{ marginTop: '70px' }}><h3><b>Cryo Sauna</b></h3></div>
									<div className='treatment-title  visible-xs visible-sm' style={{ marginTop: '0px' }}><h3><b>Cryo Sauna</b></h3></div>
									<div className='treatment-subhead' style={{ marginTop: '20px' }}>
										Kickstart
										<br/>
										1x per day
										<br/>
										3 minute sessions
										<br/><br/>
										Cryo is a modern method of using cold elements to ease tension and reduce inflammation. We invite guests to listen to a favorite song while invigorating their circulation and well being.
										<br/><br/>
										Encourage blood to circulate, soothe tight muscles and joints, refresh and flush the body with oxygen and nutrients. Pre or post workout.
										<br/><br/>
										Cryo is a fun thing to do solo, on a date or with friends.
										<br/><br/>
										For enthusiasts, cryo is possible every four hours.
										<br/><br/>
										Walk out of cryo and into the lab for a tea.
										<br/><br/>
										Cryo pairs well with,
										<br/>
										4-2-4 In Fiore facial, infrared sauna, and LED.
									</div>
									<div className='treatment-combo'></div>
									<div className='treatment-body'></div>



								</div>
							</div>
							<div className='treatment-img-overlay'>
								<Link to="/treatments/skinbrushing" className='treatment-link-skinbrushing'></Link>
								<Link to="/treatments/endermologie" className='treatment-link-endermologie'></Link>
								<Link to="/treatments/cryo" className='treatment-link-cryo'></Link>
								<Link to="/treatments/infrared" className='treatment-link-infrared'></Link>
								<Link to="/treatments/facial" className='treatment-link-facial'></Link>
								<Link to="/treatments/microcurrent" className='treatment-link-microcurrent'></Link>
								<Link to="/treatments/radiofrequency" className='treatment-link-radiofrequency'></Link>
								<Link to="/treatments/led" className='treatment-link-led'></Link>
							</div>

						</div>

					</div>
				</section>


				<Footer />
			</div>
		);
	}
}

export default TreatmentsCryo;
