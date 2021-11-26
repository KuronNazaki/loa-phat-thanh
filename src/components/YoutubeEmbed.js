import React, { useEffect, useRef, useState } from 'react';
import muteVolume from '../asset/images/volume-mute.png';
import './YoutubeEmbed.scss';

function YoutubeEmbed(props) {
  let scaledMuteVolume = muteVolume + ' 2x';
  let source = `https://www.youtube.com/embed/${props.embedId}?enablejsapi=1&autoplay=1&mute=1&controls=0&autohide=1&isablekb=1&iv_load_policy=3&modestbranding=1&rel=0`;
  const [isMuted, setIsMuted] = useState(true);
  const player = useRef(null);

  const onClickVolumeButton = () => {
    if (isMuted) {
      player.current.unMute();
    } else {
      player.current.mute();
    }
    setIsMuted(!isMuted);
  };

  useEffect(() => {
    const loadVideo = () => {
      const { embedId } = props;

      player.current = new window.YT.Player(`youtube-player-${embedId}`, {
        playerVars: {},
        events: {
          onReady: onPlayerReady,
        },
      });
    };

    const onPlayerReady = (event) => {
      event.target.playVideo();
    };

    if (window.YT) {
      loadVideo();
    } else {
      var tag = document.createElement('script');

      tag.src = 'https://www.youtube.com/iframe_api';
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      window.onYouTubeIframeAPIReady = loadVideo;
    }
  }, [props.embedID]);

  return (
    <>
      <div className="youtube-overlay">
        <iframe
          id={`youtube-player-${props.embedId}`}
          className="video-frame"
          width="100%"
          height="100%"
          src={source}
          frameBorder="0"
          allow="autoplay; fullscreen; encrypted-media"
          title="Youtube"
        ></iframe>
      </div>
      <button className="volume-button">
        <img
          srcSet={scaledMuteVolume}
          alt="Mute button"
          onClick={onClickVolumeButton}
        />
      </button>
    </>
  );
}

export default YoutubeEmbed;
