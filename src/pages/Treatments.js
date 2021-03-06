// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsSkinBrushing extends Component {

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
					<div className='row visible-xs'>
						<div className='col-sm-12 treatments-mob-nav'>
							<Link to="/treatments/skinbrushing" className='treatment-link-skinbrushing'>Skin Brushing</Link><br/>
							<Link to="/treatments/endermologie" className='treatment-link-endermologie'>Endermologie</Link><br/>
							<Link to="/treatments/cryo" className='treatment-link-cryo'>Cryo Sauna</Link><br/>
							<Link to="/treatments/infrared" className='treatment-link-infrared'>Infrared Sauna</Link><br/>
							<Link to="/treatments/facial" className='treatment-link-facial'>Facial</Link><br/>
							<Link to="/treatments/microcurrent" className='treatment-link-microcurrent'>Microcurrent</Link><br/>
							<Link to="/treatments/radiofrequency" className='treatment-link-radiofrequency'>Radio Frequency</Link><br/>
							<Link to="/treatments/led" className='treatment-link-led'>LED</Link><br/>
						</div>
					</div>

					<div className='treatment-container'>
						<div className='row'>
							<div className='col-sm-3'></div>
							<div className='col-sm-6'>
								<div className='treatment-title hidden-xs'><br/><br/><br/><h4><b>&lt; Select a Treatment &gt;</b></h4></div>
								<div className='treatment-subhead'></div>
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

export default TreatmentsSkinBrushing;
