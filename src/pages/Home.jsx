import React from 'react'
import NavBar from '../components/NavBar/index.jsx'
import './styles.css'
import {Jumbotron, Button, Container, Form, FormGroup, Label, Input, Row, Col} from 'reactstrap'



const Home = (props) => {

    return (
        <div>
            <NavBar/>
            <Container>
                <Row className="my-5">
                    <Col sm="12" md="4">
                        <Form className="p-3 bg-light shadow rounded form">
                            <FormGroup>
                                <Label>Username</Label>
                                <Input placeholder="Nombre de usuario"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input placeholder="Correo electrónico"></Input>
                            </FormGroup>
                            <FormGroup>
                                <Button className="btn btn-block btn-primary">Registrarse</Button>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col sm="12" md="8" className="text-right">
                        <h1 className="display-4">Hola {props.username}</h1>
                        <p className="lead">Invita un amigo y gana muchos descuentos</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
  }

  export default Home