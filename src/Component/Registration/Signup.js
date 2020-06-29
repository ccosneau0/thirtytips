import React from 'react';
import './Signup.scss';
import '../../style/style.scss';
import Logo from '../../images/LOGO.svg'

function Signup() {
  return (
    <div className="Signup">
      <img src={Logo}></img>
      <h1> 30 Steps to change</h1>
      <p>  
        Adoptez facilement des gestes du quotidien plus responsable <br/>
        pour limiter votre empreinte écologique.<br/>
        Commencez dès maintenant et faites un pas de plus <br/>
        pour notre planète.
      </p>
      <button className="btn">  <a href={"/registration"} >Créer mon compte</a></button>
    </div>
  );
}

export default Signup;