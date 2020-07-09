import React, { useState, useEffect, useContext } from 'react';

const ToKnow = () => {
  
  const axios = require('axios');
  let [toKnow, setToKnow] = useState('');

  useEffect( () => {
    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://radiant-anchorage-47441.herokuapp.com/json/challenge',
        responseType: 'json'
      })
        .then(function (response) {
          toKnow = response.data[0].toKnow;
          setToKnow(toKnow);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, [])
  
  return(
    <section className="toknow">
      <p className="toknow-title">À savoir : <span className="toknow-title-black">{ toKnow }</span></p>
    </section>
  )
}
export default ToKnow;