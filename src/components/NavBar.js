import React, { useState, useEffect } from 'react';
import { debounce } from '../utilities/helpers.js';
import logo from '../asset/images/navbar-logo.png';
import Menu from './Menu.js';
import './Navbar.scss';

function NavBar() {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	let scaledLogo = logo + ' 2x';
	const navBarOnScroll = {
		background: 'black',
		boxShadow: `0.1px 3.9px 3.6px rgba(0, 0, 0, 0.022),
  	0.3px 9.9px 9.1px rgba(0, 0, 0, 0.031),
  	0.7px 20.2px 18.6px rgba(0, 0, 0, 0.039),
  	1.5px 41.6px 38.3px rgba(0, 0, 0, 0.048),
  	4px 114px 105px rgba(0, 0, 0, 0.07)`,
	};

	useEffect(() => {
		const handleScroll = debounce(() => {
			const currentScrollPos = window.pageYOffset;

			setVisible(
				(prevScrollPos > currentScrollPos &&
					prevScrollPos - currentScrollPos > 70) ||
					currentScrollPos < 10
			);
		}, 100);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos, visible]);

	return (
		<div className="navbar" style={visible ? {} : navBarOnScroll}>
			<div className="wrapper">
				<div className="container">
					<div className="navbar-container">
						<img
							srcSet={scaledLogo}
							className="navbar-logo"
							alt="Navigation Bar Logo"
						></img>
						<div className="navbar-list">
							<Menu />
							<div className="navbar-auth">
								<button className="sign-in">Tham gia</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
