import React from 'react';
import ReactDOM from 'react-dom';
import List from './App';

describe('Teste componente de conversão de moedas', () => {

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
