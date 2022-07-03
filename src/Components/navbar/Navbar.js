import React, { useState } from 'react'
import "./navBar.css";
import btrLogo from "../../assets/BigetronLogo.svg";
import shopicon from "../../assets/shopIcon.svg";
import { FaBars, FaTimes } from "react-icons/fa" ;

const Navbar = ({children}) => {
    const [toggleMenu, setToggleMenu] = useState(false);
    // eslint-disable-next-line no-unused-vars
    const handleMenuBar = () => {
        if (toggleMenu) {
          setToggleMenu(false);
        } else {
          setToggleMenu(true);
        }
      }


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
        <div className='nav-right'>
            
            <div className='shops'>
                <img src={shopicon} alt='shop icon'/>
                <li>Shop</li>
            </div>
            <div className='menu-mbl'>
            {toggleMenu ? <FaTimes onClick={()=> (setToggleMenu(false))}/> : <FaBars onClick={()=> (setToggleMenu(true))}/>}
            </div>
        </div>
        
        
    </div>
    { toggleMenu ? 
        <div>
            <ul className="nav_list-mobile">
                <li>Teams</li>
                <li>About</li>
                <li>Matches</li>
                <li>News &amp; Events</li>
                <li>Sponsors</li>
                <li>Contact</li>
            </ul>
        </div> :
        <div className='main'>
            {children}
        </div>

    }
    </>
  )
}

export default Navbar