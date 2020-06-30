import React from 'react';
import './App.css';
import UserInfo from './component/dashboard/UserInfo';
import Tips from './component/dashboard/Tips';
import DashArticle from './component/dashboard/DashArticle';
import ToKnow from './component/dashboard/ToKnow';


function App() {
  return (
    <div className="App">
      <section>
        <UserInfo />
        <Tips />
        <ToKnow />
        <DashArticle />
      </section>
    </div>
  );
}


export default App;