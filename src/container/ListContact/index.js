import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Card, Button, Modal, Alert, Form, Label, Input, FormGroup} from 'reactstrap';
import axios from 'axios'

export default function ListContact() {

  const [listContact, setListContact]= useState([])

  const getData =async()=>{
    await axios.get(`https://simple-contact-crud.herokuapp.com/contact`)
    .then((res)=>{
      if (res.status === 200){
        console.log(res.data)
        setListContact(res.data)
      }
    })
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <Container className="container-list">
        <Row className="">
            <h1 className="text-center mt-5">List Contact</h1>
            {/* <Alert color="danger" isOpen={visible}>an error occurred while deleting contact</Alert> */}
        
          {listContact && listContact.data.map((value) => (
            <Col md={4} sm={1} key={value.id}>
              <Card className="container-list-contact">
                <div className="img-profile text-center">
                  <img className="rounded-circle" src={value.photo} />
                </div>
                <Row className="text-center mt-3">
                  <p className="contact-name">{value.firstName} {value.lastName}</p>
                  <p className="contact-age">{value.age}</p>
                </Row>
                <div className="text-center">
                  <Button color="danger" className="btn-delete">Delete</Button>{' '}
                  <Button color="warning" className="btn-edit">Update</Button>{' '}
                </div>
              </Card>
            </Col>
          ))}

            
        
        </Row>

      </Container>
    </>
  )
}
