import React from 'react';
import './GradeLevel.scss';
import  GradeCard from '../../GRADES/GradeCard/GradeCard';
import Data from '../../../Fake DATA/data';


function GradeLevel (){
 /*  componentDidMount = () => {
    axios.get('theme')
    .then((response) => {
      this.setState({
        values: response.data["hydra:member"]
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  } */
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