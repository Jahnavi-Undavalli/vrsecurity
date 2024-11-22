import React, { useState } from 'react';
import './UserManagement.css';

const UserManagement = ({ users, setUsers }) => {
  const [editingUserId, setEditingUserId] = useState(null);
  const [editForm, setEditForm] = useState({ name: '', role: '', status: '' });
  
  const [newUser, setNewUser] = useState({
    name: '',
    role: 'User',
    status: 'Active',
  });

  const startEditing = (user) => {
    setEditingUserId(user.id);
    setEditForm({ name: user.name, role: user.role, status: user.status });
  };

  const saveEdits = () => {
    setUsers(
      users.map((user) =>
        user.id === editingUserId
          ? { ...user, name: editForm.name, role: editForm.role, status: editForm.status }
          : user
      )
    );
    setEditingUserId(null);
  };

  const cancelEditing = () => {
    setEditingUserId(null);
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    const newUserWithId = { ...newUser, id: Date.now() }; // Add a unique ID to the new user
    setUsers([...users, newUserWithId]);
    setNewUser({ name: '', role: 'User', status: 'Active' }); // Reset the form
  };

  return (
    <div>
      <h2>User Management</h2>

      {/* Add New User Form */}
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="Enter user's name"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
          required
        />
        <select
          value={newUser.role}
          onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <select
          value={newUser.status}
          onChange={(e) => setNewUser({ ...newUser, status: e.target.value })}
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
        <button type="submit">Add User</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editingUserId === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    />
                  </td>
                  <td>
                    <select
                      value={editForm.role}
                      onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                    >
                      <option value="Admin">Admin</option>
                      <option value="User">User</option>
                    </select>
                  </td>
                  <td>
                    <select
                      value={editForm.status}
                      onChange={(e) => setEditForm({ ...editForm, status: e.target.value })}
                    >
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </td>
                  <td>
                    <button onClick={saveEdits}>Save</button>
                    <button onClick={cancelEditing}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.status}</td>
                  <td>
                    <button onClick={() => startEditing(user)}>Edit</button>
                    <button onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
