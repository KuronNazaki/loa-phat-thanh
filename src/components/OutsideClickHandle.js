import React, { useRef, useEffect } from 'react';

function OutsideClickHandler(props) {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        props.onOutsideClick();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  return <div ref={wrapperRef}>{props.children}</div>;
}

export default OutsideClickHandler;
