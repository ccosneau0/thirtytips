import React from 'react';
import UserInfo from './component/dashboard/UserInfo';
import Tips from './component/dashboard/Tips';
import DashArticle from './component/dashboard/DashArticle';
import ToKnow from './component/dashboard/ToKnow';
import Progress from './component/dashboard/Progress';

const Dashboard = () => {
  return(
    <div className="Dashboard">
      <section>
        <UserInfo />
        <ToKnow />
        <Tips />
        <DashArticle />
        <Progress />
      </section>
    </div>
  )
}
export default Dashboard;