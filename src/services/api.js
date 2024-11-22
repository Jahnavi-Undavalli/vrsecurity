export const mockFetchUsers = () => {
    return [
      { id: 1, name: 'John Doe', role: 'Admin', status: 'Active' },
      { id: 2, name: 'Jane Smith', role: 'User', status: 'Inactive' }
    ];
  };
  
  export const mockCreateUser = (user) => {
    return { id: Date.now(), ...user };
  };
  
  export const mockDeleteUser = (id) => {
    return id;
  };
  