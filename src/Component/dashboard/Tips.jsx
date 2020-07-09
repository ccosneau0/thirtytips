import React, { useState, useEffect } from "react";

const axios = require('axios');

const Tips = () => {

  let [ todayTipsOne, setTodayTipsOne ] = useState('');
  let [ todayTipsTwo, setTodayTipsTwo ] = useState('');
  let [ todayTipsThree, setTodayTipsThree ] = useState('');

  useEffect( () => {
    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://radiant-anchorage-47441.herokuapp.com/json/challenge',
        responseType: 'json'
      })
        .then(function (response) {
          let todayTipsOne = response.data[0].tips[0].content;
          setTodayTipsOne(todayTipsOne);
          let todayTipsTwo = response.data[0].tips[1].content;
          setTodayTipsTwo(todayTipsTwo);
          let todayTipsThree = response.data[0].tips[2].content;
          setTodayTipsThree(todayTipsThree);
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
        <p className="tips-content-text">{ todayTipsOne }</p>
      </li>
      <li className="tips-content">
        <p className="tips-content-text">{ todayTipsTwo }</p>
      </li>
      <li className="tips-content">
        <p className="tips-content-text">{ todayTipsThree }</p>
      </li>
    </ul>
    </section>

  )
}

export default Tips;