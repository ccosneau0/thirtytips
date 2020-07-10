import React from 'react';
import UserInfo from '../../Component/Dashboard/UserInfo';
import Tips from '../../Component/Dashboard/Tips';
import DashArticle from '../../Component/Dashboard/DashArticle';
import ToKnow from '../../Component/Dashboard/ToKnow';
import Progress from '../../Component/Dashboard/Progress';
import './Dashboard.scss';


const Dashboard = (props) => {

  let step = 0;

  return(
    <div className="Dashboard">
        <section className="dashboard-first">
          <UserInfo />
          <ToKnow />
          <Tips />
          <DashArticle />
        </section>
        <section className="dashboard-second">
          <Progress />
        </section>
    </div>
  )
}
export default Dashboard;