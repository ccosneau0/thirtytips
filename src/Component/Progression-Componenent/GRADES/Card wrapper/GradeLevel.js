import React from 'react';
import './GradeLevel.scss';
import  GradeCard from '../../GRADES/GradeCard/GradeCard'
function GradeLevel (){
  return(
    <div className="GradeLevel">
      <GradeCard></GradeCard>
      <GradeCard></GradeCard>
      <GradeCard></GradeCard>
      <GradeCard></GradeCard>
      <GradeCard></GradeCard>
      <GradeCard></GradeCard>
    </div>
  )
}
export default GradeLevel;