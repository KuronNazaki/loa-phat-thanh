import React from 'react';
import muteVolume from '../images/volume-mute.png';

function Player() {
	let scaledMuteVolume = muteVolume + ' 2x';

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
								<button className="volume-button">
									<img srcSet={scaledMuteVolume} alt="Mute button" />
								</button>
							</div>
							<div className="video-background"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Player;
