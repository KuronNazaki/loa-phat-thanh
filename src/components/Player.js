import React from 'react';
import muteVolume from '../asset/images/volume-mute.png';
import videoImage from '../asset/images/smithereen.png';
import videoBackground from '../asset/images/hero-background.jpg';
import './Player.scss';

function Player() {
  let scaledMuteVolume = muteVolume + ' 2x';
  let scaledSmithereen = videoImage + ' 2x';
  let scaledBackground = videoBackground + ' 2x';

  return (
    <div className="player">
      <div className="wrapper">
        <div className="container">
          <div className="player-container">
            <div className="player-header">
              <p>Đang phát</p>
              <h2>twenty one pilots - Smithereens (Official Audio)</h2>
            </div>
          </div>
          <div className="player-video">
            <div className="player-video-container">
              <div className="video-frame">
                <img srcSet={scaledSmithereen} alt="Video" />
                <button className="volume-button">
                  <img srcSet={scaledMuteVolume} alt="Mute button" />
                </button>
              </div>
              <div className="video-background">
                <img srcSet={scaledBackground} alt="Video Background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
