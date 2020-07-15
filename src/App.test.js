import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Teste do componente de listagem de moedas', () => {

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
