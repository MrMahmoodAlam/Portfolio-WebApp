import React, {useEffect} from 'react';
import { useNavigate} from 'react-router-dom';

import cv from "../icons/cv.png";
import contract from "../icons/contract.png";

import about_illustartion from '../images/illustration/bg-about.jpg';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function About() {

  const navigator = useNavigate();
  const redirect_resume = ()=>{
    navigator("/resume")
  };
  const redirect_contact = ()=>{
    navigator("/contact")
  }

  useEffect(()=>{

    gsap.fromTo('#about-text-div', {x : "30vw", duration : 2}, {x : "0px", duration : 2, scrollTrigger : {
      trigger : "#about-text-div",
    }})
  
    gsap.fromTo('#about-image', {x : "-30vw", duration : 2}, {x : "0px", duration : 2, scrollTrigger : {
      trigger : "#about-image",
    }})

  })

  return (
    <>
        <div className="md:flex md:flex-row justify-center items-center my-20 overflow-x-hidden" id='about-main'>
            <div >
              <img src={about_illustartion} alt='...' id='about-image'/>
            </div>
            <div id='about-text-div'>
              <p className='md:text-xl'> I am a dedicated full stack developer with a passion for creating dynamic and user-friendly web applications. With expertise in both front-end and back-end development, I am committed to delivering high-quality solutions that meet client needs and exceed expectations</p>

              <div className='flex flex-row justify-center gap-2 text-2xl mt-5' id="about-btn-div">
                <div className='bg-black text-white py-2 cursor-pointer' onClick={redirect_resume}>
                  <img src={cv} alt='...'  className='w-8 inline-block mx-2' id='cv-icon'/>
                  <input type='button' name='Resume' value="Resume" id='about-btn1'  className='cursor-pointer'/>
                </div>

                <div className='bg-gray-200 py-2' onClick={redirect_contact}>
                  <img src={contract} alt='...'  className='w-6 inline-block mx-2' id='contract-icon'/>
                  <input type='button' name='Contract' value="Contact" id='about-btn2' className='cursor-pointer'/>
                </div>
              </div>
              
              
            </div>
        </div>
    </>
  )
}
