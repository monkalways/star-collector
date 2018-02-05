import React from 'react';
import { Card } from 'semantic-ui-react';

import UserListItem from './UserListItem';

const UserList = ({ users }) => {
  return (
    <Card.Group itemsPerRow="2" doubling={true} stackable={true}>
      {users.map((user, index) => (<UserListItem key={index} {...user} />))}
    </Card.Group>
  );
}

export default UserList;