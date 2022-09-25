import React from 'react'
import Logo from "./img/brake.png"
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navigation'>
        <div className='nav_logo'>
            <img src={Logo} alt="company logo" />
            <span>Claudia Auto Shop</span>
        </div>
        <div className='nav_links'>
            <ul>
                <li>
                    <a href="#Home">Home</a>
                </li>
                <li>
                    <a href="#About">About</a>
                </li>
                <li>
                    <a href="#Detailing">Detailing</a>
                </li>
                <li>
                    <a href="#Contact">Contact</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar