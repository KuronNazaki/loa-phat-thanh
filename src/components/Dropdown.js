import React, { useEffect } from 'react';
import './Dropdown.scss';

const playlist = [
  {
    thumbnail:
      'https://i.ytimg.com/vi/_tOAturTz-o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAYUO551V7098dKvos8IdI1jHWfBw',
    title: 'Harris Cole - Gone Fishing',
    duration: '3:13',
    author: 'Alt Vision',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/A4P1QnD8RRw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAOjHyDdlb4H1D0b27bWHt7gb-h_w',
    title: 'a l e x Proud Of You feat Alicks',
    duration: '3:04',
    author: 'CXopy Cat',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/DQcrFQDUb_s/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAN3Y34r0qWItAtY42pZdG0yYYGow',
    title: '竹内まりや - Plastic Love (Official Music Video)',
    duration: '5:09',
    author: 'Warner Bros Musix',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/DQcrFQDUb_s/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAN3Y34r0qWItAtY42pZdG0yYYGow',
    title:
      "Old songs but it's lofi 📻 vintage, jazzhop | lofi study chill mix | 1980s Music",
    duration: '1:09:49',
    author: 'Cafe Music BGM channel',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/MK8NphFMu7U/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDv-B4-01FtKG70PTxBYuG-xw-hzQ',
    title:
      '#STUDIO GHIBLI JAZZ# Relaxing Jazz & Bossa Nova Music Cover - Cafe Music For Study & Work',
    duration: '3:37:42',
    author: 'Cafe Music BGM channel',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/_tOAturTz-o/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAYUO551V7098dKvos8IdI1jHWfBw',
    title: 'Harris Cole - Gone Fishing',
    duration: '3:13',
    author: 'Alt Vision',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/A4P1QnD8RRw/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAOjHyDdlb4H1D0b27bWHt7gb-h_w',
    title: 'a l e x Proud Of You feat Alicks',
    duration: '3:04',
    author: 'CXopy Cat',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/DQcrFQDUb_s/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAN3Y34r0qWItAtY42pZdG0yYYGow',
    title: '竹内まりや - Plastic Love (Official Music Video)',
    duration: '5:09',
    author: 'Warner Bros Musix',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/DQcrFQDUb_s/hqdefault.jpg?sqp=-oaymwEjCOADEI4CSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLAN3Y34r0qWItAtY42pZdG0yYYGow',
    title:
      "Old songs but it's lofi 📻 vintage, jazzhop | lofi study chill mix | 1980s Music",
    duration: '1:09:49',
    author: 'Cafe Music BGM channel',
  },
  {
    thumbnail:
      'https://i.ytimg.com/vi/MK8NphFMu7U/hq720.jpg?sqp=-oaymwEjCOgCEMoBSFryq4qpAxUIARUAAAAAGAElAADIQj0AgKJDeAE=&rs=AOn4CLDv-B4-01FtKG70PTxBYuG-xw-hzQ',
    title:
      '#STUDIO GHIBLI JAZZ# Relaxing Jazz & Bossa Nova Music Cover - Cafe Music For Study & Work',
    duration: '3:37:42',
    author: 'Cafe Music BGM channel',
  },
];

function Dropdown(props) {
  const isVisibleStyle = {
    opacity: '1',
    visibility: 'visible',
  };

  useEffect(() => {
    console.log('In Dropdown', props.isVisible);
  }, [props.isVisible]);

  return (
    <div className="dropdown" style={props.isVisible ? isVisibleStyle : {}}>
      <div className="dropdown-items">
        {playlist.map((element, index) => (
          <div className="dropdown-item" key={index}>
            <div className="dropdown-item__thumbnail">
              <img src={element.thumbnail} alt="Youtube Thumbnail" />
              <p className="dropdown-item-desc__duration">{element.duration}</p>
            </div>
            <div className="dropdown-item-desc">
              <h3 className="dropdown-item-desc__title">{element.title}</h3>
              <p className="dropdown-item-desc__author">{element.author}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dropdown;
