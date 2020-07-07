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
          let todayTips = response.data[6].name;
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
      <h5 className="tips-title">Tips pour vous aider à réaliser votre defi du jour</h5>
    <ul className="tips">
      <li className="tips-content">
        <p className="tips-content-text">{ todayTips }</p>
      </li>
      <li className="tips-content">
        <p className="tips-content-text">{ todayTips }</p>
      </li>
      <li className="tips-content">
        <p className="tips-content-text">{ todayTips }</p>
      </li>
    </ul>
    </section>

  )
}

export default Tips;