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
        <div className="circle"> 2/8 </div>
      </div>
      <div className="listing">
        <Steps></Steps>
      </div>
    </div>   
  )
}
export default GradeCard;