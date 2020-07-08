import React from 'react';
import './Advocacy.scss';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../../../images/slide1.svg';
import slide2 from '../../../images/slide2.svg';
import slide3 from '../../../images/slide3.svg';
import slide4 from '../../../images/slide4.svg';

const slideImages = [
  `${slide1}`,
  `${slide2}`,
  `${slide3}`,
  `${slide4}`
  
];

const properties = {
  duration: 6000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  //marginLeft: 300,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Advocacy = () =>  {
  return (
    <div className="Advocacy">
      <Slide {...properties}>
        <div className="each-slide">
          <div className="trying" style={{'backgroundImage': `url(${slideImages[0]})`}}>
            {/* <img src={slide1} alt="alt"></img>  */}
            <div className="wording-wrapper">
              <h4> 30 Steps to change</h4>
              <p> 
                Comment des gestes simples, à appliquer à votre quotidien <br/>
                vont vous aider à sauver la planète ? <br/>
                <br/>Grâce à 30 defis adaptés, apprenez à devinir plus responsable simplement. 
              </p>
            </div> 
          </div>
        </div>

        <div className="each-slide">
          <div  className="trying" style={{'backgroundImage': `url(${slideImages[1]})`}}>
            {/* <img src={slide2} alt="slide2"></img> */}
            <div className="wording-wrapper">
              <h4> Par où commencer ?</h4>
              <p> 
                On te donne un coup de pouce pour passer les étapes ! <br/>
                <br/>Chaque jour, tu disposeras de 3 tips pour pouvoir facilement <br/>
                limiter ton empreinte écologique !
              </p>
            </div> 
          </div>
        </div>

        <div className="each-slide">
          <div  className="trying" style={{'backgroundImage': `url(${slideImages[2]})`}}>
            {/* <img src={slide3} alt=""></img>  */}
            <div className="wording-wrapper">
              <h4>Et si je ne peux pas aujourd’hui ?</h4>
              <p> 
                Pas de panique ce n’est pas une course ! <br/>
                <br/>Tu pourras retrouver sur ton dashboard 5 thèmes avec les 6 défis leur correspondant  <br/> 
                ce qui te permettras de suivre à ton rythme.
              </p>
            </div> 
          </div>
        </div>  

        <div className="each-slide">
          <div  className="trying" style={{'backgroundImage': `url(${slideImages[3]})`}}>
           {/*  <img src={slide4} alt=""></img>  */}
            <div className="wording-wrapper">
              <h4> On vous met au courant !</h4>
              <p> 
                Envie d’en apprendre un peu plus ? <br/>
                Tu auras la possibilité de lire 2 articles choisis en fonction du thème du jour <br/>
                pour en savoir un peu plus sur l’actualité écolo !
              </p>
            </div> 
          </div>
        </div>  
      </Slide>
      <div className="to-subscribe">
      <svg viewBox="0 0 500 500">
        <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
          <text width="500">
          <textPath href="#curve">
            Swipe pour t'inscrire 
            </textPath>
          </text>
      </svg>
      </div>
    </div>
  );
}
export default Advocacy;