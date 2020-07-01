import React, { useState, useEffect } from "react";

const axios = require('axios');

const Tips = () => {

  let [ todayTips, setTodayTips ] = useState([]);

  useEffect( () => {
    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/comments',
        responseType: 'json'
      })
        .then(function (response) {
          let todayTips = response.data[0].body;
          setTodayTips(todayTips);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, [])

  

  return (
    <section>
      <h2>Tips pour vous aider à réaliser votre defi du jour</h2>
    <ul>
      <li>
      { todayTips }
      </li>
    </ul>
    </section>

  )
}

export default Tips;