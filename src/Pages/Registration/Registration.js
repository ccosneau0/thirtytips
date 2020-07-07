import React from 'react';
import './Registration.scss';
import Signup from '../../Component/Registration/Signup';
import Advocacy from '../../Component/Registration/Advocacy';

function Registration() {
  return (
    <div className="Registration">
      <div className="signup-wrapper">
        <Signup></Signup>
      </div>
      <div className="advocacy-wrapper">
        <Advocacy></Advocacy>
      </div>
    </div>
  );
}

export default Registration;