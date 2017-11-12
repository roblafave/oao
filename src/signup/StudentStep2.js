import React, { Component } from 'react';
import fire from '../fire';
import { observer } from 'mobx-react';
import { browserHistory } from 'react-router';
import appState from '../appState';
import moment from 'moment';

// assets
import waveLogo from '../assets/images/logos/wave.png';
import indicator2o3 from '../assets/indicator-2o3.svg'

class StudentStep2 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			errors: {},
			referrer: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReferrerChange = this.handleReferrerChange.bind(this);
	}

	handleReferrerChange(e) {
		this.setState({ [e.target.name]:e.target.value });
			if(e.target.name==='referrer') { setTimeout(()=>{
				this.referrerOtherEl.focus()
			}, 80)
		}
	};

	handleSubmit(e) {
		e.preventDefault();

		let bio = this.bioEl.value;
		let app = this.appEl.value;
		let brand = this.brandEl.value;
		let obsessions = this.obsessionsEl.value;
		let experience = this.experienceEl.value;
		let goal = this.goalEl.value;
		let referrer = this.referrerEl.value;
		if(referrer === 'Other') { referrer = this.referrerOtherEl.value; }

		let errors = {};
		bio || (errors.bio = `Please enter your bio`);
		app || (errors.app = `Please enter your favorite app`);
		brand || (errors.brand = `Please enter a brand you love`);
		obsessions || (errors.obsessions = `Please enter your current obsessions`);
		experience || (errors.experience = `Please select your level of tech experience`);
		referrer || (errors.referrer = `Please select how you heard about #BUILTBYGIRLS`);
		goal || (errors.goal = `Please enter a skill or goal`);

		let errorsCount = 0;
		for( let i in errors ) if(errors.hasOwnProperty(i)) errorsCount++;


		if (!errorsCount) {
			/* Update user in database */
			let userRef = fire.database().ref('/users/' + appState.user.uid);

			let userDataUpdate = { bio, app, brand, obsessions, experience, referrer, goal,
				step2completed: true
			};
			appState.userMeta.step2completed = true;
			appState.userMeta.errorsCount = errorsCount;

			/* 🔥 */
			userRef.update(userDataUpdate).then(()=>{
				/* User data saved to database -- move on to next step */
				appState.initIntercom(userDataUpdate);
				// window.Intercom("update", userDataUpdate);

				browserHistory.push(`/wave/signup/${appState.userMeta.userType}/3`);


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

		if( appState.userMeta.step3completed ) {
			setTimeout(()=> browserHistory.push(`/`) ,100)
		}
		else if (appState.userMeta.userType === 'student' && !appState.userMeta.dobBypass && appState.userMeta.dob > moment().subtract(15, 'years').format('YYYY[-]MM[-]DD')) {
			setTimeout(()=> browserHistory.push(`/wave/lt15`) ,100);
		} else if (appState.userMeta.userType === 'student' && !appState.userMeta.dobBypass && appState.userMeta.dob < moment().subtract(19, 'years').format('YYYY[-]MM[-]DD')) {
			setTimeout(()=> browserHistory.push(`/wave/gt18`) ,100);
		}

		return (
			<section className='container'>

				<div className='row mt-20'>
					<img src={ waveLogo } className={ 'center-block img-responsive mt-30 mb-30'} style={{ maxHeight: 25 }} alt="#BUILTBYGIRLS Advisor Logo" />
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
							<h3>About You</h3>
						</div>
					</div>
				</div>

				<div className='row signup-form-container'>
					<div className='col-sm-2'></div>
					<div className='col-sm-8'>
						<form onSubmit={this.handleSubmit}>


							<div className='form-item-container'>
								<div className={this.formGroupClass('app')}>
									<label htmlFor='inputApp'>My favorite app is...</label>
									<input className="form-control"
									maxLength={240}
									ref={ el=>this.appEl = el }
									type='text'
									placeholder=''>
									</input>
									{this.renderHelpBlock('app')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('brand')}>
									<label htmlFor='inputBrand'>One brand I really love is...</label>
									<input className="form-control"
									ref={ el=>this.brandEl = el }
									maxLength={240}
									type='text'
									placeholder=''>
									</input>
									{this.renderHelpBlock('brand')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('obsessions')}>
									<label htmlFor='inputObsessions'>I'm currently obsessed with...</label>
									<textarea className="form-control" rows="3"
									ref={ el=>this.obsessionsEl = el }
									maxLength={240}
									type='text'
									placeholder='No judgement - Dots, La La Land, Beyonce pregnancy updates,  you name it. (Maximum: 240 characters)'>
									</textarea>
									{this.renderHelpBlock('obsessions')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('experience')}>
									<label>My level of tech experience is...</label>
										<select className="form-control" ref={ el=>this.experienceEl = el }>
											<option value=""> -- select an option -- </option>
											<option value='0'>0 - What’s Coding?</option>
											<option value='1'>1 - I have basic coding skills</option>
											<option value='2'>2 - I’ve completed a coding program</option>
											<option value='3'>3 - I build my own tech products</option>
										</select>
									{this.renderHelpBlock('experience')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('referrer')}>
									<label htmlFor='inputReferrer'>
										I heard about #BUILTBYGIRLS through...
									</label>
									<select className="form-control" name='referrer' onChange={ this.handleReferrerChange } value={this.state.referrer} ref={ el=> this.referrerEl = el }>
										<option value=""> -- select an option -- </option>
										<optgroup label='A Coding Program'>
											<option value='AFSE'>AFSE</option>
											<option value='Black Girls Code'>Black Girls Code</option>
											<option value='Girls Who Code'>Girls Who Code</option>
											<option value='Kode with Klossy'>Kode with Klossy</option>
											<option value='Upperline Code'>Upperline Code</option>
											<option value='Other Programs'>Other Programs</option>
										</optgroup>
										<optgroup label='A Girls’ Leadership Program'>
											<option value='Girl Scouts'>Girl Scouts</option>
											<option value='Girls, Inc.'>Girls, Inc.</option>
											<option value='GirlUp'>GirlUp</option>
											<option value='StepUp'>StepUp</option>
											<option value='Other Leadership Program'>Other Leadership Program</option>
										</optgroup>
										<option value='School Club'>A School Club</option>
										<option value='Social Media'>Social Media (Instagram, Twitter, Facebook)</option>
										<option value='Friend'>A Classmate or Friend</option>
										<option value='Other'>Other</option>
									</select>
									<div className='' style={{ display: this.state.referrer==='Friend'? 'block': 'none'  }}>
										<input
											type='text'
											className='form-control'
											ref={ el=> this.referrerOtherEl = el }
											placeholder="Please enter friend or classmate's name" />
									</div>
									<div className='' style={{ display: this.state.referrer==='Other'? 'block': 'none'  }}>
										<input
											type='text'
											className='form-control'
											ref={ el=> this.referrerOtherEl = el }
											placeholder="Please enter how you heard about us" />
									</div>

									{this.state.errors.referrer && <div className="help-block">{this.state.errors.referrer}</div>}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('goal')}>
									<label htmlFor='inputGoal'>What skills are you most interested in developing?</label>
									<textarea className="form-control" rows="3"
										maxLength={240}
									ref={ el=>this.goalEl = el }
									id='inputGoal'
									type='text'
									placeholder='Think about a goal you have for the program and what would help you accomplish it and get to the next level -- understanding how to get from ideation to creation, developing your networking skills, etc. (Maximum: 240 characters)'>
									</textarea>
									{this.renderHelpBlock('goal')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('bio')}>
									<label htmlFor='inputBio'>The Essentials</label>
									<textarea className="form-control" rows="3"
										maxLength={240}
										ref={ el=>this.bioEl = el }
										id='inputBio'
										type='text'
										placeholder='Give us a short bio to share with your Advisor. (Maximum: 240 characters)'>
									</textarea>
									{this.renderHelpBlock('bio')}
								</div>
							</div>

							<div className='signup-form-btn-container'>
								<div className='row'>
									<div className='col-sm-6'>
										<input type='submit' className='btn btn-default btn-block' value='Next' />
									</div>
								</div>
								{appState.userMeta.errorsCount > 0 &&
									<div className="onboarding-help-block">
										Please fill in missing information above.
									</div>
								}
							</div>
						</form>
					</div>
					<div className='col-sm-3'></div>
				</div>
			</section>
		);
	}
}




export default observer(StudentStep2);
