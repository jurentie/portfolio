import './Navbar.css'
import React from 'react'
import logo from '../images/JR-logo-light.png'
import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <div className="Navbar">
            <div className="left">
                    <a href="#landing"><img className="logo" src={logo} alt="logo"></img></a>
            </div>
            <div className="right">
                <div className="menuItem">
                    <a className="navLink" href="#about">
                        About
                    </a>
                </div>
                <div className="menuItem">
                    <a className="navLink" href="#projects">
                        Projects
                    </a>
                </div>
                <div className="menuItem">
                    <a className="navLink"  href="#contact">
                        Contact
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Navbar