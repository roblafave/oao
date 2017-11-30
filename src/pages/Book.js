// react
import React, { Component } from 'react';
// import { Link } from 'react-router';

// components
import Footer from '../components/Footer';
import SquareAppointment from '../components/SquareAppointment';

// assets



class Book extends Component {

	// constructor(props) {
	//	 super(props);
	// }

	getIframe = () => document.querySelector('iframe[src^="https://squareup.com/appointments"]')

	componentDidMount(){
		let iframe = this.getIframe();
		console.log('componentDidMount', iframe);
		if(iframe){
			iframe.style.display = 'block';
			iframe.style.minHeight = '1000px';
			iframe.style.widget.backgroundColor = '#f7f0de';
			this.iframeContainer.after(iframe);
		}
	}

	componentWillUnmount(){
		let iframe = this.getIframe();
		console.log('componentWillUnmount', iframe);
		if(iframe){
			iframe.style.display = 'none';
			document.body.insertBefore(iframe, null);
		}
	}

	render() {
		return (
			<div>
				<section className='hero'>
					<div className='container'>
						<div className='navbar-oao-page-container'>
							<div className='navbar-oao-link-active-book'></div>
						</div>
						<div className='row hero-container-text'>
							<div className='col-sm-12' ref={ el => this.iframeContainer = el}>
							</div>
						</div>
						<div className='row'>
							<div className='col-sm-12'>
								<SquareAppointment />

							</div>
						</div>
					</div>
				</section>



			</div>
		);
	}
}

export default Book;
