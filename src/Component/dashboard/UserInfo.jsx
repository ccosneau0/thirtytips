import React, { useState, useEffect } from "react";






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
    <section>
      <p user={ day }>
        Step { day }
      </p>
      <p>
        Salut { userName } 
      </p>
      <p>
        Aujourd'hui { challenge } !
      </p>
      <button onClick={ handleChange }>
        J'ai terminé ma mission
      </button>
    </section>
 
  )
  
};

export default UserInfo;