import React from "react";
import './Signup.scss';
import Logo from '../../../images/LOGO.svg'


 //@TODO : button disable => if input empty 
 const Signup  = () => {
  
/*   const axios = require('axios');

  const [result, setResult] = useState();
 /*  let [ steps, setSteps ] = useState(0); */
  
 /*  let [ userName, setUserName ] = useState('');
  let [ email, setEmail ] = useState('');
  let [ password , setPassword  ] = useState('');
   */

/*   useEffect( () => {
     handleSubmit = e =>{ 
      async function getData() {
        let dataGet = await axios({
          method: 'post',
          url: 'https://radiant-anchorage-47441.herokuapp.com/json/register',
          responseType: 'json',
          data: { user_id: 1 }
        })
          .then(function (response) {
            let result = response.data[0];
            let userName = response.data.name;
            let email = response.data.email;
            let password = response.data.password;
            setResult(result);
            setUserName(userName);
            setEmail(email);
            setPassword(password);
            console.log('resultat requette step : ' + userName);
          })
          .catch(function (error) { 
            console.log(error);
          });
      }
      getData();
    } 
  },)
 */

  




  

/*   useEffect( () => {
    handleSubmit = e =>{
      e.preventDefault();
        async function getData() {
          let dataGet = await axios({
            method: 'post',
            url: 'https://radiant-anchorage-47441.herokuapp.com/json/register',
            responseType: 'json',
            data: {user_id: 1}
          })
            .then(function (response) {
              let result = response.data[0];
              let userName = response.data.name;
              let email = response.data.email;
              let password = response.data.password;
              setResult(result);
              setUserName(userName);
              setEmail(email);
              setPassword(Password);
              console.log( userName);
            })
            .catch(function (error) { 
              console.log(error);
            });
      }
    }

    getData();
  }

  const changeHanler = e =>{
    ({[e.target.userName] : e.target.value})
  
  };
} */



  
  
 
  
/*   handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state, "coucou") 
    axios.post('https://radiant-anchorage-47441.herokuapp.com/json/register', this.responseType = 'json', this.data = {
       name : this.data.name,
       email : this.data.email,
       password : this.data.password,
    })
    .then(response => {
       setName(name);
      setEmail(email);
      setPassword(password);
      console.log(response);
    })
    .catch(error=> {
      console.log(error)
    })   
  }
*/
 
  return (
    <div className="Signup">

     <img className="signup-logo"src={Logo}></img> 
      <h3> Incris-toi !</h3>

     <form   /* onSubmit={handleSubmit}  */> 
        <label htmlFor="name"></label>
        <input 
          type="text" 
          id="name" 
          name="name"
          /* value={ userName }  */
          placeholder="entrez votre prénom"
          /* onChange={changeHanler} */
         />
        <label htmlFor="email"></label>
        <input 
          type="email"  
          id="email"  
          name="email"  
          /* value={email}   */
          placeholder="entrez votre adresse e-mail"
          /* onChange={changeHanler} */
        />
        <label htmlFor="pwd"></label>
        <input 
          type="password" 
          id="pwd"  
          name="password"  
          /* value={password}  */ 
          placeholder="entrez votre mot de passe"
          /* onChange={changeHanler} */
        />
        <button  type="submit" className="btn-log disabled"> <i className="icon-avatared"></i>  <a href={"/dashboard"} > crée ton compte   </a></button>
      </form> 
     
      
      <p className="signup-policy">
        By signing up, I agree to the Treva Orivacy Policy <br/>
        and Terms of Service.
        <br/>Tu as déjà un compte ?  
        <a href={"/connexionUser"}><strong> Connecte-toi !</strong> </a> 
      </p>
    </div>
  );
};
export default Signup;