import React from 'react';
import IconeConso from '../../../images/iconeConso.svg';

const Consommation = () => {
  return(
    <div className="progress-cards">
      <img className="progress-icone" src={ IconeConso } alt="icone consommation"/>
      <div className="progress-info">
        <h4 className="progress-title">Consommation</h4>
        <p className="progress-content">Le chauffage,  la nouritture, l’électricité, se laver, l’eau, le composteur ...</p>
      </div>
    </div>
  )
}
export default Consommation;