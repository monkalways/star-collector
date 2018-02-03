// EDIT_USER
export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
});

// SET_USERS
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});