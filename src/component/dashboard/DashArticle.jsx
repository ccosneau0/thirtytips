import React, { useState, useEffect } from "react";

const axios = require('axios');


const DashArticle = () => {

  let [ todayArticlesTitle, setTodayArticlesTitle ] = useState('');
  let [ todayArticlesContent, setTodayArticlesContent ] = useState('');

  useEffect( () => {
    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts',
        responseType: 'json'
      })
        .then(function (response) {
          let todayArticlesTitle = response.data[0].title;
          let todayArticlesContent = response.data[0].body;
          setTodayArticlesTitle(todayArticlesTitle);
          setTodayArticlesContent(todayArticlesContent);
          console.log(todayArticlesTitle);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    fetchData();
  }, [])


  return(

    <article>
      <h3>
      { todayArticlesTitle }
    </h3>
    <p>
      { todayArticlesContent }
    </p>
    </article>

  )




}

export default DashArticle;