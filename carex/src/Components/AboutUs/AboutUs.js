import React from 'react'
import './AboutUs.css'
import Ladder from "../Assets/about_img.svg";
import Phone from "../Assets/about_phone.svg"

function AboutUs() {
  return (
    <div className='About-Us'>
        <div className='Our-Story'>
            <div className='About-img'>
                <img src={Ladder} alt='About Us'/>
            </div>
            <div className='About-Content'>
                <h1>Our Story</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmo
                d tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo
                in reprehenderit in voluptate velit esse cillum dolore eu fugia
                laborum.
                </p>
            </div>
        </div>
        <div className='About-Data'>
            <div className='About-Mobile_Logo'>
                <img src={Phone} alt='Phone'/>
            </div>
            <div className='About-Info'>
                <div className='About-Info_Card'>
                    <h2 className='Card_Heading'>23</h2>
                    <h4>Lorem ipsum dolo</h4>
                </div>
                <div className='About-Info_Card'>
                    <h2 className='Card_Heading'>452</h2>
                    <h4>Lorem ipsum dolo</h4>
                </div>
                <div className='About-Info_Card'>
                    <h2 className='Card_Heading'>78</h2>
                    <h4>Lorem ipsum dolo</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs