import React from 'react';
import Logo from '../../images/LogoCut.png';

const NumberChallenge = () => {
  
  let number = 8;


  return(
    <section className="number-challenge">
      <h4 className="number-challenge-title">Nombre de défis validés</h4>
      <div className="number-challenge-card">
        <p className="number-challenge-content">
          { number } <span>/ 30</span>
        </p>
        <p className="number-challenge-theme">Thème du jour</p>
      </div>
      <img className="logo-feuilles" src={ Logo } alt="logo  feuilles"/>
    </section>
  )
}
export default NumberChallenge;