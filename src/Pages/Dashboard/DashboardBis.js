import React from 'react';
import './Dashboard.scss';
import '../../component/SideBar/SideBar'
import SideBar from '../../component/SideBar/SideBar';
import Challenge from '../../component/Challenge/Challenge';
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