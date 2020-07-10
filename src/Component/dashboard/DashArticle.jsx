import React, { useState, useEffect } from "react";

const axios = require('axios');


const DashArticle = () => {

  let [ todayArticlesTitleOne, setTodayArticlesTitleOne ] = useState('');
  let [ todayArticlesAuthorOne, setTodayArticlesAuthorOne ] = useState('');
  let [ todayArticlesContentOne, setTodayArticlesContentOne ] = useState('');
  let [ todayArticlesLinkOne, setTodayArticlesLinkOne ] = useState('');
  let [ todayArticlesTitleTwo, setTodayArticlesTitleTwo ] = useState('');
  let [ todayArticlesAuthorTwo, setTodayArticlesAuthorTwo ] = useState('');
  let [ todayArticlesContentTwo, setTodayArticlesContentTwo ] = useState('');
  let [ todayArticlesLinkTwo, setTodayArticlesLinkTwo ] = useState('');

  useEffect( () => {
    async function fetchData() {
      let dataFetch = await axios({
        method: 'get',
        url: 'https://radiant-anchorage-47441.herokuapp.com/json/challenge',
        responseType: 'json'
      })
        .then(function (response) {
          let todayArticlesTitleOne = response.data[6].news[0].name;
          let todayArticlesAuthorOne = response.data[6].news[0].author;
          let todayArticlesContentOne = response.data[6].news[0].content;
          let todayArticlesLinkOne = response.data[6].news[0].link;
          setTodayArticlesTitleOne(todayArticlesTitleOne);
          setTodayArticlesAuthorOne(todayArticlesAuthorOne);
          setTodayArticlesContentOne(todayArticlesContentOne);
          setTodayArticlesLinkOne(todayArticlesLinkOne);
          let todayArticlesTitleTwo = response.data[6].news[1].name;
          let todayArticlesAuthorTwo = response.data[6].news[1].author;
          let todayArticlesContentTwo = response.data[6].news[1].content;
          let todayArticlesLinkTwo = response.data[6].news[1].link;
          setTodayArticlesTitleTwo(todayArticlesTitleTwo);
          setTodayArticlesAuthorTwo(todayArticlesAuthorTwo);
          setTodayArticlesContentTwo(todayArticlesContentTwo);
          setTodayArticlesLinkTwo(todayArticlesLinkTwo);
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
            { todayArticlesTitleOne }
          </h3>
          <p className="article-author">{ todayArticlesAuthorOne }</p>
          <p className="article-content">
            { todayArticlesContentOne }
          </p>
          <button className="btn-to-article"><a className="btn-to-article-text" href={ todayArticlesLinkOne }>Lire la suite</a></button>
        </div>
        <div className="article-card">
          <h3 className="article-title">
            { todayArticlesTitleTwo }
          </h3>
          <p className="article-author">{ todayArticlesAuthorTwo }</p>
          <p className="article-content">
            { todayArticlesContentTwo }
          </p>
          <button className="btn-to-article"><a className="btn-to-article-text" href={ todayArticlesLinkTwo }>Lire la suite</a></button>
        </div>
      </div>
      
    </article>
  )
}
export default DashArticle;