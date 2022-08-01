import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <>
    <nav>
        Hello
        <div className='Nav-Logo'>

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
            <div className='Nav-Link'>
                Get App
            </div>
        </div>
    </nav>
    <div className='Empty'>
        
    </div>
    </>
  )
}

export default Navbar