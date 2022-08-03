import React from 'react'
import './Contacts.css'

function Contact() {
    return (
        <>
            <div className='ContactContainer'>
                <div className='HeadingContactContainer'>
                    <div className='HeadingContactUs'><h1>Contact Us</h1></div>
                    <div className='UnderTextContactUs'><p>Lorem ipsum sdonjnsd babdjass djksdbasjdb bhabdsj</p></div>
                </div>
                <div className='BoxContactContainer'>
                    <div className='BoxContactLeftContainer'>
                        <div className='VisitUsText'>Visit Us</div>
                        <div className='VisitUsUnderText'>lorem ipsum color downmyug sbdyusb</div>
                        <div className='WhiteBoxVisitUs'> </div>
                    </div>
                    <div className='BoxContactRightContainer'>
                        <div className='MessageUsText'>Message Us</div>
                        <div className='NameInput inputDiv'>
                            <div className='NameHeading HeadingCU'>Name</div>
                            <input type='text' className='NameContactUs inputCU'></input>
                        </div>
                        <div className='EmailInput inputDiv'>
                            <div className='EmailHeading HeadingCU'>Email</div>
                            <input type='text' className='EmailContactUs inputCU'></input>
                        </div>
                        <div className='MessageInput inputDiv'>
                            <div className='MessageHeading HeadingCU'>Message</div>
                            <textarea className='MessageTextarea'></textarea>
                        </div>
                            <button className='SubmitButton'>Submit</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Contact