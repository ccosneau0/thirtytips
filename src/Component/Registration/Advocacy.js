import React from 'react';
import './Advocacy.scss';
import '../../style/style.scss';
import Slide1 from '../../images/slide1.svg';
import Slide2 from '../../images/slide2.svg';
import Slide3 from '../../images/slide3.svg';
import Slide4 from '../../images/slide4.svg';




/* let slides = document.getElementsByClassName("slide");
console.log(slides, "tyuio");

let slide = Array.from(document.getElementsByClassName("slide"))
console.log(slide, "bateo") */





const Advocacy = () =>  {
  

  return (
    <div className="Advocacy">

      <div className="slide">
        <img src={Slide1} alt=""></img>
        <div className="wording-wrapper">
          <h2> 30 Steps to change</h2>
          <p> 
            Comment ses gestes simples vont vous aider à sauver la planet <br/>
            Un dashboard personnel, des tips et des actus pour devinir plus responsables 
          </p>
        </div>
      </div>
 
        <div className="controler-wrapper">
          <span className="prev"> D </span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="next"> G </span>
        </div>

      <div className="slide">
        <img src={Slide2} alt=""></img>
        <div className="wording-wrapper">
          <h2> 30 Steps to change</h2>
          <p> 
            Comment ses gestes simples vont vous aider à sauver la planet <br/>
            Un dashboard personnel, des tips et des actus pour devinir plus responsables 
          </p>
        </div>
      </div>

      <div className="slide">
        <img src={Slide3} alt=""></img>
        <div className="wording-wrapper">
          <h2> 30 Steps to change</h2>
          <p> 
            Comment ses gestes simples vont vous aider à sauver la planet <br/>
            Un dashboard personnel, des tips et des actus pour devinir plus responsables 
          </p>
        </div>
      </div>
      
      <div className="slide">
        <img src={Slide4} alt=""></img>
        <div className="wording-wrapper">
          <h2> 30 Steps to change</h2>
          <p> 
            Comment ses gestes simples vont vous aider à sauver la planet <br/>
            Un dashboard personnel, des tips et des actus pour devinir plus responsables 
          </p>
        </div>

      </div>

    </div>
  );
}

export default Advocacy;