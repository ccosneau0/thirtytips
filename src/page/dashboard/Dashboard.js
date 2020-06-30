import React from 'react';
import UserInfo from './component/dashboard/UserInfo';
import Tips from './component/dashboard/Tips';
import DashArticle from './component/dashboard/DashArticle';

const Dashboard = () => {
  return(
    <div className="Dashboard">
      <section>
        <UserInfo />
        <Tips />
        <DashArticle />
      </section>
    </div>
  )
}
export default Dashboard;