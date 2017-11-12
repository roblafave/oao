import { extendObservable } from 'mobx'
import fire from './fire'

class AppState {
	constructor(){
		extendObservable(this, {
			/* The properties of the appState: */
			user: null, /* user auth object */
			userMeta: {}, /* user's data from database */
			// userType: '', // student | professional
			// firstName: '',
			// lastName: '',
			// email: '',
			pageTitle: '',
		});

		fire.auth().onAuthStateChanged( user => {
			this.user = user;

			console.log('user is',
					user ? user : 'Not Authenticated',
					( user && user.isAnonymous ) ? `${user.uid} (anonymous)` : ''
					);

			if (!user) { /* User is not authenticated yet - we'll sign them in anonymously */
				fire.auth().signInAnonymously().then( user => {
					console.log('Anonymous Authentication:', user);
				} );
			} else { /* User is authenticated - get their metadata from database */
				fire.database().ref(`/users/${user.uid}`).once('value', s => {
					let u = s.val();
					if( u ){
						this.userMeta = u;
						console.log('Authenticated User:', u.firstName, u.lastName, u.email);
						// if( u.email ) this.email = u.email;
						// if( u.userType ) this.userType = u.userType;
						// if( u.firstName ) this.firstName = u.firstName;
						// if( u.lastName ) this.lastName = u.lastName;
					}
				})
			}

		});


	}

}

const appState = new AppState();

export default appState;
