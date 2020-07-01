import React, { useState, useEffect } from 'react';
import Dechets from './progress/Dechets';
import StyleVie from './progress/StyleVie';
import Maison from './progress/Maison';
import Consommation from './progress/Consommation';
import Numerique from './progress/Numerique';

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
      <h4>Ma progression</h4>
      <Dechets />
      <StyleVie />
      <Maison />
      <Consommation />
      <Numerique />
      <button>Voir le détail des thèmes</button>
    </section>
  )
}
export default Progess;