import React from 'react';
import './Dashboard.scss';
import '../../Component/SideBar/SideBar'
import SideBar from '../../Component/SideBar/SideBar';
import Challenge from '../../Component/Challenge/Challenge';
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