import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function CadastroVideo() {
  return (
    <div>
      Página de Cadastro de Vídeo
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
  <Switch>
    <Route path="/" component={App} exact />
    <Route path="/cadastro/video" component={CadastroVideo} />
    <Route component={() => (<div>404 Error</div>)} />
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);