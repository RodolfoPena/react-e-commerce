import React, {useState, Component} from 'react'
import './index.css'
import {InputGroup, InputGroupAddon, Input, Button, Container, Row, Col} from 'reactstrap'

class ItemCount  extends Component {

    constructor(){
        super()
        this.state = {
            initial: 30,
            min:10,
            max: 50
        }
        this.AddNumberHandler = this.AddNumberHandler.bind(this)
        this.substractNumberHandler= this.substractNumberHandler.bind(this)
    }

    AddNumberHandler() {
        let initial = this.state.initial + 1
        let max = this.state.max
        if (initial <= max) {
            this.setState({initial})
        }  
    }

    substractNumberHandler() {
        let initial = this.state.initial - 1
        let min = this.state.min
        if (initial >= min){
            this.setState({initial})
        } 
    }

    render (){
        return (
            <div>
                <Container>
                <p className="lead">Comprando</p>
                <Row>
                    <Col md="4">
                    <p class="lean">Valor mínimo {this.state.min}, y valor máximo de {this.state.max}</p>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <Button 
                            color="danger"
                            onClick={this.substractNumberHandler}
                            >Restar</Button>
                        </InputGroupAddon>
                        <Input min={this.min} max={this.max} value={this.state.initial}></Input>
                        <InputGroupAddon addonType="append">
                            <Button 
                            color="success"
                            onClick={this.AddNumberHandler}
                            >Sumar</Button>
                        </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                </Container>
            </div> 
        )
    } 
}

export default ItemCount