import React, { useState, useEffect, useContext } from 'react';

const ToKnow = () => {
  
  const axios = require('axios');
  let [toKnow, setToKnow] = useState('');

  useEffect( () => {
    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments',
        responseType: 'json'
      })
        .then(function (response) {
          toKnow = response.data[0].body;
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