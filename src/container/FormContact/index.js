import React, { useState } from 'react'
import { 
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Col,
  Row,
  Card,
  CardBody, Button } from 'reactstrap'
import axios from 'axios'

export default function FormContact() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [photo, setPhoto] = useState('')

  const handleSubmit=async (e)=>{
    e.preventDefault()

    const data ={firstName, lastName, age, photo}
 
    axios.post("https://simple-contact-crud.herokuapp.com/contact",data)
      .then(res=>{
        if(res.status === 201){
          setFirstName("")
          setLastName("")
          setAge("")
          setPhoto("")
        }
      })
      .catch(error=>{console.log(error)})

    console.log('submit')
  }

  return (
    <>
      <Container>
        <Row className='justify-content-md-center'>
          <Col md="4">
            <Card className='mt-5'>
              <CardBody>
                <h3>Form Contact</h3>
                <Form onSubmit={handleSubmit}>
                  <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      placeholder="enter first name"
                      type="text"
                      value={firstName}
                      onChange={(e)=>setFirstName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      placeholder="with a placeholder"
                      type="text"
                      value={lastName}
                      onChange={(e)=>setLastName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="age">Age</Label>
                    <Input
                      id="age"
                      name="age"
                      placeholder="with a placeholder"
                      type="number"
                      value={age}
                      onChange={(e)=>setAge(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="photo">Photo</Label>
                    <Input
                      id="photo"
                      name="photo"
                      placeholder="with a placeholder"
                      type="text"
                      value={photo}
                      onChange={(e)=>setPhoto(e.target.value)}
                    />
                  </FormGroup>

                  <Button block color='info' >Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
