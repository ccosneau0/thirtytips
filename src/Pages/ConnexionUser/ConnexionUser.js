import React from 'react';
//import '../Registration/Registration.scss';
import './ConnexionUser.scss';
//import Signup from '../../Component/Registration/Signup/Signup';
import Advocacy from '../../Component/Registration/Advocacy/Advocacy';
import LogUser from '../../Component/ConnexionUser/LogUser';

function ConnexionUser() {
  return (
    <div className="ConnexionUser">
      <div className="user-wrapper">
        <LogUser></LogUser>
      </div>
      <div className="advocacy-wrapper">
        <Advocacy></Advocacy>
      </div>
    </div>
  );
}

export default ConnexionUser;