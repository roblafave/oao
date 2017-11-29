import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';
import { observer } from 'mobx-react';
import firebase from 'firebase';
import fire from '../fire';
import appState from '../appState';
import logo from '../assets/OAOlogo.svg';
import hamburger from '../assets/hamburger.svg';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mobnav: false, /* is mobile navigation open */
			user: {},
			matchUser: {},
			rmUser: {}
		};
	}

	componentDidMount() {
		let loadData = () => {
			if(!fire.auth().currentUser) {
				setTimeout( loadData, 50);
				return;
			}
			const currentUser = fire.auth().currentUser.uid;
			if(currentUser) {
				fire.database().ref(`users/${currentUser}`).once('value').then( s =>{
					let user = s.val();
					if(user) {
						this.setState({ user });

						// user.waveMatch
						fire.database().ref(`users/${user.waveMatch}`).once('value').then( s2 =>{
							let matchUser = s2.val();
							if(matchUser) this.setState({ matchUser });
						});

						// user.waveRM
						fire.database().ref(`users/${user.waveRM}`).once('value').then( s3 =>{
							let rmUser = s3.val();
							if(rmUser) this.setState({ rmUser });
						});
					}
				});

				fire.storage().ref(`/Profiles/Avatars/${currentUser}`).getDownloadURL().then( avatarURL =>{
					if(avatarURL) this.setState({ avatarURL })
				})
			}
		}
		setTimeout( loadData, 50)
	}

	componentWillUnMount() {
		this.loadData();
	}

	closeMobileNav(e) {
		this.setState({ mobnav: false });
	}

	openMobileNav(e) {
		e.preventDefault();
		this.setState({ mobnav: true });
	}


	render() {
		const logout = () => {
			firebase.auth().signOut().then(function() {
				close();
				location.assign('/wave/login');
			}, function(error) {
				console.warn('Error signing out:', error);
			});
		}
		return (
			<nav className="navbar navbar-default">
				<div className="container navbar-container">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" onClick={this.openMobileNav.bind(this)}>
							<img src={hamburger} alt=""/>
						</button>
						<Link to="/" className='navbar-brand'><img src={ logo } style={{ width: 170 }} alt="On & On" /></Link>
					</div>

					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav navbar-right">
							<li><Link to="/about">about</Link> </li>
							<li><Link to="/treatments">treatments</Link> </li>
							<li><Link to="/book">book</Link></li>
							<li><Link to="/faq">faq</Link></li>
							<li><Link to="/location">location</Link></li>
						</ul>
					</div>
				</div>
				{this.state.mobnav ?
					<Mobnav
						close={this.closeMobileNav.bind(this)}
						waveParticipant={this.state.user.waveParticipant || {}}
						avatar={this.state.avatarURL}
						user={this.state.user}
						userMatchInfo={this.state.matchUser}/> : ''}
			</nav>
		);
	}
}

const Mobnav = observer(({ close, waveParticipant, avatar, userMatchInfo, user }) => {
	const { firstName, lastName} = userMatchInfo;
	const logout = () => {
		firebase.auth().signOut().then(function() {
			close();
			location.assign('/wave/login');
		}, function(error) {
		  console.warn('Error signing out:', error);
		});
	}
	return (
		 <div className="navbar-mobile visible-xs-block">
			<div className="container">
					<div>
						<ul className="nav navbar-nav nav-mobile-links">
							<li><Link className='' onClick={close} to="/">home</Link> </li>
							<li><Link onClick={close} to="/about">about</Link></li>
							<li><Link onClick={close} to="/treatments">treatments</Link></li>
							<li><Link onClick={close} to="/book">book</Link></li>
							<li><Link onClick={close} to="/faq">faq</Link></li>
							<li><Link onClick={close} to="/location">location</Link></li>
							<li><Link onClick={close} to="/welcome">signup waiver</Link></li>
						</ul>
							{appState.userMeta.emailauth &&
								<span>
									<hr/>
									<ul className="nav navbar-nav">
										<li> <div className='navbar-mobile-icon navbar-mobile-icon-settings'></div><Link onClick={close} to="/settings">Settings</Link></li>

										<li><div className='navbar-mobile-icon navbar-mobile-icon-logout'></div>
										<button className='btn btn-link' onClick={() => logout()}>Logout</button>
										</li>
									</ul>
								</span>
							}
					</div>


			</div>
			<div className="mobclose" onClick={close}></div>
		</div>
	);
});

export default observer(withRouter(Navbar));
