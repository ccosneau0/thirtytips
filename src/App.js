import React from 'react';
import './App.css';
import UserInfo from './component/dashboard/UserInfo';
import Tips from './component/dashboard/Tips';
import DashArticle from './component/dashboard/DashArticle';
import ToKnow from './component/dashboard/ToKnow';
import Progress from './component/dashboard/Progress';


function App() {
  return (
    <div className="App">
      <section>
        <UserInfo />
        <ToKnow />
        <Tips />
        <DashArticle />
        <Progress />
      </section>
    </div>
  );
}


export default App;