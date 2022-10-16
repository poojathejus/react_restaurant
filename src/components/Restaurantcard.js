/* eslint-disable no-unused-vars */
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

function Restaurantcard({data}) {
    console.log(data)
  return (
   <Link to={`restaurant/${data.id}`} style={{textDecoration:"none",color:'white'}}>
    <Card style={{ width: '20rem'}}>
      <Card.Img variant="top" src={data.photograph} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
         Cuisine :   {data.cuisine_type}
        </Card.Text>
        <Card.Text>
        Neighborhood : {data.neighborhood}
        </Card.Text>
        <Button variant="dark">View More</Button>
      </Card.Body>
    </Card>
   </Link>
  )
}

export default Restaurantcard
