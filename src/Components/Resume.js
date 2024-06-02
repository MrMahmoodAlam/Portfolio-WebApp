import React from 'react';
import cv_pdf from "../images/Resume.pdf"
import resume_cv from "../images/resume_cv.jpg"

export default function Resume() {
  return (
    <div id='resume-main-div' className='flex flex-col md:flex-row md:justify-around gap-30'>

      <div>
        <img src={resume_cv} alt='...' id='resume-image'/>
      </div>

      <div> 
        <a href={cv_pdf} download id='download_resume' className='inline-block md:mt-10'>Download Resume</a>
      </div>
      
      
    </div>
  )
}