import React from 'react';
import IconeMaison from '../../../images/iconMaison.svg';

const Maison = () => {
  return(
    <div className="progress-cards">
      <img className="progress-icone" src={ IconeMaison } alt="icone maison"/>
      <div className="progress-info">
        <h4 className="progress-title">À la maison</h4>
        <p className="progress-content">La viande, les saisons, local, le nettoyage, l’hygiène, la cuisine ...</p>
      </div>
    </div>
  )
}
export default Maison;