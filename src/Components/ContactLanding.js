import React from 'react'
import Contact from "./Contact";
import Footer from './Footer';

import useScrollToTop from './HighOrder/ScrollTo';

export default function ContactLanding() {

  useScrollToTop()
  return (
    <>
    <Contact/>
    <Footer/>
    </>
  )
}
