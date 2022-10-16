
import React from 'react'
import { useState} from 'react'
import { useEffect } from 'react'
import {useParams} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestDetails() {
    
    const [restaurantlist,setrestaurantlist] = useState([])
    const params = useParams()

    // for madal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //for collapse
    const [open, setOpen] = useState(false);
        //async n await
    async function fetchdata(){
         await fetch('/restaurants.json')
         .then(results=>results.json()
         .then(data=>{
          setrestaurantlist(data.restaurants)
         })
         )
    }
  
   
useEffect(()=>{
  fetchdata()
},[])

// eslint-disable-next-line eqeqeq
const restaurant = restaurantlist.find(item=>item.id==params['id'])
console.log(restaurant)

  return (

      <>
      {
        restaurant?
    (<Row className='my-3'>
        <Col md={4}>
        <Image className='p-3' src={restaurant.photograph} fluid/>
        </Col>
        <Col md={8} className='p-3'>
        <ListGroup>
      <ListGroup.Item>
        <h2>{restaurant.name}</h2>
        <p>{restaurant.neighborhood}</p>
        </ListGroup.Item>        
      <ListGroup.Item>{restaurant.cuisine_type}</ListGroup.Item>
      <ListGroup.Item>{restaurant.address}</ListGroup.Item>
    </ListGroup>
    {/* operating Hours*/}
    <Button className='my-3' variant="dark" onClick={handleShow}>
    Operating Hours
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday:{restaurant.operating_hours['Monday']}</ListGroup.Item>
      <ListGroup.Item>Tuesday:{restaurant.operating_hours['Tuesday']}</ListGroup.Item>
      <ListGroup.Item>Wednesday:{restaurant.operating_hours['Wednesday']}</ListGroup.Item>
      <ListGroup.Item>Thursday:{restaurant.operating_hours['Thursday']}</ListGroup.Item>
      <ListGroup.Item>Friday:{restaurant.operating_hours['Friday']}</ListGroup.Item>
      <ListGroup.Item>Saturday:{restaurant.operating_hours['Saturday']}</ListGroup.Item>
      <ListGroup.Item>Sunday:{restaurant.operating_hours['Sunday']}</ListGroup.Item>

    </ListGroup>
        </Modal.Body>  
      </Modal>
      <br></br>
      {/* reviews */}
      <Button variant='dark'
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Click here to view the reviews
      </Button>
      <Collapse in={open}>
        <div className='py-3' id="example-collapse-text">
          {
            restaurant.reviews.map(item=>(
              <div>
                <h6>{item.name}:<span>({item.date})</span></h6>
                <p>Rating:{item.rating}</p>
                <p>Comments:{item.comments}</p>
              </div>
            ))
          }
        </div>
      </Collapse>
        </Col>
    </Row>):'null'
}
</>
  )
}

export default RestDetails
