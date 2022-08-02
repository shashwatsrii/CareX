import React from 'react'
import Logo from '../Assets/title_logo.svg'
import Mobile from '../Assets/title_mobile.svg'
import './Landing.css'

function Landing() {
  return (
    <div className='Landing'>
        <div className='Landing-Images'>
            <div>
                <img src={Logo} alt="CareX"/>
            </div>
            <div>
                <img src={Mobile} alt="CareX" className='Landing-Mobile'/>
            </div>
        </div>
        <div className='Care-Text'>
            All About Car<br/>
            All About Care<br/>
        </div>
    </div>
  )
}

export default Landing