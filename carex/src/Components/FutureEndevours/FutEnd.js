import React from 'react'
import "./FutEnd.css"
import FutureEndeavour from "../Assets/FutureEndevours.png"

function FutEnd() {
  return (
    <>
        <div className='containerFE'>
            <div className='containerleftFE'>
                <div className='HeadingFutEnd'>
                    <h1>Future Endeavours</h1>
                </div>
                <div className='textFutEnd'>
                    <p>
                    lorem ipsum dolor sit amet, consectetur adipiscing elementsv1 et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1 et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1       et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1  et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1       et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1 et ipsum dolor siteset  etc ...</p>
                </div>
            </div>
            <div className='containerrightFE'>
                <img className='ImageFutureEndeavours' src={FutureEndeavour}  alt='Future Endeavours'/>
            </div>
        </div>
    </>
  )
}

export default FutEnd