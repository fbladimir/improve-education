import React from 'react'
import Login from '../../pages/login/Login'; 
import teacherLogin from '../../pages/teacherLogin/teacherLogin'; 


const CTA = () => {
  return (
 
    <div className="cta">
     
   
    
      <a  href="/login" className="btn"> I am a Student </a>
      <a href="/login" className="btn btn-primary"> I am a Teacher </a>

    
    </div>

  
  ); 
}

export default CTA