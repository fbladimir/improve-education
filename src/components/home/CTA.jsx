import React from 'react'
import Login from '../../pages/login/Login'; 
import TeacherLogin from '../../pages/login/teacherLogin' 


const CTA = () => {
  return (
 
    <div className="cta">
     
   
    
      <a  href="/login" className="btn"> I am a Student </a>
      <a href="/teacherLogin" className="btn btn-primary"> I am a Teacher </a>

    
    </div>

  
  ); 
}

export default CTA