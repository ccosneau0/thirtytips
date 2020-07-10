import React from 'react';
import IconeNumerique from '../../../images/iconNumerique.svg';

const Numerique = () => {
  return(
    <div className="progress-cards">
      <img className="progress-icone" src={ IconeNumerique } alt="icone numérique"/>
      <div className="progress-info">
        <h4 className="progress-title">Numérique</h4>
        <p className="progress-content">La pollution, au travail, le streamig, les données, l’obsolessence, le téléphone ...</p>
      </div>
    </div>
  )
}
export default Numerique;