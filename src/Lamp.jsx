import React, { useEffect, useRef } from 'react';
import lampImage from './assets/lamp.svg';
import './lamp.scss';

const Lamp = ({ isLampOn }) => {
  const lightConeRef = useRef(null);

  useEffect(() => {
    if (lightConeRef.current) {
      if (isLampOn) {
        lightConeRef.current.classList.add('is-visible');
      } else {
        lightConeRef.current.classList.remove('is-visible');
      }
    }
  }, [isLampOn]);

  return (
    <div className="lamp-container">
      <img
        src={lampImage}
        alt=""
        aria-hidden="true"
        className={`lamp ${isLampOn ? 'lamp-on' : ''}`}
      />
      <div ref={lightConeRef} className="light-cone" aria-hidden="true"></div>
    </div>
  );
};

export default Lamp;
