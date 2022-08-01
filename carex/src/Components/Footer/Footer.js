import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer>
        <div className='Copyright_Tab'>
            <div className='Footer-Logo'>

            </div>
            <h4>
            @2022 CareX Pvt. Ltd.<br/>
            Terms of Service | Privacy Policy
            </h4>
        </div>
        <div className='Services_Tab'>
            <h3>Services</h3>
            <ul>
                <li>Plans</li>
                <li>Pricing</li>
                <li>Request Access</li>
                <li>Partnerships</li>
            </ul>
        </div>
        <div className='AboutUs_Tab'>
            <h3>About Us</h3>
            <ul>
                <li>About CareX</li>
                <li>Contact Us</li>
                <li>Features</li>
                <li>Careers</li>
            </ul>
        </div>
        <div className='Resources_Tab'>
            <h3>Resources</h3>
            <ul>
                <li>Help Centre</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className='GetInTouch_Tab'>
            <h3>Get In Touch</h3>
            <ul>
                <li>Questions?</li>
                <li>Feedback</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer