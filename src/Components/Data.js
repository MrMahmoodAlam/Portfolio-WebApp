import React, {useEffect} from 'react';
import process from "../images/illustration/process.png";

import project from "../icons/data/project.png";
import certificate from "../icons/data/certificate.png";
import pages from "../icons/data/webpages.png";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Data() {

    // GSAP
    useEffect(()=>{

      gsap.fromTo('#data-image-div', {x : "-30vw", duration : 1}, {x : "0px", duration : 1, scrollTrigger : {
        trigger : "#data-image-div",
      }})
    
      gsap.fromTo('#data-right-div', {x : "30vw", duration : 1}, {x : "0px", duration : 1, scrollTrigger : {
        trigger : "#data-right-div",
      }})

        
    })


  return (
    <>
        <div className='flex flex-col md:flex-row justify-center items-center py-10 overflow-x-hidden' id='data-main-div'>
            <div id='data-image-div'>
                <img src={process} alt="..." />
            </div>

            <div className='flex flex-col justify-center items-center gap-5' id='data-right-div'>

                <div className='flex flex-row justify-center  gap-3 md:gap-5' id='data-flex1'>
                    <div id='data-div1'>
                        <img src={project} alt='...' />
                        <h1 className='text-5xl font-semibold mt-5'>3+</h1>
                        <p>Completed project</p>
                    </div>
                    <div id='certificate-div' className='bg-white text-black'>
                        <img src={certificate} alt='...' />
                        <h3 className='text-5xl font-semibold mt-5'>3+</h3>
                        <p>Having Certificate</p>
                    </div>
                </div>

                <div id='data-flex2' className='bg-white text-black flex flex-col items-center'>
                    <div>
                        <img src={pages} alt='...' />
                    </div>
                  
                  <div>
                    <h3 className='text-5xl font-semibold mt-5'>10+</h3>
                    <p>Web Pages</p>
                  </div>
                    
                </div>

            </div>
        </div>
    </>
  )
}
