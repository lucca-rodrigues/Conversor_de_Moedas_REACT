import React, {useState} from 'react';
import './App.css';
import {FaArrowRight} from 'react-icons/fa'
import {Jumbotron, Button, Form, Col, Spinner, Alert, Modal} from 'react-bootstrap';
import ListarMoedas from './ListarMoedas';
import axios from 'axios';

function App() {
  const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  const [valor, setValor] = useState('');
  const [moedaDe, setMoedaDe] = useState('BRL');
  const [moedaPara, setMoedaPara] = useState('USD');
  const [loading, setLoading] = useState(false);
  const [validationForm, setValidationForm] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [resultConvertion, setResultConvertion] = useState('');

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

  function CloseModal(e){
    setValor('');
    setMoedaDe('BRL');
    setMoedaPara('USD');
    setValidationForm(false);
    setShowModal(false);
    setLoading(false);
  }

  function handleSubmit(e){
    e.preventDefault();
    setLoading(true);
    setValidationForm(true);
    if(e.currentTarget.checkValidity() === true){
     setLoading(true);
      axios.get(FIXER_URL)
        .then(response => {
          const Coute = ResultConvertionValue(response.data)
          setResultConvertion(`${valor} ${moedaDe} = ${Coute} ${moedaPara}`);
          setShowModal(true);
          setLoading(false);
        })
    }
    function ResultConvertionValue(result){
      if(!result || result.success !== true){
        return false;
      }
      const resultDe = result.rates[moedaDe];
      const resultPara = result.rates[moedaPara];
      const Coute = (1 / resultDe * resultPara) * valor;
      return Coute.toFixed(2);
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
        <Modal show={showModal} onHide={CloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>
              Conversão
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {resultConvertion}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={CloseModal}>
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>
      
  );
}

export default App;
