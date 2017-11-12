import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyC4h4f1__b_RRXxCN4bRJO7fRbQYtvvRzs",
	authDomain: "on-and-on-96714.firebaseapp.com",
	databaseURL: "https://on-and-on-96714.firebaseio.com",
	projectId: "on-and-on-96714",
	storageBucket: "on-and-on-96714.appspot.com",
	messagingSenderId: "1026959236319"
};

let fire = firebase.initializeApp(config);
window.fire = fire;


export default fire;
