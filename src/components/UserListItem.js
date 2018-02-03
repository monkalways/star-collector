import React from 'react';
import { connect } from 'react-redux';
import { Card, Icon, Image, Rating, Star } from 'semantic-ui-react';
import { push } from 'react-router-redux';

const UserListItem = ({ id, name, stars, halfStar, image, handleClick }) => {
  const starArray = [];
  for (let i=0; i<stars; i++) {
    starArray.push('star');
  }
  const starExpression = stars > 1 ? 'stars' : 'star'
  const halfStarExpression = halfStar ? ' and a half' : '';

  return (
    <Card onClick={ () => handleClick(id) }>
      <Image src={image} />
      <Card.Content>
        <Card.Header>
          {name}
        </Card.Header>
        <Card.Description>
          { starArray.map((star, index) => (<Icon name="star" key={index} color="yellow" size="big" />)) }
          { halfStar ? (<Icon name="half star" color="yellow" size="big" />) : null }
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <span className='date'>
          {`${stars} ${starExpression} ${halfStarExpression}`}
        </span>
      </Card.Content>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => ({
  handleClick: (id) => dispatch(push(`/edit/${id}`))
})

export default connect(undefined, mapDispatchToProps)(UserListItem);