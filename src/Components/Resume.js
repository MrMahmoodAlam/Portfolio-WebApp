import React from 'react';
import cv_image from "../images/Mahmood_Resume.jpg"
import cv_pdf from "../images/Mahmood_Resume.pdf";


export default function Resume() {
  return (
    <div id='resume-main-div' className='flex flex-col md:flex-row md:justify-around gap-10'>

      <div>
        <img src={cv_image} alt='...' id='resume-image'/>
      </div>

      <div> 
        <a href={cv_pdf} download id='download_resume' className='inline-block md:mt-10'>Download Resume</a>
      </div>
      
      
    </div>
  )
}