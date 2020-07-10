import React from 'react';
import './GradeCard.scss';
import Steps from  '../Challenge list/Steps';

function GradeCard (){
  return(
    <div className="grade-card">
      <div className="illu-wrapper">
        <div className="squared"> 
          <i className="icon-energie"></i>
        </div>
        <div className="circle"> 
        <div className="circle-box">
          <svg>
          {/* <circle cx="70" cy="70" r="70"></circle> */}
         {/*  <circle cx="70" cy="70" r="70"></circle> */}
           <circle cx="30" cy="30" r="30"></circle> 
           <circle cx="30" cy="30" r="30"></circle> 
           
          </svg>
        </div>
          <div className="Number"> 2/6 </div>
        
        </div>
      </div>
      <div className="listing">
        <Steps></Steps>
      </div>
    </div>   
  )
}
export default GradeCard;