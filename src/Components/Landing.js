import React, {useEffect, useState}from 'react';

import home from "../icons/home.png"
import user from "../icons/user.png"
import innovation from "../icons/innovation.png"
import suitcase from "../icons/suitcase.png"
import email from "../icons/email.png"


import About from "./About";
import Skills from './Skills';
import Data from './Data';
import  Project from "./Project";
import Article from './Article';
import Contact from "./Contact";
import Footer from './Footer';

import background1 from "../images/illustration/bg1.jpg";

import { gsap } from "gsap";

export default function Landing() {


  let [inline, SetNone] = useState({display : "inline-block"});
  function close_alert (){
    SetNone({display : "none"})
  }
  useEffect(()=>{

    // Navbar
    gsap.fromTo("#landing-div1>div>div>img", {translateY : "-60px",  duration : 0.5,  stagger : 1}, {translateY : "0px", stagger : 1 })

    // Landing
    gsap.fromTo("#landing-div2", {scale : 3, opacity : 0, duration : 1}, {scale : 1, opacity : 1, duration : 1})

    gsap.fromTo("#landing-div3>p, #landing-div3>h3", {y : "30vh", scale : 2, duration : 1, stagger : 1}, {y : "0px", scale : 1, duration : 1, stagger : 1})

   
  })



  // Redirect
  const handlehome = ()=>{window.location.hash = "landing-m"};
  const handleuser = ()=>{window.location.hash = "about-main"};
  const handleskill = ()=>{ window.location.hash = "scroll-skill-div"};
  const handleproject = ()=>{window.location.hash = "main-div-project"};
  const handlecontact = ()=>{ window.location.hash = "contact-main-div"};
 




  return (
    <>
      <div className='flex flex-col justify-center items-center' id='landing-m'>

        {/* NAVBAR STARTED */}
        <div id='landing-div1' className='bg-white fixed top-0 py-2'>
          <div className="flex flex-row justify-center gap-10 mt-5">
            <div onClick={handlehome}><img src={home} alt='....' id='home-icon'/></div>
            <div onClick={handleuser}><img src={user} alt='....' /></div>
            <div onClick={handleskill}><img src={innovation} alt='....' /></div>
            <div onClick={handleproject}><img src={suitcase} alt='....' /></div>
            <div onClick={handlecontact}><img src={email} alt='....' /></div>
          </div>

        </div>
        {/* NAVBAR END */}



        <idv className="flex flex-col items-center text-center overflow-hidden" id="landing-down-div">
          <div id='landing-div2'>
            <img src={background1} alt='...'/>
          </div>
            
            <div id='landing-div3'>
              <p className='text-xl'>Hello I'm</p>
              <h3 className='text-6xl font-bold'>Mahmood</h3>
              <h3 className='text-6xl font-bold'>Alam</h3>

              <p className='text-xl'>Welcome to my portfolio! I'm a full stack developer passionate about crafting efficient, user-friendly web applications. Explore my projects and skills here.</p>
            </div>
          </idv>




          {/* Mobile Alert Msg */}
          <div className='bg-yellow-500 text-white fixed bottom-0 left-0 px-5 py-2 z-10 overflow-hidden' style={inline}>
            <p className='inline-block'>Please view on Desktop mode for best experience</p>
            <img src='https://img.icons8.com/?size=100&id=rmf1Fvj5nBib&format=png&color=000000' alt='...'  className='w-5 inline-block mx-2 cursor-pointer' onClick={close_alert}/>
          </div>
          
      </div>





      <About /> 
      <Skills />
      <Data />
      <Project />
      <Article />
      <Contact />
      <Footer />
    
    </>
  )
}
