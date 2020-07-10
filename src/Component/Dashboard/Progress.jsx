import React, { useState, useEffect } from 'react';
import Dechets from './Progress/Dechets';
import StyleVie from './Progress/StyleVie';
import Maison from './Progress/Maison';
import Consommation from './Progress/Consommation';
import Numerique from './Progress/Numerique';
import Logo from '../../images/LOGO.svg';
import NumberChallenge from './NumberChallenge';

const Progess = () => {

  const axios = require('axios');


  // useEffect( () => {
  //   async function fetchData() {
  //     let dataFetch = await axios({
  //       method: 'get',
  //       url: 'https://jsonplaceholder.typicode.com/users',
  //       responseType: 'json'
  //     })
  //       .then(function (response) {
  //          TODO: récupérer nombre d'étapes validés bdd
          
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }
  //   fetchData();
  // },[])


  return(
    <section>
      <img className="logo" src={ Logo } alt="logo trente steps"/>
      <NumberChallenge />
      <div className="progress">
        <h4>Ma progression</h4>
        <Dechets />
        <StyleVie />
        <Maison />
        <Consommation />
        <Numerique />
        <button className="btn-to-progress"> <a href='/Progression'>Voir le détail des thèmes</a></button>
      </div>
    </section>
  )
}
export default Progess;