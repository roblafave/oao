// react
import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { observer } from 'mobx-react';

// firebase
import fire from '../fire';

// components
import appState from '../appState'

// assets
import indicator2o3 from '../assets/indicator-2o3.svg'


class Step2 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		let termsAccepted = this.termsAcceptedEl.checked;

		let errors = {};
		termsAccepted || (errors.termsAccepted = `Please accept the legal terms`);

		let errorsCount = 0;
		for( let i in errors ) if(errors.hasOwnProperty(i)) errorsCount++;

		if (!errorsCount) {
			/* Update user in database */
			let userRef = fire.database().ref('/users/' + appState.user.uid);

			let userDataUpdate = { termsAccepted: true, step2completed: true
			};
			appState.userMeta.step2completed = true;
			appState.userMeta.errorsCount = errorsCount;

			/* 🔥 */
			userRef.update(userDataUpdate).then(()=>{
				/* User data saved to database -- move on to next step */
				browserHistory.push(`/welcome/confirmation`);

				// window.Intercom("update", userDataUpdate);

			}).catch( error => {
				/* Error saving user data to database */
				console.warn(`Error saving user data to database`);
			});
		} else { /* User submitted the form with some fields filled incorrectly */
			console.log(`User's form errors:`, errorsCount, errors );
			this.setState({ errors: errors });
			appState.userMeta.errorsCount = errorsCount;
		}
	}


	renderHelpBlock(fieldName){
		return this.state.errors[fieldName] ?
			<div className="help-block">{this.state.errors[fieldName]}</div> : ''
	}
	formGroupClass(fieldName){
		return `form-group` + ( this.state.errors[fieldName] ? ' has-error' : '' );
	}

	render() {

		if( appState.userMeta.step2completed ) {
			setTimeout(()=> browserHistory.push(`/welcome/confirmation`) ,100)
		}

		return (
			<section className='container'>

				<div className='row mt-50'>

				</div>

				<div className='progress-indicator-container'>
					<div className='row'>
					<div className='progress-indicator-graphic'>
							<div className='col-xs-2 col-sm-4 '></div>
							<div className='col-xs-8 col-sm-4 center'>
								<img src={ indicator2o3 } style={{ width: '100%', }} alt="Sign Up Progress 2 of 3" />
							</div>
						</div>
					</div>
					<div className='progress-indicator-text'>
						<div className='row'>
							<div className='col-sm-3'></div>
							<div className='col-sm-6 center'>
								<h4>2 of 3</h4>
							</div>
						</div>
					</div>
				</div>

				<div className='signup-form-title'>
					<div className='row'>
						<div className='col-sm-3'></div>
						<div className='col-sm-6'>
							<h3>Services Agreement</h3>
						</div>
					</div>
				</div>

				<div className='row signup-form-container'>
					<div className='col-sm-2'></div>
					<div className='col-sm-8'>
					<p>Please review to acknowledge any contraindications for the following modalities:</p>
					<br />
						<form onSubmit={this.handleSubmit}>

							{termsContent()}
							<br />

							<div className={this.formGroupClass('termsAccepted')}>
								<div className="checkbox">
									<label htmlFor='inputTermsAccepted'>
										<input id='inputTermsAccepted'
										ref={ el=> this.termsAcceptedEl = el }
										type='checkbox' />
										I certify that I have read and fully understand the above
										paragraphs, that I have had sufficient opportunity for discussion
										and to ask questions and to consult legal and medical
										professionals of my own choosing, and that I hereby consent to the
										procedures described above.

									</label>
								</div>
							</div>

							<div className='signup-form-btn-container'>
								<div className='row'>
								<div className='col-sm-2'></div>
								<div className='col-sm-8'>
										<input type='submit' className='btn btn-default btn-block' value='Next' />
										{appState.userMeta.errorsCount > 0 &&
											<div className="onboarding-help-block">
											Please accept the legal terms above to acknowledge contraindications for the following modalities by clicking the checkbox.
											</div>
										}
									</div>
								</div>
							</div>
						</form>
					</div>
					<div className='col-sm-3'></div>
				</div>
			</section>
		);
	}
}


function termsContent(){
	return (
		<div id="legal-content" style={{overflowY: 'scroll', height:200, border:'1px solid #ccc', backgroundColor:'#FFFFFF', borderRadius:4, boxShadow: 'inset 0 1px 1px rgba(0,0,0,.075)', padding:'6px 12px', fontSize:'14px'}}>
				<b>LED</b>
				<br />
				Individuals with any of the following symptoms or situations may​ ​not​, under any circumstance, undergo LED light therapy:
				<ul>
					<li>Suspicious lesions or malignant tumors</li>
					<li>Individuals with photo-allergy or sensitivity to light</li>
					<li>History of epilepsy or epileptic seizures</li>
					<li>Individuals taking photosensitizing drugs (Tetracycline, Cortisone
					Injections, Steroids, St. John’s Wort, certain antibiotics and
					anti-inflammatories)</li>
					<li>Individuals with a history of migraines induced by light</li>
				</ul>
				<br />
				Individuals using one or more of the following are not eligible for LED light therapy:
				<ul>
					<li>Retin-a</li>
					<li>Renova</li>
					<li>Tretin X</li>
					<li>Differin</li>
					<li>Tazorac</li>
					<li>Retinol</li>
					<li>AHA</li>
					<li>BHA</li>
					<li>Benzoyl Peroxide</li>
				</ul>
				<br />
				Individuals with any of the following symptoms or situations may​ ​undergo LED light therapy with proof of physician's approval:
				<ul>
					<li>Pregnant</li>
					<li>Bipolar disorder</li>
					<li>Systemic lupus erythematosus</li>
				</ul>
				<br />
				I hereby acknowledge I do not have any of the above conditions and I have not used any of the above products, ingredients, or medications in the past 10 days.
				<br /><br />
				<b>Far​ ​Infrared</b>
				<br />
				Individuals with any of the following symptoms or situations may​ ​not​, under any circumstance undergo Far Infrared Sauna therapy:
				<ul>
					<li>Hemophiliac</li>
					<li>Sensitivity to heat</li>
					<li>Pregnancy</li>
				</ul>
				<br />
				Individuals with any of the following symptoms or situations may​ ​undergo Far Infrared with proof of physician's approval:
				<ul>
					<li>Anyone over the age of 80</li>
					<li>Diseases associated with reduced ability or inability to sweat (Multiple Sclerosis, Central Nervous System Tumors and Diabetes with Neuropathy)</li>
					<li>Pacemakers and defibrillators</li>
					<li>Metal pins, rods, artificial joints or any other surgical implants generally reflect infrared waves and thus are not heated by this system. Nevertheless, you should consult your physician prior to using an infrared sauna</li>
				</ul>
				<br />
				I hereby acknowledge I do not have any of the above conditions.
				<br /><br />
				<b>Microcurrent</b>
				<br />
				Individuals with any of the following symptoms or situations may​ ​not​, under any circumstance, undergo Microcurrent facial:
				<ul>
					<li>Pacemaker</li>
					<li>Epilepsy</li>
					<li>History of seizures</li>
					<li>Metal plates or pins in the areas of procedure</li>
					<li>Recent surgery</li>
					<li>Phlebitis/Thrombosis</li>
					<li>Spine problems</li>
					<li>Recent childbirth</li>
					<li>Active cancer</li>
				</ul>
				<br />
				Individuals with any of the following symptoms or situations may undergo Microcurrent facials with proof of physician's approval:
				<ul>
					<li>Diabetes</li>
					<li>History of cancer</li>
				</ul>
				<br />
				I hereby acknowledge I do not have any of the above conditions.
				<br /><br />
				<b>Endermologie</b>
				<br />
				Individuals with any of the following symptoms or situations may​ ​not​, under any circumstance, undergo Endermologie:
				<ul>
					<li>Malignant cancer</li>
					<li>Infection or rash</li>
					<li>Pregnancy</li>
					<li>Anticoagulant therapy such as: Heparin or Coumadin</li>
					<li>Large varicosities</li>
				</ul>
				<br />
				I hereby acknowledge I do not have any of the above conditions.
				<br /><br />
				<b>Cryo</b>
				<br />
				Time limitation: the maximum amount of time in the cryo chamber cannot exceed 3 minutes. Each guest is required to wear the provided socks, mittens, gloves and shoes. When entering the cryo chamber guests must be completely dry and free of any moisture. Inhaling nitrogen can result in fainting.
				<br /><br />
				You must be at least 13 years old to participate in whole body cryotherapy.
				<br /><br />
				<b>Note: Parental consent is required for anyone 17 years or younger.</b>
				<br /><br />
				Individuals with any of the following symptoms or situations may not, under any circumstance undergo Cryo at our facility:
				<ul>
					<li>Untreated Hypertension</li>
					<li>Heart attack within previous 6 months</li>
					<li>Decompensating diseases (edema) of the cardiovascular and respiratory system;</li>
					<li>Congestive Heart Failure</li>
					<li>COPD</li>
					<li>Chronic liver disease</li>
					<li>Unstable Angina Pectoris</li>
					<li>Pacemaker</li>
					<li>Peripheral Arterial Occlusive Disease</li>
					<li>Deep Vein Thrombosis (DVT) or known circulatory dysfunction</li>
					<li>Acute febrile respiratory (Flu like respiratory conditions)</li>
					<li>Acute kidney and urinary tract diseases</li>
					<li>Severe Anemia</li>
					<li>Cold Allergenic Phenomenon (known allergy to cold contactants)</li>
					<li>Heavy consumerist diseases (abnormal bleeding)</li>
					<li>Seizure disorders</li>
					<li>Bacterial and viral infections of the skin</li>
					<li>Wound healing disorders (open sores or discharging wound/skin conditions)</li>
					<li>Alcohol and drug abuse</li>
					<li>Valvular heart disease</li>
					<li>Recent heart surgery</li>
					<li>Ischemic heart disease</li>
					<li>Raynaud’s disease</li>
					<li>Polyneuropathies</li>
					<li>Pregnancy</li>
					<li>Vasculitis</li>
					<li>Hyperhidrosis – heavy perspiration</li>
					<li>Diabetes</li>
				</ul>
				<br />
				<u>IMPORTANT NOTICE</u>: Whole Body Cryotherapy (WBC) is not an FDA approved medical treatment. It is not used to treat, cure or prevent any diseases. Rather it is used to assist the body in maximizing its innate self-healing abilities. Before trying WBC, you should always ask your medical professional if the treatment is safe and appropriate for you. WBC treatments are not administered by a licensed medical professional.
				<br /><br />
				Individuals with any of the following symptoms or situations <b>may</b> ​undergo Cryo with proof of physician's approval:
				<br />
				Cardiac conditions such as:
				<ul>
					<li>Arthymia, Angina, CHD</li>
					<li>High blood pressure</li>
					<li>Superficial nerves</li>
					<li>Healing wounds</li>
				</ul>
				<br />
				I hereby acknowledge I do not have any of the above conditions.
				<br /><br />
				<b>Radiofrequency</b>
				<br />
				Individuals with any of the following symptoms or situations may​ ​not​, under any circumstance, undergo Radiofrequency:
				<ul>
					<li>If sunburned, heat from RF may irritate burn.</li>
					<li>Subjects with implanted pacemakers, arrhythmias or any other severe known heart disorder.</li>
					<li>Subjects on any medication that would affect the characteristic of the skin (medical or hormonal), such as Isotretinoin (Accutane) within the past two months.</li>
					<li>No Pregnant or lactating Subjects.</li>
					<li>Subjects who suffer from autoimmune disorders or diabetes.</li>
					<li>Subjects using blood thinning medications.</li>
					<li>Subjects with clotting disorders.</li>
					<li>History of any kind of cancer.</li>
					<li>Impaired immune system due to immunosuppressive diseases such as AIDS and HIV, or use of immunosuppressive medications.</li>
					<li>Patients with history of diseases stimulated by heat, such as recurrent Herpes Simplex in the treatment area, may be treated only following a prophylactic regime.</li>
					<li>History of skin disorders, keloids, abnormal wound healing, as well as very dry and fragile skin.</li>
					<li>Use of non-steroidal anti-inflammatory drugs (NSAIDS, e.g., ibuprofen containing agents) one week before and after each treatment session.</li>
					<li>Any other medical condition according to the doctor’s judgment. </li>
				</ul>
				Local​ ​treatment​ ​area​ ​contraindications:
				<ul>
					<li>Subjects with any implantable metal device in the treatment area.</li>
					<li>Subjects who have any form of suspicious lesion on the treatment area.</li>
					<li>Subjects with body piercing (in the treated area).</li>
					<li>Any active condition in the treatment area, such as sores, psoriasis, eczema, and rash.</li>
					<li>Face lift or eyelid surgery within a year prior to treatment.</li>
					<li>Facial dermabrasion, facial resurfacing, or deep chemical peeling within the last three months, if face is treated.</li>
					<li>Botox®/collagen/fat injections or other methods of augmentation with injected material in the treated area within one month prior to treatment.</li>
					<li>Having received treatment with light, RF or other devices in the treated area within one month prior to treatment. (contradictory?</li>
					<li>Any surgical procedure in the treatment area within the last 3 months or before complete healing.</li>
					<li>Treating over tattoo or permanent makeup.</li>
					<li>Excessively tanned skin from sun, tanning beds or tanning creams within the last two weeks.</li>
					<li>Treating over sensitive areas such as the Thyroid, Breast, etc.</li>
				</ul>
				<br />
				I hereby acknowledge I do not have any of the above conditions.
				<br /><br />
				<b>No​ ​Drugs,​ ​Alcohol​ ​and​ ​Other​ ​Controlled​ ​Substances</b>
				<br />
				I hereby confirm that I am not allowed to be, and will not be, under the influence of drugs, alcohol and/or any other controlled substances while undergoing any treatments.
				<br /><br />
				<b>Your​ ​Duty​ ​to​ ​Discontinue​ ​Treatment</b>
				<br />
				I hereby acknowledge and agree that it is my responsibility to discontinue treatment at ON & ON if there is any change in any aspect of my health status as confirmed above. I understand that if I continue treatment after any change in my health status, I am assuming any and all risks of damage, injury and/or death in doing so.
				<br /><br />
				<b>Authorization</b>
				<br />
				I hereby authorize the technician(s) at ON & ON to perform Microcurrent Facial, LED light therapy, Far Infrared Sauna, Cryotherapy, Facials, Radiofrequency, and/or Endermologie on me. I fully understand these procedures have limited applications. I am aware the above procedures are not an exact science and I acknowledge that reputable practitioners cannot properly guarantee quality and/or results or freedom from complications, and I have not received such guarantees. I acknowledge I have had the opportunity to ask questions and to consult medical professionals of my own choosing before electing to have any of these procedures, and I fully understand the following treatments Microcurrent Facial, LED light therapy, Far Infrared Sauna, Cryotherapy, Facials, Radiofrequency and Endermologie. The procedures are generally considered cosmetic, and may not be covered by insurance. I understand I am responsible for all costs of the procedure and related treatments.
				<br /><br />
				<b>Waiver</b>
				<br />
				ON & ON believes that the procedures we offer are generally safe, and that if side effects do occur they are usually mild and short lasting. I understand and acknowledge there are risks involved with the treatment of the Microcurrent Facial, LED light therapy, Far Infrared Sauna, Cryotherapy, Facials, Endermologie, Facials, and/or Radiofrequency. I have had the opportunity to ask questions regarding these risks and other possible complications, and to consult medical professionals of my own choosing before electing to have any of these procedures. I understand any false, misleading, and/or incomplete information I have given to ON & ON, and/or any decision on my part to continue treatment after a change in my health status, may lead to undesired results and complications. As an inducement to ON & ON to provide these procedures to me at request, and as a condition for ON & ON’s willingness to provide such procedures, I agree as follows: (a) To the maximum extent permitted by applicable law, I hereby waive, release and discharge any and all present and future claims that I may be entitled to assert against ON & ON, its owners, officers, employees, contractors, technicians, vendors and agents (collectively, the “Released Parties”) by reason of the procedures and/or otherwise, including but not limited to claims based on unsatisfactory results, complications, side effects and/or negligence, loss or damage to person or property, premises liability, and any and all loss, liability, cost, expense, damage, injury and/or death that may result from such claims; and (b). <b>I agree I will assume the entire risk and full responsibility for any and all such losses, liabilities, costs, expenses, injuries, losses, damages, and/or death which might occur to me and/or my property</b> ​during or after these procedures, including the lack of desired results, complications or side effects; and (c). I agree this Waiver shall bind me, the members of my family, and any spouse or domestic partner, if I am alive, as well as my estate, family, heirs, administrators, personal representatives or assigns if I am deceased, and shall be deemed as a “Release, Waiver, Discharge and Covenant Not to Sue” as to each and all of the Released Parties.
				<br /><br />
				<b>Maximum​ ​Liability​ ​for​ ​Claims</b>
				<br />
				On & On’s maximum aggregate liability to client related to or in connection with the procedures performed by the Released Parties On & On, and/or its owners, officers, will be limited to the total amount paid to On & On by client for the procedures described in this authorization and consent. I understand that this is a cap on the amount I may be entitled to receive if I prevail in a legal claim and not a refund policy.
		</div>
	)
}


export default observer(Step2);
