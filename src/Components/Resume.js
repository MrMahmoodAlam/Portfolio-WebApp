import React from 'react';
import profile from "../images/illustration//profile_image.jpg";

import cv_pdf from "../images/Mahmood_Resume.pdf";


export default function Resume() {
  return (
    <div id='resume-main-div'>
      
      <p id='resume-h' className='md:text-3xl text-xl text-white'>Resume</p>

      <div id='resume-inner-div1' className='flex flex-col md:flex-row items-center gap-1'>
        <div>
          <img src={profile} alt='...' id='my_profile_image' />
        </div>
        <div>
          <p id='ph' className='font-semibold mb-3'>As a dedicated Full Stack Developer, I design and implement dynamic web applications with expertise in both front-end and back-end technologies. My portfolio highlights my problem-solving skills, adaptability, and commitment to delivering high-quality, user-focused solutions in collaborative environments.</p>

          <a href={cv_pdf}  id='download_resume' download className='text-white  bg-black'>Download Resume</a>
        </div>
      </div>
          

    </div>
  )
}