import React from 'react';
import './Avatar.scss';
import AvartPicture from '../../images/Avatar-Picture.svg'
function Avatar (){
  return(
    <div className="Avatar">
      <div className="avatarName"> Joli Nom </div>
      <div className="avatarPicture">
        <img className="trytry" src={AvartPicture} alt="avatar image"></img>
        <div className="iconSupport"> <i className="icon-ecrou"></i></div>
      </div>  
    </div>
  )
}
export default Avatar;