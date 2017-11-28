// react
import React, { Component } from 'react';
import { Link } from 'react-router';

// components
import Footer from '../components/Footer';

// assets
import starburst from '../assets/starburst.png';
import map from '../assets/map.png';
import placemark from '../assets/placemark.svg';


class Location extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>

						<div className='row'>
							<div className='col-sm-12 faq-content'>
								<h3>Infrared Sauna FAQ</h3>
								<h4>How is the infrared sauna different from a conventional sauna?</h4>
								Infrared saunas use light waves to heat the body from the inside out.
								<br/> They raise your core temperature as opposed to elevating your surface temperature.
								<br/> The advantage this provides is that you sweat more comfortably,
								<br/> with less heat and less humidity than you would in a conventional sauna.

								<h4>What are the benefits of using an infrared sauna?</h4>
								Sweating is a great way to keep your system clean.
								<br/> Pollutants in the air, leftover makeup and sunscreen,
								<br/> and elements from our diet can build up and become toxic to the body.
								<br/> We sweat to free these toxins.
								<br/> We sweat to relieve stress, burn calories, and release endorphins.
								<br/> We sweat to improve our sleep, circulation and skin.

								<h4>What are the benefits of different infrared waves?</h4>
								“Near” infrared waves activate the surface of your body:
								<br/> mending skin, preventing clogged pores, and restoring elasticity.
								<br/> “Mid” infrared waves work at the tissue level, improving circulation and relieving muscles.
								<br/> “Far” infrared waves permeate deep into the body,
								<br/> encouraging toxins and heavy metals to exit your system.

								<h4>Are there different models of sauna to choose from at ON & ON?</h4>
								Yes. One is the Solo. A dome that allows one person to sweat
								<br/> with their head outside the heated compartment.
								<br/> The other is the Mpulse. A cabin that comfortably seats two people.
								<br/> We can slide the door joining the two saunas open to create a shared sweat space for three.
								<h4>Is the sauna safe?</h4>
								Yes. It is important to hydrate before and after sweating.
								<br/> If you are curious about contraindications, check out our waiver.
								<h4>How long before my session should I arrive?</h4>
								Please come at least 10 minutes early.
								<br/> Kick it at our communal table and enjoy a hydrating tonic or pearl water.
								<h4>Can I do this before or after a workout?</h4>
								Either works well. We recommend doing a lighter session
								<br/> (20 minutes) pre- or post-workout. For recovery, definitely
								<br/> stay in for a full session (45 minutes)—and remember,
								<br/> it’s doubly important to hydrate properly for a back-to-back sweat.
								<h4>What do I wear in the sauna?</h4>
								Best is nothing, but however you’re comfortable.
								<h4>How is the sauna cleaned?</h4>
								Our saunas are cleaned thoroughly after every use.
								<br/> Infrared heat removes 99.9% of bacteria and viruses in the sauna.
								<h4>Should I shower immediately afterwards?</h4>
								It’s better to wait until your body cools down on its own
								<br/> —benefits are still active while your temperature is returning to its natural state.

								<h3>Endermologie FAQ</h3>
								<h4>What is “endermologie”?</h4>
								Endermologie is a safe way to stimulate lymphatic circulation,
								<br/> increase mobility, smooth cellulite and support overall health and detoxification.
								<h4>How does it work?</h4>
								By rolling and lightly drawing up layers of tissue,
								<br/> we create space for the lymph to flow freely.
								<br/> Fats and toxins are less likely to build up
								<br/> when the lymphatic system is active and healthy.
								<h4>Is it safe?</h4>
								Yes. Endermologie is FDA approved for reducing cellulite
								<br/> and has been used in Europe, Japan, and South America
								<br/> for more than a decade.
								<h4>What do I wear?</h4>
								A bodysuit will be provided for you.
								<h4>How can I enhance my experience?</h4>
								Hydrate & hydrate. . . Endermologie breaks down fat deposits
								<br/> and toxins from your system, rehydrating and sweating
								<br/> is a great way to get them all the way out.
								<br/> Join us for a sweat or take a walk within 24 hours of your treatment.
								<h4>Can men do this treatment too?</h4>
								Yes. Stubborn fat and toxic deposits do not discriminate.

								<h3>LED FAQ</h3>
								<h4>What is LED?</h4>
								LED is a light emitting device that energizes cells to heal
								<br/> skin as well as ease muscle and joint pain.

								<h4>How does it work?</h4>
								Our LED device uses three distinct wavelengths to heal the body.
								<br/> Blue, red, and near infrared. Blue light increases oxygen in the cells that target and clear bacteria.
								<br/> Red light stimulates fibroblasts to generate new stores of collagen and elastin.
								<br/> Near-infrared regenerates blood vessels, increasing circulation.

								<h4>What are the benefits of LED?</h4>
								LED is an athletic and aesthetic tool.
								<br/> Relieve pain, soreness and stiffness in muscles and joints.
								<br/> Reduce inflammation of active acne and prevent future breakouts.
								<br/> Replenish collagen and elastin to increase skin strength and flexibility.

								<h4>Is it safe?</h4>
								Our LED device is FDA approved to manage inflammatory acne, wrinkles,
								<br/> circulation, pain and stiffness, muscle ache, chronic neck and shoulder pain,
								<br/> arthritis, muscle spasm, tissue tension and more.

								<h4>What does LED feel like?</h4>
								During an LED treatment guests sometimes feel a slight warmth from the light.
								<br/> The experience is soft, silent and people often drift to sleep.

								<h4>What do I wear?</h4>
								Bare face is best. Removing makeup, sunscreen or daily residue from your skin
								<br/> ensures that the light reach the depths it’s meant to.
								<br/> We provide a towelette and an opportunity for you to cleanse.
								<br/> How can I enhance my experience?
								<br/> LED on its own is so simple with such a big result.
								<br/> Add it on to microcurrent or facial for a cosmic change.
								<br/> Visit our lab after your treatment to enhance your glow
								<br/> with our Odacite Carrot Serum and other oils and potions.

								<h3>Cryo Sauna FAQ</h3>
								<h4>What is “cryo” ?</h4>
								Cryo uses nitrogen to cool the chamber.
								<br/> Nitrogen makes up 78% of our normal air.
								<br/> It is a friendly, non-toxic gas.
								<h4>What are the benefits of cryo?</h4>
								The practice of using cold elements to ease tension and inflammation
								<br/> is an ancient healing technique. Cryo is a modern method of this same practice.
								<br/> Cryo is an exceptional way to focus on circulation, vital for skin health,
								<br/> organ 'function', mental and emotional wellbeing. This is a great treatment for athletes.
								<br/> Pre-workout, we find that cryo gives you an activating energy boost.
								<br/> After exercise, we find it to be a balancing cool down and can speed recovery.
								<h4>Is it safe?</h4>
								Yes. Cryotherapy has been used as a healing tool since 1978.
								<br/> Our attendant will be with you for the duration of your treatment.
								<h4>How long are the treatments?</h4>
								3 minutes. Pop in before work, after a surf, in your flow or on the go.
								<h4>What do I wear?</h4>
								We provide boots, socks, mittens and gloves. Otherwise, underwear.

								<h3>Radiofrequency FAQ</h3>
								<h4>What is ‘radiofrequency’?</h4>
								Radiofrequency is an electromagnetic energy
								<br/> that has been used as a healing tool for decades.
								<h4>How does it work?</h4>
								Our handpieces send thermal energy into the skin,
								<br/> enabling frayed collagen in the tissue to replenish.
								<br/> A new store of collagen and elastin follows, remodeling
								<br/> the skin’s appearance, firming and smoothing.
								<h4>What are the benefits of radiofrequency?</h4>
								Collagen and elastin are key elements in keeping spring in your skin.
								<br/> Our natural store of these elements fade, resulting in loose skin and wrinkles.
								<br/> Radiofrequency builds stores of collagen and elastin and allows skin to revive its buoyancy,
								<br/> firming and tightening.
								<h4>What does it feel like?</h4>
								We find it comfortable and relaxing.
								<br/> The treatment may feel warming on the skin.
								<br/> Gel is applied so the handpiece can glide.
								<h4>Is it safe?</h4>
								This treatment is noninvasive and is safe in trained hands.

								<h3>Microcurrent FAQ</h3>
								<h4>What is microcurrent?</h4>
								Our microcurrent facial uses two handheld wands
								<br/> and a current to reset skin elasticity and tone.
								<h4>How does it work?</h4>
								Microcurrent is a well trusted and researched technology with over two decades of use.
								<br/> A current of tiny impulses sends waves through the skin,
								<br/> to the center of the muscles, stimulating ATP production.
								<br/> ATP encourages key proteins, collagen and elastin as well as energize the facial muscles.
								<h4>What are the benefits of microcurrent?</h4>
								Increase collagen and elastin production, enhance circulation, firm, tone and reeducate facial muscles.
								<h4>Is it safe?</h4>
								Yes. Our practitioners are well trained.
								<br/> Microcurrent is regularly used for skin treatments in the US and Europe.
								<h4>What does microcurrent feel like?</h4>
								We find microcurrent so soothing it puts you to sleep.
								<br/> The current is gentle and feels a little bit like a face massage with deep gliding sweeps and scoops.
								<h4>How can I enhance my experience?</h4>
								Regular treatments enhance tone and texture of skin.
								<br/> We encourage regular cleansing, toning and moisturizing.
								<br/> We offer an array of potent, effective serums.
								<br/> Our LED treatment is an incredible way to compliment the microcurrent experience.
							</div>
						</div>

					</div>
				</section>


				<Footer />
			</div>
		);
	}
}

export default Location;
