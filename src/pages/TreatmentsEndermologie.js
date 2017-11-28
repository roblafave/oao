// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets



class TreatmentsEndermologie extends Component {

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
									<div className='treatment-title' style={{ marginTop: '60px' }}><h3><b>Endermologie</b></h3></div>
									<div className='treatment-subhead' style={{ marginTop: '10px' }}>
										1-2x per week
										<br/>
										60 minute treatments available
										<br/><br/>
										Endermologie is an ON&ON team favorite. Created to encourage lymphatic circulation, endermologie boosts the production of collagen, elastin and hyaluronic acid which in turn firms skin.
										<br/><br/>
										Respecting of the skin’s ecology and physiology, this treatment nourishes the whole system and releases areas of stored fat that are resistant to diet and exercise.
										<br/><br/>
										A great option pre or post air travel. Use as a regular part of your weekly routine for relaxing and detoxifying.
									</div>
									<div className='treatment-combo' style={{ marginTop: '20px' }}><h5><b>&#123; Endermologie x Infrared Sauna &#125;</b></h5></div>
									<div className='treatment-body'>For an after-treatment boost book an infrared sauna. Sweating is a great way to compliment lymphatic circulation. Going for a walk is good too.
									<br/><br/>
									We love sharing our pantry. Enjoy a moon juice adaptogenic dust, or a Kor turmeric shot.<br/><h5>Learn More &rarr;</h5></div>
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

export default TreatmentsEndermologie;
