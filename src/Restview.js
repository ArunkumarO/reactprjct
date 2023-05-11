import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { Col, ListGroup, Row } from 'react-bootstrap';
import Operatingtime from './Operatingtime';
import Review from './Review';

function Restview() {

    const [restlist,setRest]=useState([])
        //api to acces data
        const getData=async()=>{
            const result=await fetch('/restaurants.json')
            result.json().then(data=>setRest(data.restaurants))
        }
        const params=useParams()
console.log(params.id);
   const singleRest= restlist.find(i=>i.id==params.id)
console.log(singleRest);
        useEffect(()=>{
    getData()  
      },[])
    

  return (
    <>{
    singleRest?(

<Row>
  <Col lg={6} md={6}>
     <img className='w-75 container p-5' 
     src={singleRest.photograph}/>
  </Col>
  <Col lg={6} md={6}>
  <ListGroup className='pe-5'>
      <ListGroup.Item><h1 className='text-warning'>{singleRest.name}</h1></ListGroup.Item>
   
      <ListGroup.Item>Address<strong>{singleRest.address}</strong></ListGroup.Item>
      <ListGroup.Item>Neghbourhood{singleRest.neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cusin type {singleRest.cusine_type}</ListGroup.Item>
      <ListGroup.Item>
<Operatingtime  workingTime={singleRest.operating_hours}/>
<Review reviewlist={singleRest.reviews}/>
      </ListGroup.Item>
    </ListGroup>
  </Col>
</Row>
  ):""
    }
  </>

  )
}

export default Restview