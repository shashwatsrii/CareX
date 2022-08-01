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
                    lorem ipsum dolor sit amet, consectetur adipiscing elementsv1 et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1 et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1       et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1  et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1       et ipsum dolor siteset  etc ... lorem ipsum dolor sit amet, consectetur adipiscing elementsv1 et ipsum dolor siteset  etc ...
                </div>
            </div>
            <div className='containerrightFE'>
                <img className='ImageFutureEndeavours' src={FutureEndeavour} />
            </div>
        </div>
    </>
  )
}

export default FutEnd