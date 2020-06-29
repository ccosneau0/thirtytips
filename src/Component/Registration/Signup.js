import React from 'react';
import './Signup.scss';
import '../../style/style.scss';
import Logo from '../../images/LOGO.svg'

function Signup() {
  return (
    <div className="Signup">
      <img className="signup-logo"src={Logo}></img>
      <h3> Sign up </h3>
      <button className="btn-log"> Sign up with google </button>
      <p>Or sign up with email</p>
      <input type="email"></input>
      <input type="password" ></input>
      <button className="btn-log"> Créer mon compte </button>
      
      <p>
        By signing up, I agree to the Treva Orivacy Policy <br/>
        and Terms of Service.
      </p>

      <p>Have an account ? <strong><a>Log in</a> </strong></p>
    </div>
  );
}

export default Signup;