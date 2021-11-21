import React from 'react';
import scrollDownIcon from '../asset/images/scroll-down-button.png';
import './Hero.scss';

function Hero() {
  let scaledScrollDownIcon = scrollDownIcon + ' 2x';

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="container">
          <div className="hero-content">
            <div className="hero-heading">
              <h1 className="heading">CHÀO MỪNG ĐẾN VỚI "LOA PHÁT THANH"</h1>
              <p className="description">
                Tại đây bạn có thể yêu cầu một bài hát và trang web sẽ phát cho
                mọi người cùng nghe.
              </p>
            </div>
          </div>
          <div className="hero-footer">
            <button className="hero-footer-button">
              <p>Kéo xuống để bắt đầu</p>
              <img srcSet={scaledScrollDownIcon} alt="Scrolldown Icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
