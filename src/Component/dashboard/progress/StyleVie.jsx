import React from 'react';
import IconeStyleVie from '../../../images/iconStyleVie.svg';

const StyleVie = () => {
  return(
    <div className="progress-cards">
      <img src={ IconeStyleVie } alt="icone style de vie" className="progress-icone"/>
      <div className="progress-info">
        <h4 className="progress-title">Style de vie</h4>
        <p className="progress-content">Se déplacer, comment s’habiller, la créativité, la soif,  le sport, la fête ...</p>
      </div>
    </div>
  )
}
export default StyleVie;