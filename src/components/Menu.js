import React, { useState } from 'react';
import Dropdown from './Dropdown';
import './Menu.scss';

function Menu() {
  // const [isDropdownOpened, setIsDropdownOpened] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const onClick = () => {
    // setIsDropdownOpened(!isDropdownOpened);
    setIsClicked(!isClicked);
  };

  const onBlur = () => {
    // setIsDropdownOpened(!isDropdownOpened);
    setIsClicked(false);
  };

  return (
    <ul className="menu">
      <li className="menu-item">
        <button
          className={`menu-button ${isClicked ? 'active' : ''}`}
          onClick={onClick}
          onBlur={onBlur}
        >
          Playlist
        </button>
        <Dropdown isVisible={isClicked} />
      </li>
      <li className="menu-item">
        <button className="menu-button">Tìm kiếm</button>
      </li>
    </ul>
  );
}

export default Menu;
