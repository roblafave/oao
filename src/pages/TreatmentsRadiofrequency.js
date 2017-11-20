// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsRadiofrequency extends Component {

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
									<div className='treatment-title' style={{ marginTop: '150px' }}><h3><b>Radio Frequency</b></h3></div>
									<div className='treatment-subhead'>
										Restore Collagen and Elastin
										<br/>
										1-2x times a week
										<br/>
										60, 90 minute treatments available
										<br/><br/>
										Radiofrequency is where we go deeper, using an advanced 3Deep handpiece to stimulate collagen and elastin production. No need to numb. Firm and tighten face and body.
									</div>
									<div className='treatment-combo'><h5><b>&#123; Radiofrequency x Microcurrent Facial &#125;</b></h5></div>
									<div className='treatment-body'>Alternating weekly treatments between Radiofrequency, Microcurrent and Facials offers different collagen building supports.</div>
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

export default TreatmentsRadiofrequency;
