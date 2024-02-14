import './Navbar.css'

import React from 'react'

import logo from '../images/JR.logo.png'

function Navbar() {

    return (
        <div className="Navbar">
            <div className="left">
                <img src={logo}></img>
            </div>
            <div className="right">
                <p>Home</p>
                <p>Bio</p>
                <p>Projects</p>
                <p>Contact</p>
            </div>
            
        </div>
    )
}

export default Navbar