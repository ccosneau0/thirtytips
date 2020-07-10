import React, { useState, useEffect } from 'react';

const ConnectedUser = () => {

  const axios = require('axios');
  const [ name, setName ] = useState('');

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
          let name = response.data[8].name;
          setName(name);
          console.log(name);
        })
        .catch(function (error) { 
          console.log(error);
        });
    }
    getData();
  },[])

  return(
    <section>
      <p>
        { name }
      </p>
    </section>
  )
}

export default ConnectedUser;