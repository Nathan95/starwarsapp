import React from 'react';
import '../css/Logo.css';
import img from '../images/star_wars_logo_PNG43.png';

const Logo = () => {
  return (
    <div className="Logo">
      <img src={img} alt=""/>
    </div>
  )
}

export default Logo;