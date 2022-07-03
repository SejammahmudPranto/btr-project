import React from 'react';
import "./homePage.css"
import banner from "../../../assets/banner.webp";

const Homepage = () => {
  return (
    <div className='banner'>
        <img src={banner} alt="banner"/>
    </div>
  )
}

export default Homepage;