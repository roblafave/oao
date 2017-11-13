import firebase from 'firebase';

// Initialize Firebase
var config = {
	apiKey: "AIzaSyDuAOefXGRifc7dkENsUOXU82JlOPyrHg0",
	authDomain: "on-and-on-7b40c.firebaseapp.com",
	databaseURL: "https://on-and-on-7b40c.firebaseio.com",
	projectId: "on-and-on-7b40c",
	storageBucket: "",
	messagingSenderId: "217667605399"
};

let fire = firebase.initializeApp(config);
window.fire = fire;


export default fire;
