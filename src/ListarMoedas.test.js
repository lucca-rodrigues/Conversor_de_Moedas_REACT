import React from 'react';
import ReactDOM from 'react-dom';
import List from './ListarMoedas';

describe('Teste do componente de listagem de moedas', () => {

  it('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

});
