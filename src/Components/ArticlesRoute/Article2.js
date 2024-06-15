import React from 'react';
import css_bg from "./css.jpeg";
import useScrollToTop from '../HighOrder/ScrollTo';

export default function Article2() {

  useScrollToTop();
  
  return (
    <div className='text-center' id='article1-maindiv'>

      <h1 className='text-5xl font-bold pt-5'>CSS! More Useable Code.</h1>
      <p className='text-xl mt-5  px-5 md:px-20'>HTML5 introduces several key features that enhance web development and user experience. Semantic elements, such as {`<article>, <section>, and <footer>`}, improve document structure. Forms benefit from enhanced input types and attributes, facilitating better data handling and validation. Native support for embedding audio and video content eliminates the need for external plugins. Local storage offers a mechanism for storing data on the client side, enabling offline access. Web workers enable background scripts for parallel processing, improving performance without freezing the user interface.</p>

      <div className='flex flex-col md:flex-row justify-center gap-2 my-10'>
        <div>
          <img src={css_bg}   id='html-article-image' alt='..'/>
        </div>

        <div className='text-left mx-5 md:ml-3' id='html-right-div'>
          <h5 className='text-2xl font-bold'>Selectors</h5>
          <p className='text-xl'>CSS selectors are patterns used to select and style elements in HTML documents. Common selectors include element selectors, class selectors, ID selectors, and attribute selectors.</p>

          <h5 className='text-2xl font-bold mt-2'>Box Model</h5>
          <p className='text-xl'>The CSS box model consists of content, padding, border, and margin. Understanding the box model is crucial for layout design.</p>

          <h5 className='text-2xl font-bold mt-2'>Flexbox</h5>
          <p className='text-xl'>Flexbox is a layout model that allows you to design complex layouts more easily and efficiently. It provides a more efficient way to layout, align, and distribute space among items in a container.</p>
        </div>
      </div>



      <ul typeof='none' className='text-left mx-5 md:mx-32' id='css-article-ul'>

        <li className='text-2xl font-bold mt-5'>Grid Layout</li>
        <li className='text-xl'>CSS Grid Layout is a two-dimensional layout system for the web. It allows you to create complex grid-based layouts with rows and columns.</li>

        <li className='text-2xl font-bold mt-5'>Positioning</li>
        <li className='text-xl'>CSS positioning allows you to control the position of elements on a web page. Common values for the position property include static, relative, absolute, fixed, and sticky.</li>

        <li className='text-2xl font-bold mt-5'>Responsive Design</li>
        <li className='text-xl'>Responsive web design ensures that web pages render well on a variety of devices and window or screen sizes. Media queries are commonly used to apply different styles based on the device's characteristics.</li>

        <li className='text-2xl font-bold mt-5'>Transitions</li>
        <li className='text-xl'>CSS transitions allow you to change property values smoothly over a specified duration. They are often used to create simple animations such as fading in or sliding elements.</li>

        <li className='text-2xl font-bold mt-5'>Transforms</li>
        <li className='text-xl'>CSS transforms allow you to modify the appearance of an element in 2D or 3D space. Common transform functions include translate, rotate, scale, and skew.</li>

        <li className='text-2xl font-bold mt-5'>Animations</li>
        <li className='text-xl'>CSS animations allow you to create more complex animations by gradually changing an element's style over time. Keyframes are used to define the stages and styles of the animation.</li>


        <li className='text-2xl font-bold mt-5'>Colors and Gradients</li>
        <li className='text-xl'>CSS provides various ways to specify colors, including color names, hexadecimal, RGB, RGBA, HSL, and HSLA values. Gradients allow you to create smooth transitions between two or more colors.</li>

        <li className='text-2xl font-bold mt-5'>Layout Techniques</li>
        <li className='text-xl'>CSS offers different layout techniques such as floats, inline-block, and positioning, which are used to control the layout and positioning of elements on a web page.</li>

        <li className='text-xl my-5'>These are some of the important CSS topics that developers use frequently while building websites. Understanding these concepts will help you create attractive and responsive web designs.</li>
      </ul>
    </div>
  )
}
