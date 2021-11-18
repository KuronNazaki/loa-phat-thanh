import React from 'react';
import NavBar from './NavBar.js';
import background from '../images/hero-background.jpg';

function Hero() {
	return (
		<div className="hero">
			<div className="wrapper">
				<NavBar />
				<div className="hero-background">
					<div className="hero-background-overlay"></div>
					<img src={background} alt="Hero Background" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
