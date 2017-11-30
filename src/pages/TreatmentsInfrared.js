// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsInfrared extends Component {

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
									<div className='treatment-title  hidden-xs hidden-sm' style={{ marginTop: '70px' }}><h3><b>Infrared Sauna</b></h3></div>
									<div className='treatment-title  visible-xs visible-sm' style={{ marginTop: '0px' }}><h3><b>Infrared Sauna</b></h3></div>
									<div className='treatment-subhead' style={{ marginTop: '20px' }}>
										Regular sweating leads to better sweating
										<br/><br/>
										2-4x times per week
										<br/><br/>
										Infrared saunas descend from an ancient practice of deliberate sweating.
										Watch a movie, listen to music, or read while while relaxing,
										detoxifying, burning calories, and easing soreness.
										<br/><br/>
										Cathartic and centering, step back into the world with restored purpose and promise, bringing the life you want to make into focus, from the inside out.
										<br/><br/>
										A simple process that can renew who you are & what you do.
									</div>
									<div className='treatment-combo' style={{ marginTop: '20px' }}><h5><b>&#123; Endermologie x Infrared &#125;</b></h5></div>
									<div className='treatment-body'>We recommend layering Infrared and Endermologie. Endermologie coaxes the lymphatic system to expel toxins and metals stored in your system. The infrared sauna expedites how your body flushes it all out. These two work together making for an advanced and productive sweat.</div>
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

export default TreatmentsInfrared;
