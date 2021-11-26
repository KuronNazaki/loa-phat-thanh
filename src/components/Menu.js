import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './Menu.scss';
import OutsideClickHandler from './OutsideClickHandle';
import Search from './Search';

function Menu() {
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);

  const onMenuClick = () => {
    setIsMenuClicked(!isMenuClicked);
  };

  const onMenuOutsideClick = (event) => {
    setIsMenuClicked(false);
  };

  const onSearchClick = () => {
    setIsSearchClicked(!isSearchClicked);
  };

  const onSearchOutsideClick = () => {
    setIsSearchClicked(false);
  };

  return (
    <ul className="menu">
      <OutsideClickHandler onOutsideClick={onMenuOutsideClick}>
        <li className="menu-item">
          <button
            className={`menu-button ${isMenuClicked ? 'active' : ''}`}
            onClick={onMenuClick}
          >
            Playlist
          </button>
          <Dropdown isVisible={isMenuClicked} />
        </li>
      </OutsideClickHandler>
      <OutsideClickHandler onOutsideClick={onSearchOutsideClick}>
        <li className="menu-item">
          <button
            className={`menu-button ${isSearchClicked ? 'active' : ''}`}
            onClick={onSearchClick}
          >
            Tìm kiếm
          </button>
          <Search isVisible={isSearchClicked} />
        </li>
      </OutsideClickHandler>
    </ul>
  );
}

export default Menu;
