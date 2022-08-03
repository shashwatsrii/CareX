import React from 'react'

import Navbar from './Components/Navbar/Navbar';
import Landing from './Components/Landing/Landing';
import AboutUs from './Components/AboutUs/AboutUs';
import OurServices from './Components/OurServices/OurServices';
import FutEnd from './Components/FutureEndevours/FutEnd';
import Teams from './Components/Teams/Teams';
import Contact from './Components/Contacts/Contacts';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <AboutUs/>
      <OurServices/>
      <FutEnd/>
      <Teams/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App;
