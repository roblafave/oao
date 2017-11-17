// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsLed extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	render() {
		return (
			<div className='bg-tan'>
				<section className='hero'>
					<div className='container'>

						<div className='treatment-container'>
							<div className='row'>
								<div className='col-sm-3'></div>
								<div className='col-sm-6'>
									<div className='treatment-title'><h3><b>LED</b></h3></div>
									<div className='treatment-subhead'>Celebrated for its ability to accelerate circulation, energize and gently exfoliate skins.</div>
									<div className='treatment-combo'><h5><b>&#123; Skin Brushing x Endermologie x Infrared Sauna &#125;</b></h5></div>
									<div className='treatment-body'>Take home an Iris Hantverk skin brush with an In Fiore body balm for a daily ritual that encourages lymphatic circulation and soft supple skin.</div>
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

export default TreatmentsLed;
