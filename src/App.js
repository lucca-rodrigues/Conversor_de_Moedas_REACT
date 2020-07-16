import React, {useState} from 'react';
import './App.css';
import {FaArrowRight} from 'react-icons/fa'
import {Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';
import ListarMoedas from './ListarMoedas';

function App() {
  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [loading, setLoading] = useState(false);
  const [validationForm, setValidationForm] = useState(false);

  function handleValue(e){
    setValor(e.target.value.replace(/\D/g, ''));
    // Replace é uma expressão regular que remove todos os dados não numéricos do Input e retora ele Vazio com /\D
    // caso utilizado o /\d ele inverte e exclui todos os numeros
  }

  function handleMoedaDe(e){
    setMoedaDe(e.target.value);
  }

  function handleMoedaPara(e){
    setMoedaPara(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setValidationForm(true);
    if(e.currentTarget.checkValidity() === true){
      
    }
  }
  
  return (
    <div>
      <h1>
        Conversor de Moedas
      </h1>
      <Alert variant="danger" show={false}>
        Erro ao obter os dados da conversão.
      </Alert>
      <Jumbotron>
        <Form onSubmit={handleSubmit} noValidate validated={validationForm}>
          <Form.Row>
            <Col sm="3">
              <Form.Control 
                placeholder="0"
                value={valor}
                onChange={handleValue}
                required
              />
            </Col>
            <Col sm="3">
              <Form.Control as="select"
                value={moedaDe}
                onChange={handleMoedaDe}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center">
              <FaArrowRight size={20}/>
            </Col>
            <Col sm="3">
              <Form.Control as="select"
                value={moedaPara}
                onChange={handleMoedaPara}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant="success" onClick={handleSubmit}>
                {loading && loading === true ?(<Spinner animation="border" size="sm"/>):(<span>Converter</span>)}
                
                
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
