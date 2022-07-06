import React from 'react';
import "./homePage.css"
import banner from "../../../assets/banner.webp";
import bigetronlogo from "../../../assets/bigetron-word.svg";
import background from "../../../assets/news-header-bg.png";
import pubg from "../../../assets/pubg.jpg";
import pubgbg from "../../../assets/pubgbg.jpg";
import Division from '../../Division/Division';
import mobilelg from "../../../assets/mobilelg.jpg";
import mobilelg2 from "../../../assets/mobilelg2.jpg";
import others from "../../../assets/others.jpg";
import others2 from "../../../assets/others2.jpg";

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
      {/* <div className='division' style={ hover ? { backgroundImage: `url(${pubgbg})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%",
                      
      } : {
      backgroundImage: `url(${pubg})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%", 
      filter: "saturate(0)",
      }}
      onMouseEnter={() => (setHover(true))} 
      onMouseLeave={() => (setHover(false))}>
        div 1
      </div> */}
      <Division bg1={pubgbg} bg2={pubg} title={"PUBG MOBILE"} details={"ACE | Red Aliens"} />
      <Division bg1={mobilelg2} bg2={mobilelg} title={"MOBILE LEGENDS"} details={"BETA | ERA | ALPHA"}/>
      <Division bg1={others2} bg2={others} title={"OTHERS"} details={"TALENT | STREAMERS | Ambassadors"}  size={".8rem"}/>
    </div>
    <div className='divisions'>
      <h4 style={{ backgroundImage: `url(${background})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%",
      marginTop: "4rem",
      }}>NEWS</h4>
    </div>
    </>

  )
}

export default Homepage;