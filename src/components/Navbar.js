import './Navbar.css'
import React from 'react'
import logo from '../images/JR-logo-light.png'
import {Link} from 'react-router-dom'

function Navbar() {

    return (
        <div className="Navbar">
            <div className="left">
                <Link className="logo" to="/">
                    <img src={logo} alt="logo"></img>
                </Link>
            </div>
            <div className="right">
                <div className="menuItem">
                    <Link className="navLink" to="/about">
                        About
                    </Link>
                </div>
                <div className="menuItem">
                    <Link className="navLink" to="/">
                        Projects
                    </Link>
                </div>
                <div className="menuItem">
                    <Link className="navLink" to="/">
                        Contact
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Navbar