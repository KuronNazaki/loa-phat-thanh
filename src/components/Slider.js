import React from 'react';
import background from '../asset/images/hero-background.jpg';
import './Slider.scss';

function Slider() {
	return (
		<div className="slider">
			<div className="slider-background">
				<div className="slider-background-overlay"></div>
				<img src={background} alt="Hero Background" />
			</div>
		</div>
	);
}

export default Slider;
