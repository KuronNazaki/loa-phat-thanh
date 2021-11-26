import React from 'react';
import logo from '../asset/images/navbar-logo.png';
import backButton from '../asset/images/back-button.png';
import './Footer.scss';

function Footer() {
  let scaledLogo = logo + ' 2x';
  let scaledBackButton = backButton + ' 2x';
  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

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
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      Facebook
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      Instagram
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      GitHub
                    </a>
                  </li>
                </ul>
                <ul className="menu">
                  <h3 className="menu-heading">Về chúng tôi</h3>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      Facebook
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      Instagram
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link" href="#">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-credit">
              <p>Designed by @kr.nzk. Powered by @nvtho</p>
            </div>
            <button className="footer-back-button" onClick={scrollToTop}>
              <img srcSet={scaledBackButton} alt="Back Button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
