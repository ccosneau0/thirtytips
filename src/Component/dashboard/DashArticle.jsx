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
          let todayArticlesTitle = response.data[2].title;
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
    <article className="article">
      <h4 className="article-first">Articles susceptible de vous intérésser ...</h4>
      <div className="article-cards">
        <div className="article-card">
          <h3 className="article-title">
            { todayArticlesTitle }
          </h3>
          <p className="article-author">GreenPeace</p>
          <p className="article-content">
            { todayArticlesContent }
          </p>
          <button className="btn-to-article">Lire la suite</button>
        </div>
        <div className="article-card">
          <h3 className="article-title">
            { todayArticlesTitle }
          </h3>
          <p className="article-author">GreenPeace</p>
          <p className="article-content">
            { todayArticlesContent }
          </p>
          <button className="btn-to-article">Lire la suite</button>
        </div>
      </div>
      
    </article>
  )
}
export default DashArticle;