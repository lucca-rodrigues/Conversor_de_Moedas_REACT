import React, {useState} from 'react';
import './App.css';
import {FaArrowRight} from 'react-icons/fa'
import {Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';

function App() {
  
  return (
    <div>
      <h1>
        Conversor de Moedas
      </h1>
      <Alert variant="danger" show={false}>
        Erro ao obter os dados da conversão.
      </Alert>
      <Jumbotron>
        <Form>
          <Form.Row>
            <Col sm="3">
              <Form.Control 
                placeholder="0"
                value={1}
                required
              />
            </Col>
            <Col sm="3">
              <Form.Control as="select">

              </Form.Control>
            </Col>
            <Col sm="1">
              <FaArrowRight size={20}/>
            </Col>
            <Col sm="3">
              <Form.Control as="select">

              </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant="success" type="submit">
                <Spinner animation="border" size="sm"/>
                Converter
              </Button>
            </Col>
          </Form.Row>
        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              Conversão
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da conversão...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
      
  );
}

export default App;
