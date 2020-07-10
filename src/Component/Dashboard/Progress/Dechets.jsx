import React from 'react';
import IconeDechets from '../../../images/iconeDechets.svg';

const Dechets = () => {
  return(
    <div className="progress-cards">
      <img className="progress-icone" src={ IconeDechets } alt="icone déchets"/>
      <div className="progress-info">
        <h4 className="progress-title">Déchets</h4>
        <p className="progress-content">la plage, les emballages, le ramassage, le recyclage, se limiter , les cottons tiges ...</p>
      </div>
    </div>
  )
}
export default Dechets;