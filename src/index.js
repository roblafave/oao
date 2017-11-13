import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from './pages/App';
import appState from './appState';
// import './assets/App.css';

// Static Pages
import Home from './pages/Home';
import About from './pages/About';
import Treatments from './pages/Treatments';
import Book from './pages/Book';
import Location from './pages/Location';

import WavePreSignup from './pages/WavePreSignup';
import EmailCapture from './pages/EmailCapturePage';
import Page404 from './pages/Page404';

// Sign Up
import Step1 from './signup/Step1';
import Step2 from './signup/Step2';
import Confirmation from './signup/Confirmation';
import Login from './signup/Login';


// Profile
import Profile from './profile/Profile';
import Settings from './signup/Settings';
import ChangeLogin from './signup/ChangeLogin';
import PasswordReset from './signup/PasswordReset';

import AdminUsers from './admin/AdminUsers';

const Signup = ({ children }) => <div>{children}</div>;
const SignupPro = ({ children }) => <div>{children}</div>;
const SignupStudent = ({ children }) => <div>{children}</div>;

// const Advisor = ({ children }) => <div>{children}</div>;

let pageMeta = { /* browser title, page header */
  '/treatments': { title: 'Treatments', header: 'Treatments' },
  '/location': { title: 'Location', header: 'Location' },
  '/wave/login': { title: 'Login', header: 'Login' },
  default: { title: 'Welcome!', header: 'Welcome!' },
};

function updateTitle() {
  let path = window.location.pathname;
  // console.log(path);

  if (!pageMeta[path]) {
    // try to find a similar path that has a title and use it
    for (path in pageMeta) {
      if (window.location.pathname.indexOf(path) === 0) {
        break;
      }
    }

    if (!pageMeta[path]) { path = 'default'; }
  }

  appState.pageTitle = pageMeta[path].title;
  document.getElementsByTagName('title')[0].innerText =  'On & On - ' + pageMeta[path].header;

  window.Intercom('update');
}

ReactDOM.render(
	<Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />

			<Route path='/welcome' component={Signup} onEnter={updateTitle}>
				<IndexRoute component={Step1} />
					<Route path='2' component={Step2} onEnter={updateTitle} />
					<Route path='confirmation' component={Confirmation} onEnter={updateTitle} />
			</Route>

      <Route path='/login' component={Login}  onEnter={updateTitle} />
      <Route path='/profile/:id' component={Profile}  onEnter={updateTitle} />
      <Route path='/settings' component={Settings}  onEnter={updateTitle} />
      <Route path='/changelogin' component={ChangeLogin}  onEnter={updateTitle} />

			<Route path='/about' component={About}  onEnter={updateTitle} />
			<Route path='/treatments' component={Treatments}  onEnter={updateTitle} />
			<Route path='/book' component={Book} onEnter={updateTitle} />
			<Route path='/location' component={Location} onEnter={updateTitle} />
			<Route path='/welcome' component={Step1} onEnter={updateTitle} />
			<Route path='/welcome/2' component={Step2} onEnter={updateTitle} />

      <Route path='/signup' component={EmailCapture}  onEnter={updateTitle} />
      <Route path='/resetpassword' component={PasswordReset}  onEnter={updateTitle} />

      <Route path='/admin/users' component={AdminUsers}  onEnter={updateTitle} />

			<Route path='*' component={Page404} onEnter={updateTitle} />

		</Route>
	</Router>,
	document.getElementById('root')
);
