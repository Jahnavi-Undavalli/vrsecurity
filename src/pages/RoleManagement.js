import React from 'react';
import Button from '../components/Button';
import './RoleManagement.css';

const RoleManagement = ({ roles, setRoles }) => {
  const togglePermission = (roleId, permission) => {
    setRoles(roles.map(role =>
      role.id === roleId
        ? {
            ...role,
            permissions: role.permissions.includes(permission)
              ? role.permissions.filter(p => p !== permission)
              : [...role.permissions, permission],
          }
        : role
    ));
  };

  const deleteRole = (roleId) => {
    setRoles(roles.filter(role => role.id !== roleId));
  };

  return (
    <div>
      <h2>Role Management</h2>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                {['Read', 'Write', 'Delete'].map(permission => (
                  <Button
                    key={permission}
                    className={`toggle-permission ${role.permissions.includes(permission) ? 'active' : ''}`}
                    onClick={() => togglePermission(role.id, permission)}
                  >
                    {role.permissions.includes(permission) ? `Remove ${permission}` : `Add ${permission}`}
                  </Button>
                ))}
                <Button
                  className="delete-role"
                  onClick={() => deleteRole(role.id)}
                >
                  Delete Role
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
