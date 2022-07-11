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
import news1 from "../../../assets/news1.jpg";
import news2 from "../../../assets/news2.jpg";
import news3 from "../../../assets/news3.jpg";
import News from '../../news/News';
import btrLogo from "../../../assets/BigetronLogo.svg";


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
    <div className='news-division'>
      <News image={news1} date={'30 JUNE 2022'} details={'Falah Kembali! Kejutan Pertama Divisi MLBB Bigetron Esports'}/>

      <News image={news2} date={'05 July 2022'} details={'Inilah Formasi Baru Bigetron RA, Siap Raih Hasil Maksimal di Season Fall!'}/>

      <News image={news3} date={'11 June 2022'} details={'Bigetron Red Aliens Tunjuk Doni "LaFlame" Sebagai Pelatih Baru'}/>

    </div>
    <div className='all-news'>
      <h4>View All News</h4>
    </div>
    <div className='divisions'>
      <h4 style={{ backgroundImage: `url(${background})`,
      backgroundRepeat  : 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "100%",
      marginTop: "4rem",
      }}>RESULTS</h4>
    </div>
    <div className='Footer'>
        <div className='footer-logo'>
          <img src={btrLogo} alt='logo'/>
        </div>
        <div className='footer-links'>
            <h5>ABOUT</h5>
            <h5>News &amp; events</h5>
            <h5>faq</h5>
            <h5>privacy policy</h5>
        </div>
        <div className='footer-links'>
            <h5>matches</h5>
            <h5>Terms and conditions</h5>
            <h5>contact</h5>
        </div>
        <div className='copyright'>
          <h6>©2022 BIGETRON ESPORTS ALL RIGHTS RESERVED</h6>
        </div>
    </div>
    </>

  )
}

export default Homepage;