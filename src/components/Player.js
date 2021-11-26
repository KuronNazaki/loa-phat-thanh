import React from 'react';

import videoImage from '../asset/images/smithereen.png';
import videoBackground from '../asset/images/hero-background.jpg';
import './Player.scss';
import YoutubeEmbed from './YoutubeEmbed';

function Player() {
  let scaledSmithereen = videoImage + ' 2x';
  let scaledBackground = videoBackground + ' 2x';
  let youtubeId = 'T_lC2O1oIew';

  return (
    <div className="player" id="player">
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
                {/* <img srcSet={scaledSmithereen} alt="Video" /> */}
                <YoutubeEmbed embedId={youtubeId} />
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
