import React from 'react';
import html_bg from "./html.jpg";

import useScrollToTop from '../HighOrder/ScrollTo';

export default function Article1() {

  useScrollToTop();

  return (
    <div className='text-center' id='article1-maindiv'>

        <h1 className='text-5xl mx-5 font-bold pt-5'>Beginner? HTML5.</h1>
        <p className='text-xl mt-5 px-5 md:px-20'>HTML5 introduces several key features that enhance web development and user experience. Semantic elements, such as {`<article>, <section>, and <footer>`}, improve document structure. Forms benefit from enhanced input types and attributes, facilitating better data handling and validation. Native support for embedding audio and video content eliminates the need for external plugins. Local storage offers a mechanism for storing data on the client side, enabling offline access. Web workers enable background scripts for parallel processing, improving performance without freezing the user interface.</p>

        <div className='flex flex-col md:flex-row justify-center gap-2 my-10'>
          <div>
            <img src={html_bg}   id='html-article-image' alt='..'/>
          </div>

          <div className='text-left mx-5 md:ml-3' id='html-right-div'>
            <h5 className='text-2xl font-bold'>Semantic Elements</h5>
            <p className='text-xl'>HTML5 introduces semantic elements like {`<header>, <footer>, <nav>, <article>, <section> etc`}, which provide more meaning to the content.</p>

            <h5 className='text-2xl font-bold mt-2'>Forms</h5>
            <p className='text-xl'>HTML5 offers new input types {`(<input type="email",>, <input type="url">, etc.), attributes (required, placeholder, pattern, etc.), and elements (<datalist>, <output>, <progress>, <meter>)`} to enhance form functionality.</p>

            <h5 className='text-2xl font-bold mt-2'>Audio and Video</h5>
            <p className='text-xl'>HTML5 provides {`<audio> and <video>`} elements, allowing native embedding of media content without third-party plugins.</p>
          </div>
        </div>
        
        

        <ul typeof='none' className='mx-5 md:mx-32 text-left'>
            <li className='text-2xl font-bold mt-5'>Semantic Elements</li>
            <li className='text-xl'>HTML5 introduces semantic elements like {`<header>, <footer>, <nav>, <article>, <section>, and <aside>`}, which provide more meaning to the content.</li>

            <li className='text-2xl font-bold mt-5'>Forms</li>
            <li className='text-xl'>HTML5 offers new input types {`(<input type="email">, <input type="url">, etc.), attributes (required, placeholder, pattern, etc.), and elements (<datalist>, <output>, <progress>, <meter>)`} to enhance form functionality.</li>

            <li className='text-2xl font-bold mt-5'>Audio and Video</li>
            <li className='text-xl'>HTML5 provides {`<audio> and <video>`} elements, allowing native embedding of media content without third-party plugins.</li>

            <li className='text-2xl font-bold mt-5'>Canvas</li>
            <li className='text-xl'>The {`<canvas>`} element allows dynamic, scriptable rendering of 2D shapes and bitmap images. It's widely used for drawing graphics, animations, charts, and games.</li>

            <li className='text-2xl font-bold mt-5'>Geolocation</li>
            <li className='text-xl'>HTML5 enables websites to access users' geographical locations through the Geolocation API, enhancing location-based services.</li>

            <li className='text-2xl font-bold mt-5'>Local Storage and Session Storage</li>
            <li className='text-xl'>HTML5 introduced the localStorage and sessionStorage APIs, allowing web applications to store key/value pairs locally in a user's browser.</li>

            <li className='text-2xl font-bold mt-5'>Web Storage</li>
            <li className='text-xl'>HTML5 offers a more secure and efficient way to store data in the client's browser compared to cookies, providing more storage space and better performance.</li>

           <li className='text-2xl font-bold mt-5'>Web Workers</li>
           <li className='text-xl'>Web Workers allow web applications to run scripts in the background, independently of the user interface, improving performance by keeping expensive computations off the main thread.</li>

            <li className='text-2xl font-bold mt-5'>WebSockets</li>
            <li className='text-xl'>HTML5 WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time communication between a client and a server.</li>

            <li className='text-2xl font-bold mt-5'>Responsive Images</li>
            <li className='text-xl'>HTML5 introduces the {`<picture>`} element and the srcset attribute, allowing developers to provide different image sources based on device characteristics like screen size and resolution.</li>

            <li className='text-2xl font-bold mt-5'>SVG</li>
            <li className='text-xl'>Scalable Vector Graphics {`(SVG)`} is a markup language for describing two-dimensional graphics. HTML5 allows inline SVG code to be embedded directly within HTML documents.</li> 

            <li className='text-2xl font-bold mt-5'>Drag and Drop</li>
            <li className='text-xl'>HTML5 introduces a native Drag and Drop API, making it easier to implement drag-and-drop functionality in web applications</li>

            <li className='text-xl my-5'>These are some of the important HTML5 topics that developers use frequently while building websites. Understanding these concepts will help you create modern, feature-rich web applications.</li>
        </ul>
    </div>
  )
}
