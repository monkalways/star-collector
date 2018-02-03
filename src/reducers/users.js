const usersDefaultState = [];

const usersReducer = (state = usersDefaultState, action) => {
  switch (action.type) {
    case 'EDIT_USER':
        return state.map(user => {
            if(user.id === action.id) {
                return {
                    ...user,
                    ...action.updates
                };
            } else {
                return user;
            }
        });
    case 'SET_USERS':
        return action.users;
    default:
        return state;
    }
};

export default usersReducer;