import React from 'react'
import "./navBar.css";
import btrLogo from "../../assets/BigetronLogo.svg";
import shopicon from "../../assets/shopIcon.svg";

const Navbar = ({children}) => {
  return (
    <>
    <div className='navbar'>
        <div className='logo'>
            <img src={btrLogo} alt="btr logo"/>
        </div>
        <div className='menubar'>
            <nav>
                <li>Teams</li>
                <li>About</li>
                <li>Matches</li>
                <li>News &amp; Events</li>
                <li>Sponsors</li>
                <li>Contact</li>
            </nav>
        </div>
        <div className='shops'>
            <img src={shopicon} alt='shop icon'/>
            <li>Shop</li>
        </div>
        
    </div>
    <div className='main'>
        {children}
    </div>
    </>
  )
}

export default Navbar