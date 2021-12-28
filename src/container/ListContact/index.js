import React, { useEffect, useState } from 'react'
import {Container, Row, Col, Card, Button, Modal, Alert, Form, Label, Input, FormGroup} from 'reactstrap';
import axios from 'axios'

export default function ListContact() {

  const [listContact, setListContact]= useState()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [age, setAge] = useState('')
  const [photo, setPhoto] = useState('')
  const [id, setId] = useState('')
  const [visible, setVisible] = useState(false);
  const [modal,setModal] = useState(false);


 

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

  const submit = (e) => {
    e.preventDefault();
    axios.put(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
      firstName,
      lastName,
      age,
      photo
    })
      .then((res) => {
        console.log(typeof res.status)
        if (res.status === 201) {
          getData()
          setModal(!modal)
        }
      }
      )
  }

  const toggle = (id) => {
    axios.get(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
    .then((res)=>{
      setFirstName(res.data.data?.firstName)
      setLastName(res.data.data?.lastName)
      setAge(res.data.data?.age)
      setPhoto(res.data.data?.photo)
      setId(res.data.data?.id)
      setModal(!modal)
    })
  };

  const deleteContact=(id)=>{
    axios.delete(`https://simple-contact-crud.herokuapp.com/contact/${id}`)
    .then((res)=>{
      console.log(res)
    })
    .catch(err =>{
      console.log(err)
      setVisible(true)
      setTimeout(()=>{
        setVisible(false)
      },3000)
    })
  
  }

  
  const close=()=>{
    setModal(!modal)
  }

  return (
    <>
      <Container className="container-list">
        <Row className="">
            <h1 className="text-center mt-5">List Contact</h1>
            <Alert color="danger" isOpen={visible}>an error occurred while deleting contact</Alert>
        
          {listContact && listContact.data.map((value) => (
            <Col md={4} sm={1} key={value.id}>
              <Card className="container-list-contact">
                <div className="img-profile text-center">
                  <img className="rounded-circle" src={value.photo} alt={value.firstName}/>
                </div>
                <Row className="text-center mt-3">
                  <p className="contact-name">{value.firstName} {value.lastName}</p>
                  <p className="contact-age">{value.age}</p>
                </Row>
                <div className="text-center">
                  <Button color="danger" className="btn-delete" onClick={()=>deleteContact(value.id)}>Delete</Button>{' '}
                  <Button color="warning" className="btn-edit" onClick={()=>toggle(value.id)}>Update</Button>{' '}
                </div>
              </Card>
            </Col>
          ))}

            
        
        </Row>

      </Container>

      {/* Modal */}
      {/* Modal for Update */}
      <Modal className="modal-update" isOpen={modal} toggle={toggle} backdrop="static" keyboard={false}>
          <h1 className="text-center">Edit Contact APP</h1>
        <Card className="card-update-contact-us">
          <Form >
            <FormGroup >
              <Label>Nama Depan</Label>
              <Input
                value={firstName}
                onChange={(e)=>setFirstName(e.target.value)}
                type="text"
                id="firstName"
                placeholder="Masukan nama depan anda" />
              {/* {formik.errors.firstName && <FormFeedback type="invalid">{formik.errors.firstName}</FormFeedback>} */}
            </FormGroup>

            <FormGroup>
              <Label>Nama Belakang</Label>
              <Input
                value={lastName}
                onChange={(e)=>setLastName(e.target.value)}

                type="text"
                id="lastName"
                placeholder="Masukan nama belakang anda" />
              {/* {formik.errors.lastName && <FormFeedback type="invalid">{formik.errors.lastName}</FormFeedback>} */}
            </FormGroup>

            <FormGroup >
              <Label>Usia</Label>
              <Input
                value={age}
                onChange={(e)=>setAge(e.target.value)}
               
                type="text"
                id="age"
                placeholder="Masukan usia anda" />
              {/* {formik.errors.age && <FormFeedback type="invalid">{formik.errors.age}</FormFeedback>} */}
            </FormGroup>

            <FormGroup >
              <Label>Foto</Label>
              <Input
                value={photo}
                onChange={(e)=>setPhoto(e.target.value)}
                type="text"
                id="photo"
                placeholder="Masukan url foto anda" />
              {/* {formik.errors.photo && <FormFeedback type="invalid">{formik.errors.photo}</FormFeedback>} */}
            </FormGroup>

            <div className="d-flex group-button justify-content-end mt-4">
              <Button className="btn-cancel" color="secondary" onClick={close}>Cancel</Button>
              <Button className="btn-submit" color="primary" onClick={submit} type="submit">Submit</Button>
            </div>
          </Form>
        </Card>
      </Modal>
    </>
  )
}
