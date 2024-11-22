import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';


const App = () => {
  // Initialize users from localStorage or use default values
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers ? JSON.parse(storedUsers) : [
      { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' },
    ];
  });

  // Initialize roles from localStorage or use default values
  const [roles, setRoles] = useState(() => {
    const storedRoles = localStorage.getItem('roles');
    return storedRoles ? JSON.parse(storedRoles) : [
      { id: 1, name: 'Admin', permissions: ['Read', 'Write', 'Delete'] },
      { id: 2, name: 'User', permissions: ['Read'] },
    ];
  });

  // Save users to localStorage whenever users state changes
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  // Save roles to localStorage whenever roles state changes
  useEffect(() => {
    localStorage.setItem('roles', JSON.stringify(roles));
  }, [roles]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Dashboard users={users} roles={roles} />}
        />
        <Route
          path="/user-management"
          element={<UserManagement users={users} setUsers={setUsers} />}
        />
        <Route
          path="/role-management"
          element={<RoleManagement roles={roles} setRoles={setRoles} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
