import database from '../firebase/firebase';

// EDIT_USER
export const editUser = (id, updates) => ({
  type: 'EDIT_USER',
  id,
  updates
});

// START_EDIT_USER
export const startEditUser = (id, updates) => {
  return (dispatch, getState) => {
      const { uid } = getState().auth;
      return database.ref(`users/${id}`).update(updates).then(() => {
          dispatch(editUser(id, updates));
      });
  };
};

// SET_USERS
export const setUsers = (users) => ({
  type: 'SET_USERS',
  users
});

// START_SET_USERS
export const startSetUsers = () => {
  return (dispatch, getState) => {
      const { uid } = getState().auth;
      return database.ref('users').once('value').then( snapshot => {
          const users = [];
          snapshot.forEach(childSnapshot => {
              users.push({
                  id: childSnapshot.key,
                  ...childSnapshot.val()
              });
          });
          dispatch(setUsers(users));
      });
  };
};