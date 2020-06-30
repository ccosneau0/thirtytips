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
          // let todayTips = response.data[0];
          // console.log(todayTips);
          // setTodayTips(todayTips => [...todayTips]);
          // let listTips = todayTips.map(todayTip => 
          //   <li>
          //     { todayTip }
          //   </li>  
          // );
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, [])

  

  return (

    <ul>
      { todayTips }
    </ul>

  )
}

export default Tips;