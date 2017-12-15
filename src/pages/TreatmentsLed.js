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
						<div className='navbar-oao-page-container'>
							<div className='navbar-oao-link-active-treatments'></div>
						</div>
						<div className='treatment-container'>
							<div className='row'>
								<div className='col-sm-3'></div>
								<div className='col-sm-6'>
									<div className='treatment-title hidden-xs' style={{ marginTop: '50px' }}><h3><b>LED</b></h3></div>
									<div className='treatment-title visible-xs' style={{ marginTop: '0px' }}><h3><b>LED</b></h3></div>
									<div className='treatment-subhead' style={{ marginTop: '20px' }}>
									A light source for skin
									<br/>
									2-3x per week
									<br/>
									15, 30 minute treatments available
									<br/><br/>
									Using tech developed together with NASA, LED emits patterns of light to energize cells. Blue light reduces inflamed acne. Red light restores collagen and elastin. Infrared relieves muscle pain and stiffness.
									<br/><br/>
									Tuck into our cozy LED room and drift away while listening to an ON & ON curated playlist.
									<br/><br/>
									Calm fine lines and bolster growth of collagen and elastin, decrease inflammation and pain in tight muscles and sore joints.
									<br/><br/>
									Walk away in 30 minutes with glowy skin.</div>
									<div className='treatment-combo' style={{ marginTop: '20px' }}><h5><b>&#123; Microcurrent x LED &#125;</b></h5></div>
									<div className='treatment-body'>LED amplifies microcurrent and facials.
									<br/>
									Combine these forces.</div>
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
