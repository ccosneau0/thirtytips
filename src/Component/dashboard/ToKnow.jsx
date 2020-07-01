import React, { useState, useEffect, useContext } from 'react';
import DayContext from './UserInfo';

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
    <p>À savoir : { toKnow }</p>
  )
}
export default ToKnow;