// react
import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { observer } from 'mobx-react';
import moment from 'moment';
import momentTimezone from 'moment-timezone';
import ip from 'ip';

// firebase
import fire from '../fire';
import firebase from 'firebase';

// components
import appState from '../appState'

// assets
import indicator1o3 from '../assets/indicator-1o3.svg'
import waveLogo from '../assets/images/logos/wave.png';

class Step1 extends Component {

	constructor(props) {
		super(props);
		this.state = {
			errors: {},
		};

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		let email = this.emailEl.value;
		let firstName = this.firstNameEl.value;
		let lastName = this.lastNameEl.value;
		let phone = this.phoneEl.value;
		let dob = moment(this.dobEl.value).format('YYYY-MM-DD');

		let isEmailValid = /.+@.+\..+/.test(email);

		let errors = {};
		firstName || (errors.firstName = `Please enter your first name`);
		lastName || (errors.lastName = `Please enter your last name`);
		isEmailValid || (errors.email = `Please enter a valid email address`);
		dob || (errors.dob = `Please enter your birth date`);
		( !isNaN(phone) && phone.length>9 && phone.length<12 ) || (errors.phone = `Please enter a valid phone number`);

		let errorsCount = 0;
		for( let i in errors ) if(errors.hasOwnProperty(i)) errorsCount++;

		console.log('handleSubmit', firstName, lastName, email, phone, dob);

		if (!errorsCount) {

			fire.auth().signInAnonymously().then( user => {

				/* Update user in database */
				// let userRef = fire.database().ref();

				let userDataUpdate = {};

				userDataUpdate[`/users/${user.uid}/firstName`] = firstName;
				userDataUpdate[`/users/${user.uid}/lastName`] = lastName;
	      userDataUpdate[`/users/${user.uid}/email`] = email;
	      userDataUpdate[`/users/${user.uid}/phone`] = phone;
	      userDataUpdate[`/users/${user.uid}/dob`] = dob;
				userDataUpdate[`/users/${user.uid}/createdAt`] = moment().tz('America/New_York').format();
				userDataUpdate[`/users/${user.uid}/ipAddress`] = ip.address();
	      userDataUpdate[`/users/${user.uid}/step1completed`] = true;

				appState.userMeta.step1completed = true;
				/* If user provided a different email, save the previous email as `capturedEmail` property in their record */
				if( appState.userMeta.email && email !== appState.userMeta.email) {
					userDataUpdate.capturedEmail = appState.userMeta.email
				}
				appState.userMeta.email = email;
				/* 🔥 */
				fire.database().ref().update(userDataUpdate).then(()=> {
					/* User data saved to database -- move on to next step */
					browserHistory.push(`/welcome/2`);

				}).catch( error => {
					/* Error saving user data to database */
					console.warn(`Error saving user data to database`);
				});

			}, error => { /* Error upgrading anonyous account to one with email and password */
				console.warn("Error upgrading anonymous account to one with email and password", error);
				this.setState({ errors: { email: 'Email is currently associated with another user. If this is you, please login above'} });
			});

		} else { /* User submitted the form with some fields filled incorrectly */
			console.log(`User's form errors:`, errorsCount, errors );
			this.setState({ errors });
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

		if( appState.userMeta.step1completed ) {
			setTimeout(()=> browserHistory.push(`/welcome/2`),100)
		}

		this.emailEl && appState.userMeta.email && (this.emailEl.value = appState.userMeta.email);
		this.firstNameEl && appState.userMeta.firstName && (this.firstNameEl.value = appState.userMeta.firstName);
		this.lastNameEl && appState.userMeta.lastName && (this.lastNameEl.value = appState.userMeta.lastName);
		this.phoneEl && appState.userMeta.phone && (this.phoneEl.value = appState.userMeta.phone);

		return (
			<section className='container'>

				<div className='row mt-50'>

				</div>

				<div className='progress-indicator-container'>
					<div className='row'>
					<div className='progress-indicator-graphic'>
							<div className='col-xs-2 col-sm-4 '></div>
							<div className='col-xs-8 col-sm-4 center'>
								<img src={ indicator1o3 } style={{ width: '100%', }} alt="Sign Up Progress 1 of 3" />
							</div>
						</div>
					</div>
					<div className='progress-indicator-text'>
						<div className='row'>
							<div className='col-sm-3'></div>
							<div className='col-sm-6 center'>
								<h4>1 of 3</h4>
							</div>
						</div>
					</div>
				</div>

				<div className='signup-form-title'>
					<div className='row'>
						<div className='col-sm-3'></div>
						<div className='col-sm-6'>
							<h3>Sign Up</h3>
						</div>
					</div>
				</div>

				<div className='row signup-form-container'>
					<div className='col-sm-2'></div>
					<div className='col-sm-8'>
						<form onSubmit={this.handleSubmit} noValidate>
							<div className='form-item-container'>
								<div className={this.formGroupClass('firstName')}>
									<label htmlFor='inputFirstName'>First Name</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.firstNameEl = el }
									type='string'
									placeholder='' />
								{this.renderHelpBlock('firstName')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('lastName')}>
									<label htmlFor='inputLastName'>Last Name</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.lastNameEl = el }
									type='string'
									placeholder='' />
								{this.renderHelpBlock('lastName')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('email')}>
									<label htmlFor='inputEmail'>Email</label>
									<input formNoValidate className='form-control'
									maxLength={240}
									ref={ el=> this.emailEl = el }
									type='email'
									placeholder='' />
									{this.renderHelpBlock('email')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('phone')}>
									<label htmlFor='inputPhone'>Phone</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.phoneEl = el }
									type='tel'
									placeholder='' />
									{this.renderHelpBlock('phone')}
								</div>
							</div>

							<div className='form-item-container'>
								<div className={this.formGroupClass('dob')}>
									<label htmlFor='inputBirthday'>Birthday</label>
									<input className='form-control'
									maxLength={240}
									ref={ el=>this.dobEl = el }
									type='date'
									max='2005-01-01'
									placeholder='' />
									{this.renderHelpBlock('dob')}
								</div>
							</div>

							<div className='signup-form-btn-container'>
								<div className='row'>
									<div className='col-sm-2'></div>
									<div className='col-sm-8'>
										<input type='submit' className='btn btn-default btn-block' value='Next' formNoValidate/>
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

export default observer(Step1)
