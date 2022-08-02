import React from 'react'

import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import AboutUs from './Components/AboutUs/AboutUs';
import OurServices from './Components/OurServices/OurServices';
import FutEnd from './Components/FutureEndevours/FutEnd';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <AboutUs/>
      <OurServices/>
      <FutEnd/>
      <Footer/>
    </>
  )
}

export default App;
