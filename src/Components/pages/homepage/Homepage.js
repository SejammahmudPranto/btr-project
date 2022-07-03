import React from 'react';
import "./homePage.css"
import banner from "../../../assets/banner.webp";
import bigetronlogo from "../../../assets/bigetron-word.svg";
import background from "../../../assets/news-header-bg.png";

const Homepage = () => {
  return (
    <>
    <div className='banner'>
        <img src={banner} alt="banner"/>
    </div>
    <div className='divisions'>
      <img src={bigetronlogo} alt="bigetron logo"/>
      <h3>Programmed To Win</h3>
      <h4 style={{ backgroundImage: `url(${background})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%",                 
      }}>DIVISIONS</h4>
    </div>
    <div className='division-games'>
      Games
    </div>
    </>

  )
}

export default Homepage;