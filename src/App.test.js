import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from 'axios';

describe('Teste do componente de listagem de moedas', () => {

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('deve simular conversão de moedas', async () =>{
    const { findByTestId, getByTestId } = render(<App />);
    axiosMock.get.mockResolvedValueOnce({
      data: {success: true, rates: { BRL: 4.000, USD: 750.29 }}
    });

    fireEvent.click(getByTestId('converter'));
    // Simula abertura do modal
    const modal = await findByTestId('modal')
    //Simula 1 Requisição na API
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    // Simula o resultado de uma conversão
    expect(modal).toHaveTextContent('1 BRL = 0.19 USD');
  });

});
