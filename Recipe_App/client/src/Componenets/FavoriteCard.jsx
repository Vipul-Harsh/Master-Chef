import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const FavoriteCard = ({fav}) => {
  return (
	<div>
	  <Card style={{ width: '15rem' }}>
      <Card.Img  variant="top" src={fav.img} />
      <Card.Body>
        <Card.Title>{fav.desc}</Card.Title>
        <Card.Text>
         {fav.time}
{fav.serv}
        </Card.Text>
        <Button variant="primary" as={Link} to={`/makepage/${fav.id}`}>View Recipe</Button>
      </Card.Body>
    </Card>
	</div>
  );
}

export default FavoriteCard;
