import React from 'react'
import './Navbar.css'

import Logo from '../Assets/nav_logo.svg'

function Navbar() {
  return (
    <>
    <nav>
        <div className='Nav-Logo'>
            <img src={Logo} alt='logo'  className='Logo'/>
        </div>
        <div className='Nav-Links'>
            <div className='Nav-Link'>
                About Us
            </div>
            <div className='Nav-Link'>
                Services
            </div>
            <div className='Nav-Link'>
                Future
            </div>
            <div className='Nav-Link'>
                Team
            </div>
            <div className='Nav-Link'>
                Help
            </div>
            <div className='Nav-Link_App'>
                A/I Get App
            </div>
        </div>
    </nav>
    <div className='Empty'>
        
    </div>
    </>
  )
}

export default Navbar