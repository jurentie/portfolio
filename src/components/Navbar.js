import './Navbar.css'

import React from 'react'

import logo from '../images/JR-logo-transparent.png'

function Navbar() {

    return (
        <div className="Navbar">
            <div className="left">
                <img src={logo} alt="logo"></img>
            </div>
            <div className="right">
                <p className="menuItem">About</p>
                <p className="menuItem">Experience</p>
                <p className="menuItem">Projects</p>
                <p className="menuItem">Contact</p>
            </div>
        </div>
    )
}

export default Navbar