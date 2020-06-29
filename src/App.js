
import React from 'react';
import './App.scss';
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
            <p>  
              Adoptez facilement des gestes du quotidien <br/> plus responsable pour limiter votre empreinte  <br/>écologique. 
              <br/>Commencez dès maintenant et faites un pas de plus pour notre planète.
            </p>
          </div>
          <button className="btn-log">  <a href={"/registration"} >Créer mon compte</a></button>
        </div>

        <div className="landing-image-container">
          <img src={landimg} alt="okok"></img>
        </div>
      </div>
          
    </div>
  );
};

export default App;