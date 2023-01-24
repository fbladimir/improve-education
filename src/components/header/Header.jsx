import React from 'react'
import './header.css'
import CTA from './CTA'
import Intro from '../intro/Intro'

const Header = () => {
  return (
    
    <header id="header">
      <div className="container header__container">
        <h5>Welcome to </h5>
        <h1> Improving Education </h1> 
        <h4 className="text-light"> Who is visting today? </h4>
         
        <CTA />

        <a href="#contact" className="scroll__down">
        
        </a>

        <Intro /> 

       

      </div>
    </header>
    
  )
}

export default Header