import React from 'react';
import logo from '../images/navbar-logo.png';
import backButton from '../images/back-button.png';

function Footer() {
	let scaledLogo = logo + ' 2x';
	let scaledBackButton = backButton + ' 2x';

	return (
		<div className="footer">
			<div className="wrapper">
				<div className="container">
					<div className="footer-container">
						<div className="footer-content">
							<div className="footer-logo">
								<img srcSet={scaledLogo} alt="Footer Logo" />
							</div>
							<div className="footer-menu">
								<ul className="menu">
									<h3 className="menu-heading">Liên hệ</h3>
									<il className="menu-item">
										<a className="menu-link" href="#">
											Facebook
										</a>
									</il>
									<il className="menu-item">
										<a className="menu-link" href="#">
											Instagram
										</a>
									</il>
									<il className="menu-item">
										<a className="menu-link" href="#">
											GitHub
										</a>
									</il>
								</ul>
								<ul className="menu">
									<h3 className="menu-heading">Về chúng tôi</h3>
									<il className="menu-item">
										<a className="menu-link" href="#">
											Facebook
										</a>
									</il>
									<il className="menu-item">
										<a className="menu-link" href="#">
											Instagram
										</a>
									</il>
									<il className="menu-item">
										<a className="menu-link" href="#">
											GitHub
										</a>
									</il>
								</ul>
							</div>
						</div>
						<div className="footer-credit">
							<p>Designed by @kr.nzk. Powdered by @nvtho</p>
						</div>
						<button className="footer-back-button">
							<img srcSet={scaledBackButton} alt="Back Button" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
