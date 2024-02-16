import './Navbar.css'
import React, { useEffect, useState } from 'react'
import logo from '../../images/JR-logo-light.png'

import useWindowDimensions from './UseWindowDimensions';

function Navbar() {
    const [dropdwonMenu, setDropdownMenu] = useState(false);
    const { width} = useWindowDimensions();

    useEffect( () => {
        if(width > 992) {
            setDropdownMenu(false)
        }
    }, [width])

    const toggleButtonClicked = () => {
        setDropdownMenu(!dropdwonMenu)
    }

    return (
        <div className="nav">
            <div className="Navbar">
                <div className="left">
                        <a href="#landing"><img className="logo" src={logo} alt="logo"></img></a>
                </div>
                <div className="right">
                    {width > 992 && (
                        <>
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
                        </>
                    )}
                    {width < 992 && (
                        <div className='toggle_btn' onClick={toggleButtonClicked}>
                            <svg width="40px" height="40px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z" fill="#ffffff"></path> </g></svg>
                        </div>
                    )}
                </div>
            </div>
            { dropdwonMenu && width < 992 && (
                <div className="dropdown">
                    <div className="menu">
                        <a className="navLink"  href="#about">About</a>
                        <a className="navLink" href="#projects">Projects</a>
                        <a className="navLink"  href="#contact">Contact</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar