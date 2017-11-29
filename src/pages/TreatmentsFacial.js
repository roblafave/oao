// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsFacial extends Component {

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
									<div className='treatment-title  hidden-xs hidden-sm' style={{ marginTop: '120px' }}><h3><b>Facials</b></h3></div>
									<div className='treatment-title  visible-xs visible-sm' style={{ marginTop: '0px' }}><h3><b>Facials</b></h3></div>
									<div className='treatment-subhead'>
										We combine nourishing, potent, botanical products and novel practices to recalibrate your skin.
										<br/><br/>
										We infuse our facials with the highest quality ingredients including: Vintner's Daughter, In Fiore, Julisis, Odacite, Prada Labs, MUN, Pestle and Mortar, and Purity Herbs which are all available for purchase at our in-store lab.
										<br/><br/>
										Our in-house offerings are tailor-made and individually designed.
									</div>
									<div className='treatment-combo'><h5><b>&#123; Facials x Cryo x LED &#125;</b></h5></div>
									<div className='treatment-body'>This super charged combo reinvigorates the skin, replenishes cellular energy molecules and increases circulation.</div>
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

export default TreatmentsFacial;
