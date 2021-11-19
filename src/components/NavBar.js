import React from 'react';
import logo from '../images/navbar-logo.png';
import Menu from './Menu.js';

function NavBar() {
	let scaledLogo = logo + ' 2x';

	return (
		<>
			<div className="navbar">
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
		</>
	);
}

export default NavBar;
