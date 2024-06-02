import React, {useEffect} from 'react';
import github from "../icons/footer/github.png";
import linkedin from "../icons/footer/linkedin.png"

import wave from "../images/wave.svg"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {

  const mailID = process.env.REACT_APP_MAIL_ID;

  useEffect(()=>{
    if(window.innerWidth  > 768){
      gsap.fromTo('#footer-main-div>div, #footer-icon-div>div', {y : "-30vh", duration : 0.5, stagger : 1, opacity : 0}, {y : "0px", duration : 0.5, stagger : 1, opacity : 1, scrollTrigger : {
        trigger : "#fm-div",
      }})
    }
   

  })


  return (
    <>

      <img src={wave} alt='...' id='footer-wave-image'/>
      <div id='fm-div' className='bg-black'>
        <div id="footer-main-div" className='flex flex-col justify-center text-center  items-center'>
          <div><h6 className='font-semibold text-xl cursor-pointer' onClick={()=>{window.location = `mailto:${mailID}`}}>Send a Mail</h6></div>
          <div><h6 className='font-semibold text-xl cursor-pointer' onClick={()=>{window.location = `mailto:${mailID}`}}>Set a Metting</h6></div>
        </div>

        <div className='flex flex-row justify-center gap-5 pt-20 pb-5' id='footer-icon-div'>

          <div id='github-icon-div' className='cursor-pointer'>
            <img src={github} alt='..' onClick={()=>{window.open("https://www.github.com/MrMahmoodAlam")}}/>
          </div>

          <div className='cursor-pointer'>
            <img src={linkedin} alt='...' onClick={()=>{window.open("https://www.linkedin.com/in/mahmoodalam000")}}/>
          </div>
          
        </div>
      </div>
      
    </>
  )
}
