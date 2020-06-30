import React from 'react';
import './App.scss';
import './style/bigStyle.scss';
import Logo from './images/LOGO.svg'
import landimg from './images/landing.svg'

const App = () => {
  return (
    ////LANDING////
    <div className="App">
      <div className="first-block">
        <div className="landing-cta-container">
          <img className="logo" src={Logo} alt="okok"></img>
          {/* <h1> 30 Steps to change</h1> */}
          <div className="text-wrapper">
          <i className="icon-check"></i>
              <i className="icon-avatared"></i>
            <p>  
              Adoptez facilement des gestes du quotidien  plus responsable pour limiter votre empreinte  écologique. <br/>
              <br/>Commencez dès maintenant et faites un pas de plus pour notre planète.
            </p>
          </div>
          <button className="btn-log">  <a href={"/registration"} >Le button log </a></button>

          <button> le button générale  </button>
          <button className="btn"> le button BTN  </button>
        </div>

        <div className="landing-image-container">
          <img src={landimg} alt="okok"></img>
        </div>
      </div>
          
    </div>
  );
};
export default App;