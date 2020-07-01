import React from 'react';
import './Dashboard.scss';
import '../../Component/Dashboard/SideBar/SideBar'
import SideBar from '../../Component/Dashboard/SideBar/SideBar';
import Challenge from '../../Component/Dashboard/Challenge/Challenge';
function Dashboard() {
  return (
    <div className="Dashboard">
      
      <div className="challenge-container">
        <Challenge></Challenge>
      </div>
      <div className="sidebar-container">
        <SideBar></SideBar>
      </div>
     
    </div>
  );
}

export default Dashboard;