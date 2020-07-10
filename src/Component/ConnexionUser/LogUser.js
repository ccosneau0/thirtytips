import React from 'react';
import './LogUser.scss';
import Logo from '../../images/LOGO.svg'
 

 //@TODO : button disable => if input empty 
function LogUser() {
  return (
    <div className="Signup">

     {/*  ne pas prendre en compte button google => impélmentation a venir   */}
     <img className="signup-logo"src={Logo}></img> 
      <h3> Connexion ! </h3>
     {/*  <button className="btn-log"> GOOGLE not design </button>
      <p>Or sign up with email</p> */}
      {/* <label for="pseudo"></label>
      <input type="text" id="pseudo" placeholder="entrez votre prénom/pseudo"></input> */}
      <form>
        <label for="email"></label>
        <input type="email"  id="email" placeholder="entre ton  adresse e-mail"></input>
        <label for="pwd"></label>
        <input type="password" id="pwd" placeholder="entre ton mot de passe" ></input>
        <button  type="submit" className="btn-log disabled"> <i className="icon-avatared"></i> <a href={"/dashboard"} >crée ton compte   </a></button>
      </form>
      <p className="signup-policy">
        By signing up, I agree to the Treva Orivacy Policy <br/>
        and Terms of Service.
        <p> Tu n'as pas de compte ? <a href='/Registration'><strong> Crée le ! </strong></a></p>
      </p>

      
      
      

    </div>  
  );
}

export default LogUser;