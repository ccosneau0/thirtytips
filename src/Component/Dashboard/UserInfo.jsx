import React, { useState, useEffect } from "react";
import Valided from '../../images/Valided.png';
import Bubbles from '../../images/bubbles.png';


const UserInfo = (props) => {
  
  const axios = require('axios');

  const [result, setResult] = useState();
  let [ steps, setSteps ] = useState(0);
  
  let [ userName, setUserName ] = useState('');
  let [ challenge, setChallenge ] = useState('');

  let [ stepId, setStepId ] = useState('');
  let [ stepName, setStepName ] = useState('');
  

  

  useEffect( () => {

    async function getData() {
      let dataGet = await axios({
        method: 'post',
        url: 'https://radiant-anchorage-47441.herokuapp.com/json/challenge/getter',
        responseType: 'json',
        data: {
          user_id: 1
        }
      })
        .then(function (response) {
          let result = response.data[0].step;
          let userName = response.data[ steps ].name;
          setResult(result);
          setUserName(userName);
          setSteps(steps = result.length + 1);
          console.log('resultat requette step : ' + steps);
        })
        .catch(function (error) { 
          console.log(error);
        });
    }
    getData();

    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://radiant-anchorage-47441.herokuapp.com/json/challenge',
        responseType: 'json',
      })
        .then(function (response) {
          let challenge = response.data[ steps ].content;
          setChallenge(challenge);
          let stepId = response.data[ steps ].step.id;
          setStepId(stepId);
          let stepName = response.data[ steps ].step.name;
          setStepName(stepName);
          console.log('userName : ' + userName);
          console.log('challenge : ' + challenge);
          console.log('stepId : ' + stepId);
          console.log('stepName : ' + stepName);
        })
        .catch(function (error) { 
          console.log(error);
        });
    }
    fetchData();

    // async function updateData() {
    //   let dataUpdate = await axios({
    //     method: 'catch',
    //     url: 'https://radiant-anchorage-47441.herokuapp.com/json/challenge/setter',
    //     responseType: 'json',
    //     data: {
    //       user_id: 1,
    //       step_id: stepId
    //     }
    //   })
    //     .catch(function (error) { 
    //       console.log(error);
    //     });
    // }
    // updateData();
    
  },[ steps ])

  let handleChange = () => {
    if (steps < 29) {
      setSteps(steps + 1);
    }
  }

  // const name = useRef(userName);

   
  return (
    <section className="user-info">
      <img className="bubbles" src={ Bubbles } alt="bulles de couleurs"/>
      <p className="step">
        Step <span className="step-number">{ steps }</span>
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