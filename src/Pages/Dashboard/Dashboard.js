import React from 'react';
import UserInfo from '../../Component/Dashboard/UserInfo';
import Tips from '../../Component/Dashboard/Tips';
import DashArticle from '../../Component/Dashboard/DashArticle';
import ToKnow from '../../Component/Dashboard/ToKnow';
import Progress from '../../Component/Dashboard/Progress';

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