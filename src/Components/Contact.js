import React from 'react'

import { useRef, useState, useEffect } from 'react';
import emailjs from "@emailjs/browser";

import cont_bg from "../images/illustration/contact.jpg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Contact() {

    useEffect(()=>{

        gsap.fromTo('#contact-div1', {x : "-30vw", duration : 1}, {x : "0px", duration : 1, scrollTrigger : {
            trigger : "#contact-div1",
        }})
          
        gsap.fromTo('#contact-div2', {x : "30vw", duration : 1}, {x : "0px", duration : 1, scrollTrigger : {
            trigger : "#contact-div2",
        }})

        
    })

    const service  = String(process.env.REACT_APP_SERVICE);
    const template  = String(process.env.REACT_APP_TEMPLATE);
    const key  = String(process.env.REACT_APP_API_KEY)

    const [style, new_style ] = useState ({
        display : "none"
    })
    const form = useRef();
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(service, template, form.current, key)
            .then((result) => {

                new_style({
                    display : "inline-block"
                })
                let name = document.getElementById("user-name");
                let email = document.getElementById("user-mail");
                let message = document.getElementById("user-text");
                name.value = ""
                email.value = ""
                message.value = ""

            }, (error) => {
                console.log(error.text);
            });
    };
    let back_submit = ()=>{
        new_style({
            display : "none"
        })
    }


  return (
    <>
        <div className='flex flex-col md:flex-row justify-center items-center gap-10 mt-20 overflow-x-hidden' id="contact-main-div">
            <div id='contact-div1'>
                <img src={cont_bg} alt='...'/>
            </div>

            <div id='contact-div2'>
                <h1 className='text-5xl font-semibold'>Contact</h1>
                <p>It's Easy To Fill The Form</p>

                <form ref={form} onSubmit={sendEmail}>

                    <input type="text" placeholder="Write your names" id="user-name" name='user_name' className='mt-10'/>

                    <input type="email" placeholder="Write your email" id="user-mail" name="user_email"/>

                    <textarea placeholder="Write your projects" className="resize-none" id="user-text" name='message'></textarea>

                    <input type='submit' value="Send" id="submit-div" className='bg-black text-white cursor-pointer font-semibold text-xl'/>

                </form>
            </div>
        </div>




        {/* Submited Form Componets */}
        <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" style={style}>

            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                
                    <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.602 13.7599L13.014 15.1719L21.4795 6.7063L22.8938 8.12051L13.014 18.0003L6.65 11.6363L8.06421 10.2221L10.189 12.3469L11.6025 13.7594L11.602 13.7599ZM11.6037 10.9322L16.5563 5.97949L17.9666 7.38977L13.014 12.3424L11.6037 10.9322ZM8.77698 16.5873L7.36396 18.0003L1 11.6363L2.41421 10.2221L3.82723 11.6352L3.82604 11.6363L8.77698 16.5873Z" fill="rgba(0,245,3,1)"></path></svg>
                                </div>
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">Thank You !</h3>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">Your details has been successfully submitted. Thanks !</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={back_submit}>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
