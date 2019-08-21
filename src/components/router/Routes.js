import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import getfilmes from './getfilmes';
import index from './index';

function routes() {
  return (
    <BrowserRouter>
      <div>
        <Route path='/' exact component={index}/>
        <Route path='/ver-filmes' exact component={getfilmes}/>
      </div>
    </BrowserRouter>
  );
}

export default routes;
