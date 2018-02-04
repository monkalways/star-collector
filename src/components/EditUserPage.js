import React from 'react';
import { connect } from 'react-redux';

import PageHeader from './PageHeader';
import { startEditUser } from '../actions/users';
import UserForm from './UserForm';

export const EditUserPage = ({ user, handleEditUser, history }) => {

  const onSubmit = (user) => {
      handleEditUser(user);
      history.push('/');
  };

  return (
      <div>
          <PageHeader>
              <h1>Edit User {user.name}</h1>
          </PageHeader>
          <UserForm
              user={user}
              onSubmit={onSubmit}
          />
      </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
      user: state.users.find(user => user.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => ({
  handleEditUser: (user) => dispatch(startEditUser(user.id, user))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);