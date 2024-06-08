import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Article() {

    useEffect(()=>{
        if(window.innerWidth > 768){
            gsap.fromTo('#article-main-div>div', {y : "-30vw", duration : 1,  opacity : 0, stagger : 1}, 
            { y : "0px", duration : 1, opacity :1, stagger : 1, scrollTrigger : {
                trigger : "#article-main-div>div"}  
            })
        }
        
    })
  return (
    <>
        <div className='flex flex-col md:flex-row justify-center gap-1 my-10 md:my-32' id='article-main-div'>
            <div>
                <div>
                    <p>Latest</p>
                    <h3 className='text-2xl font-bold'>Beginner?  HTML5.</h3>
                    <p>Part 1</p>
                </div>
                
                <p className='font-semibold mt-5'>List of important HTML5 topics along with brief details: Semantic Elements, Forms, Audio/Video, Canvas, Geolocation, Local Storage, Web Workers etc..</p>
                <Link to="/HTMLarticle">
                    <input type='button' name='Read Now!'  value="Read Now" id='article-btn' className='cursor-pointer'/>
                </Link>
                
            </div>

            <div>
                <div>
                    <p>Latest</p>
                    <h3 className='text-2xl font-bold'>CSS! More Useable Code.</h3>
                    <p>Part 1</p>
                </div>
                
                <p className='font-semibold mt-5'>Certainly! Here are some important CSS topics: Selectors, Box Model, Flexbox, Grid Layout, Positioning, Responsive Design, Transitions, Transforms, Animations etc..</p>
                <Link to="/CSSarticle">
                    <input type='button' name='Read Now!' value="Read Now" id='article-btn' className='cursor-pointer'/>
                </Link>
                
            </div>

            <div>
                <div>
                    <p>Latest</p>
                    <h3 className='text-2xl font-bold'>Javascript! Imp. Topics.</h3>
                    <p>Part 1</p>
                </div>
                
                <p className='font-semibold mt-5'>JavaScript, a versatile language for web development, covers key topics like variables, functions, DOM manipulation, AJAX, JSON, and more. Here's a brief overview..</p>

                <Link to="/JSarticle">
                    <input type='button' name='Read Now!' value="Read Now" id='article-btn' className='cursor-pointer'/>
                </Link>
                
            </div>
        </div>
    </>
  )
}
