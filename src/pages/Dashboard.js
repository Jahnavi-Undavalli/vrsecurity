import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = ({ users, roles }) => {
  const totalUsers = users.length;
  const activeUsers = users.filter(user => user.status === 'Active').length;
  const inactiveUsers = users.filter(user => user.status === 'Inactive').length;
  const totalRoles = roles.length;

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>
      <div className="overview">
        <div className="overview-card">
          <h3>Total Users</h3>
          <p>{totalUsers}</p>
        </div>
        <div className="overview-card">
          <h3>Active Users</h3>
          <p>{activeUsers}</p>
        </div>
        <div className="overview-card">
          <h3>Inactive Users</h3>
          <p>{inactiveUsers}</p>
        </div>
        
      </div>
      <div className="dashboard-actions">
        <Link to="/user-management">
          <button className="btn">Manage Users</button>
        </Link>
        <Link to="/role-management">
          <button className="btn">Manage Roles</button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
