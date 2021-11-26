import React from 'react';
import './Search.scss';

const searchList = [
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

function Search(props) {
  return (
    <div
      className="search-container"
      style={props.isVisible ? { opacity: 1, visibility: 'visible' } : {}}
    >
      <form action="" className="search-box">
        <input
          type="text"
          name="searchString"
          className="search-box__text"
          id="searchInputText"
          placeholder="Nhập vào đây"
        />
        <input
          id="searchInputSubmit"
          className="search-box__submit"
          type="submit"
          value="Tìm kiếm"
        />
      </form>
      <div className="search-list">
        {searchList.map((element, index) => {
          return (
            <button className="search-item" key={index}>
              <div className="search-item-thumbnail">
                <img src={element.thumbnail} alt={`Thumbnail ${index}`} />
                <p className="search-item-thumbnail__duration">
                  {element.duration}
                </p>
              </div>
              <div className="search-item-desc">
                <h3 className="search-item-desc__title">{element.title}</h3>
                <p className="search-item-desc__author">{element.author}</p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
