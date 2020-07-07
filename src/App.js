import React from 'react';
import './App.scss';
import './style/bigStyle.scss';
import Logo from './images/LOGO.svg';
import landimg from './images/landing.svg';
import  fb from './images/socialMedia/fb.svg';
import twitter  from './images/socialMedia/Twitter.svg';
import linkedin from './images/socialMedia/Linkedin.svg';
import insta from './images/socialMedia/insta.svg';
import smallLogo from './images/socialMedia/small.svg';

const App = () => {
  return (
    ////LANDING////
    <div className="App">
         
      <div className="landing-cta-container">
          <img className="logo" src={Logo} alt="okok"></img>
         
          <div className="text-wrapper">
            <p>  
              Adoptez facilement des gestes du quotidien  plus responsable pour limiter votre empreinte écologique. <br/>
              <br/>Commencez dès maintenant et faites un pas de plus pour <br/>notre planète.
            </p>
          </div>
          <button className="btn-log"> <i className="icon-avatared"></i> <a href={"/registration"} >crée ton compte</a></button>
        </div>
       
        <div className="gris"> </div>
        <footer className="footer"> 
          <img className="logo" src={smallLogo} alt="okok"></img>
          <p>Contact   -   Confidenialité   -   Conditions </p>
          <div className="socialMedia">
            <img  src={fb} alt="okok"></img>
            <img src={insta} alt="okok"></img>
            <img  src={linkedin} alt="okok"></img>
            <img  src={twitter} alt="okok"></img>
          </div>
         </footer>
         {/* NE PAS TOUCHER EN DESSOUS */}
        <div className="landing-illustration">
         <img src={landimg} alt="okok"></img> 
      </div>
    </div>
  );
};
export default App;

{/* <div className="first-block">
        <div className="landing-cta-container">
          <img className="logo" src={Logo} alt="okok"></img>
         
          <div className="text-wrapper">
            <p>  
              Adoptez facilement des gestes du quotidien  plus responsable pour limiter votre empreinte  écologique. <br/>
              <br/>Commencez dès maintenant et faites un pas de plus pour notre planète.
            </p>
          </div>
          <button className="btn-log"> <i className="icon-avatared"></i> <a href={"/registration"} >crée ton compte</a></button>
        </div>

        <div className="landing-image-container">
          <img src={landimg} alt="okok"></img>
        </div> 
      </div> */}
          