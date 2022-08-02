import React from 'react'
import './OurServices.css'

import ServicesMobile from './ServicesMobile/ServicesMobile'

function OurServices() {
  return (
    <div className='Our-Services'>
        <div className='Our-Services_Content'>
            <h1>Our Services</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.<br/>
            Duis aute irure dolo in reprehenderit in voluptate velit esse cillum dolore eu fugia laborum.</p>
        </div>
        <div className='Our-Services_Mobile'>
            <ServicesMobile/>
            <ServicesMobile/>
            <ServicesMobile/>
        </div>
    </div>
  )
}

export default OurServices