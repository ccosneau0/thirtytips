import React from 'react';
import './Signup.scss';
import Logo from '../../images/LOGO.svg'
 
function Signup() {
  return (
    <div className="Signup">

     {/*  ne pas prendre en compte button google => impélmentation a venir   */}
      <img className="signup-logo"src={Logo}></img>
      <h3> Sign up </h3>
      <button className="btn-log"> GOOGLE not design </button>
      <p>Or sign up with email</p>
      <input type="email" value="entrez votre prénom/pseudo"></input>
      <input type="email"></input>
      <input type="password" ></input>
      <button className="btn-log disabled"> <i className="icon-avatared"></i> <a href={"/registration"} >crée ton compte   </a></button>
      
      <p className="signup-policy">
        By signing up, I agree to the Treva Orivacy Policy <br/>
        and Terms of Service.
      </p>

      <p>Have an account ? <strong><a>Log in</a> </strong></p> 
      

    </div>
  );
}

export default Signup;