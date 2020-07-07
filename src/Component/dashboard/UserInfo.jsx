import React, { useState, useEffect } from "react";
import Valided from '../../images/Valided.png';
import Bubbles from '../../images/bubbles.png';



const UserInfo = () => {
  
  const axios = require('axios');
  let [ userName, setUserName ] = useState('');
  let [ challenge, setChallenge ] = useState('');
  let [day, setDay] = useState(1);
  let handleChange = () => {
    if (day < 30) {
      setDay(day + 1);
    }
  }
  const DayContext = React.createContext(day);
  
  

  useEffect( () => {
    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
        responseType: 'json'
      })
        .then(function (response) {
          let userName = response.data[0].name;
          let challenge = response.data[ day ].website;
          console.log(challenge);
          setUserName(userName);
          setChallenge(challenge);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  },[ day ])


  

 

   
  return (
    <section className="user-info">
      <img className="bubbles" src={ Bubbles } alt="bulles de couleurs"/>
      <p className="step">
        Step <span className="step-number">{ day }</span>
      </p>
      <h2 className="user-name">
        Salut { userName } 
      </h2>
      <p className="challenge">
        Aujourd'hui <span className="challenge-light">{ challenge }</span>
      </p>
      <button className="btn-valided" onClick={ handleChange }>
        J'ai terminé ma mission <img className="logo-valided" src={ Valided } alt="icone valider blanc"/>
      </button>
    </section>
 
  )
  
};

export default UserInfo;