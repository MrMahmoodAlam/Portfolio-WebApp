import React from 'react';
import { useRef, useState, useEffect } from 'react';


import frontend from "../icons/skills/frontend.png";
import backend from "../icons/skills/backend.png"
import database from "../icons/skills/database.png"

import designer from "../icons/skills/designer.png"
import web from "../icons/skills/web.png"


import html from "../icons/skills/html.png"
import css from "../icons/skills/css.png"
import js from "../icons/skills/js.png"
import bootstrap from "../icons/skills/bootstrap.png"
import react from "../icons/skills/react.png"
import python from "../icons/skills/python.png"
import sql from "../icons/skills/sql.png"
import xd from "../icons/skills/xd.png"
import photoshop from "../icons/skills/photoshop.png"
import tailwind from "../icons/skills/tailwind.jpg"
import git from "../icons/skills/git.png"
import redux from "../icons/skills/redux.png"
import gsap_icon from "../icons/skills/gsap.png"


import creative from "../icons/skills/soft/creative.png"
import solving from "../icons/skills/soft/solving.png"
import communication from "../icons/skills/soft/communication.png"
import abilities from "../icons/skills/soft/abilities.png"

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  
  const coding_skill = useRef(null);
  const soft_skill = useRef(null);
  const [code_show, SetCodeShow] = useState({display : "inline-block"})
  const [soft_show, SetSoftShow] = useState({display : "none"})

  // Button click color change
  const [code_clr, SetCodeClr] = useState({backgroundColor : "black", color : "white"})
  const [soft_clr, SetSoftClr] = useState({backgroundColor : "#d1d1d1", color : "black"});



  useEffect(()=>{
    coding_skill.current.addEventListener("click", ()=>{
      SetSoftShow({display : "none"})
      SetCodeShow({display : "inline-block"})
      SetCodeClr({backgroundColor : "black", color : "white"})
      SetSoftClr({backgroundColor : "#d1d1d1", color : "black"})
    })
    soft_skill.current.addEventListener("click", ()=>{
      SetCodeShow({display : "none"})
      SetSoftShow({display : "inline-block"})
      SetCodeClr({backgroundColor : "#d1d1d1", color : "black"})
      SetSoftClr({backgroundColor : "black", color : "white"})
    })


      // GSAP
      
        gsap.fromTo("#skill-animation1", {x : "10vw", duration : 5, repeat : 50, yoyo : true}, {x : "-10vw", duration : 5, repeat : 50, yoyo : true})
        gsap.fromTo("#skill-animation2", {x : "-10vw", duration : 5, repeat : 50, yoyo : true}, {x : "10vw", duration : 5, repeat : 50, yoyo : true})
        gsap.fromTo("#skill-animation3", {x : "-10vw", duration : 3, repeat : 50, yoyo : true, delay : 2}, {x : "5vw", duration : 3, repeat : 50, yoyo : true, delay : 2})
      
     
   
  },[])


  return (
    <div className="flex flex-col gap-3 justify-center items-center pb-10 relative">




      {/* Skills button Div */}
      <div className='flex flex-row justify-center gap-5' id='skills-btn-div'>

        <div className='px-5 py-2 cursor-pointer' style={code_clr}>
          <input type="button" name="Coding Skills" value="Coding Skills" className='cursor-pointer' ref={coding_skill}/>
        </div>

        <div className='px-5 py-2 cursor-pointer' style={soft_clr}>
          <input type="button" name="Soft Skills" value="Soft Skills" className='cursor-pointer' ref={soft_skill}/>
        </div>

      </div>
      {/* skill button End */}








      {/* CODING SKILLS  DIV */}
      <div id='coding-skills-div' style={code_show}>

        <div className="flex flex-col md:flex-row gap-4 mt-5" id='coding-inner-div1'>
          <div>
            <img src={frontend} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>Frontend Developement</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>

          <div>
            <img src={backend} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>Backend Developement</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>

          <div>
            <img src={database} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>Database Developement</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>

        </div>

        <div className='flex flex-col md:flex-row justify-center gap-4 mt-5' id='coding-inner-div2'>
          <div>
            <img src={web} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>Web Developement</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>

          <div>
            <img src={designer} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>UI/UX Designer</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>
        </div>

      </div>
      {/* Coding skill  end */}






      {/* SOFT SKILLS */}
      <div id='soft-skill-div' className='flex flex-col md:flex-row items-center mb-10 justify-center' style={soft_show}>

        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <div id='soft-skill1'>
            <img src={creative} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>UI/UX Designer</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>

          <div id='soft-skill2'>
            <img src={solving} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>UI/UX Designer</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>

        </div>

        <div className='flex flex-col md:flex-row justify-center gap-4 mt-4'>
          <div id='soft-skill3'>
            <img src={communication} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>UI/UX Designer</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>

          <div id='soft-skill4'>
            <img src={abilities} alt='...' />
            <h3 className='text-2xl font-semibold mt-8'>UI/UX Designer</h3>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima, quasi libero!.</p>
          </div>
        </div>

      </div>
      {/* Sofft skill end */}








      {/* SKILLS SCROLL ANIMATION */}
      <div id='scroll-skill-div'>

        {/* First Skill Row */}
        <div className='flex flex-row justify-center gap-1 my-1' id='skill-animation1'>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={html} alt='...' id='icon-img'/></div>
            <div><h4>HTML</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={css} alt='...' id='icon-img' /></div>
            <div><h4>CSS3</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={js} alt='...' id='icon-img' /></div>
            <div><h4>JavaScript</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={bootstrap} alt='...' id='icon-img' /></div>
            <div><h4>Bootstrap</h4></div>
          </div>
        </div>

        


        {/* Second Skill Row */}
        <div className='flex flex-row justify-center gap-1 my-1' id='skill-animation2'>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={react} alt='...' id='icon-img' /></div>
            <div><h4>React</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={python} alt='...' id='icon-img' /></div>
            <div><h4>Python</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={sql} alt='...' id='icon-img' /></div>
            <div><h4>SQL</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={xd} alt='...' id='icon-img' /></div>
            <div><h4>XD</h4></div>
          </div> 
        </div>
              
       

        {/* Last Skill Row */}
        <div className='flex flex-row justify-center gap-1' id='skill-animation3'>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={photoshop} alt='...' id='icon-img' /></div>
            <div><h4>Photoshop</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={tailwind} alt='...' id='icon-img' /></div>
            <div><h4>Tailwind</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={git} alt='...' id='icon-img' /></div>
            <div><h4>Git</h4></div>
          </div>
          <div className='flex flex-row justify-center items-center'>
            <div><img src={redux} alt='...' id='icon-img' /></div>
            <div><h4>Redux</h4></div>
          </div> 
          <div className='flex flex-row justify-center items-center'>
            <div><img src={gsap_icon} alt='...' id='icon-img' /></div>
            <div><h4>GSAP</h4></div>
          </div>
        </div>
        

       
      </div>
      
      {/* SKILLS SCROLL END */}

    
    </div>
  )
}
