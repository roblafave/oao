// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsMicrocurrent extends Component {

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
									<div className='treatment-title  hidden-xs hidden-sm' style={{ marginTop: '160px' }}><h3><b>Microcurrent</b></h3></div>
									<div className='treatment-title  visible-xs visible-sm' style={{ marginTop: '0px' }}><h3><b>Microcurrent</b></h3></div>
									<div className='treatment-subhead'>
										Gentle and potent
										<br/>
										1-2x per week
										<br/>
										30, 60 minute sessions available
										<br/><br/>
										A unique facial using two wands and a current to activate production of collagen and elastin.
										<br/><br/>
										A deeply restful and energizing facial.</div>
									<div className='treatment-combo'><h5><b>&#123; Microcurrent x LED &#125;</b></h5></div>
									<div className='treatment-body'>LED amplifies microcurrent and facials. Combine these forces.</div>
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

export default TreatmentsMicrocurrent;
