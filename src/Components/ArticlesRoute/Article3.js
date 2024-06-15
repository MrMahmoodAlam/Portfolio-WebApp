import React from 'react';
import js_bg from "./js.jpg";

import useScrollToTop from "../HighOrder/ScrollTo"

export default function Article3() {

  useScrollToTop();

  return (
    <div className='text-center' id='article1-maindiv'>

      <h1 className='text-5xl mx-5 font-bold pt-5'>Javascript! Important Topics.</h1>
      <p className='text-xl mt-5 px-5 md:px-20'>HTML5 introduces several key features that enhance web development and user experience. Semantic elements, such as {`<article>, <section>, and <footer>`}, improve document structure. Forms benefit from enhanced input types and attributes, facilitating better data handling and validation. Native support for embedding audio and video content eliminates the need for external plugins. Local storage offers a mechanism for storing data on the client side, enabling offline access. Web workers enable background scripts for parallel processing, improving performance without freezing the user interface.</p>

      <div className='flex flex-col md:flex-row justify-center gap-2 my-10'>
        <div>
          <img src={js_bg}   id='html-article-image' alt='..'/>
        </div>

        <div className='text-left mx-5 md:ml-3 ' id='html-right-div'>
          <h5 className='text-2xl font-bold'>Variables and Data Types</h5>
          <p className='text-xl'>Variables store data values. JavaScript has several data types such as strings, numbers, booleans, objects, arrays, and more.</p>

          <h5 className='text-2xl font-bold mt-2'>Operators</h5>
          <p className='text-xl'>JavaScript includes various operators like arithmetic, assignment, comparison, logical, bitwise, and more</p>

          <h5 className='text-2xl font-bold mt-2'>Control Structures</h5>
          <p className='text-xl'>These include if...else, switch, and loops like for, while, and do...while, used to control the flow of the program.</p>
        </div>
      </div>


      <ul typeof='none' className='mx-5 md:mx-32 text-left' id="js-article-ul">

        <li className='font-bold mt-5 text-2xl'>Functions</li>
        <li className='text-xl'>Functions are blocks of reusable code. JavaScript allows you to define functions with or without parameters, and they can return values.</li>

        <li className='font-bold mt-5 text-2xl'>Arrays</li> 
        <li className='text-xl'>Arrays are used to store multiple values in a single variable. JavaScript arrays can hold different data types, and you can manipulate them using various methods.</li>

        <li className='text-2xl font-bold mt-5'>Objects</li>
        <li className='text-xl'>Objects are collections of key-value pairs. They are used to represent real-world entities and are a fundamental part of JavaScript.</li>

        <li className='font-bold mt-5 text-2xl'>Classes</li> 
        <li className='text-xl'>Introduced in ES6, classes are blueprints for creating objects with similar properties and methods.</li>

        <li className='font-bold mt-5 text-2xl'>Scope</li>
        <li className='text-xl'>JavaScript has two types of scope: global and local. Variables defined outside of any function have global scope, while variables declared within a function have local scope.</li>

        <li className='font-bold mt-5 text-2xl'>Closures</li>
        <li className='text-xl'>A closure is an inner function that has access to the outer (enclosing) function's variables. Closures have access to their own scope, the outer function's variables, and the global variables.</li>

        <li className='font-bold mt-5 text-2xl'>Callbacks</li>
        <li className='text-xl'>A callback is a function passed as an argument to another function. It allows you to execute code asynchronously.</li>

        <li className='font-bold mt-5 text-2xl'>Promises</li>
        <li className='text-xl'>Promises are used to handle asynchronous operations. They represent a value which may be available now, or in the future, or never.</li>

        <li className='font-bold mt-5 text-2xl'>Async/Await</li>
        <li className='text-xl'>Introduced in ES8, async/await provides a syntactic sugar for working with asynchronous functions, making asynchronous code look and behave more like synchronous code.</li>

        <li className='font-bold mt-5 text-2xl'>DOM Manipulation</li>
        <li className='text-xl'>The Document Object Model (DOM) is a programming interface for web documents. JavaScript can be used to manipulate the DOM, changing element attributes, styles, and content.</li>

        <li className='font-bold mt-5 text-2xl'>Events</li>
        <li className='text-xl'>JavaScript can respond to user actions like clicks, keypresses, mouse movements, etc., through event handling.</li>

        <li className='font-bold mt-5 text-2xl'>AJAX</li>
        <li className='text-xl'>Asynchronous JavaScript and XML (AJAX) allows you to send and receive data asynchronously without reloading the web page.</li>

        <li className='font-bold mt-5 text-2xl'>JSON</li>
        <li className='text-xl'>JavaScript Object Notation (JSON) is a lightweight data interchange format. It is easy for humans to read and write and easy for machines to parse and generate.</li>

        <li className='text-xl my-5'>These are just a few important topics in JavaScript. Mastering them will give you a solid foundation for web development.</li>
      </ul>

    </div>
  )
}
