
import React from 'react'
// eslint-disable-next-line no-unused-vars
import { useState} from 'react'
import { useEffect } from 'react'
import Restaurantcard from './Restaurantcard'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch,useSelector } from 'react-redux';
import {restaurantList} from '../actions/restAction';

function Home() {
    
   // const [restaurantList,setrestaurantlist] = useState([])

    //async n await
    // async function fetchdata(){
    //      await fetch('/restaurants.json')
    //      .then(results=>results.json()
    //      .then(data=>{
    //       setrestaurantlist(data.restaurants)
    //      }))
    // }
   
const dispatch = useDispatch()
const result = useSelector(state=>state.restReducer)
let {restaurant} = result
console.log(restaurant);

useEffect(()=>{
   //fetchdata()
   dispatch(restaurantList())
},[])

//console.log(restaurantList);

  return (
   
    <Row>
         {
          restaurant.map(restaurant=>(
           <Col sm={12} md={6} lg={4} xl={3} className='py-3'>
            <Restaurantcard data={restaurant}/>
            </Col>
          ))
         }

    </Row>
   
  )
}

export default Home
