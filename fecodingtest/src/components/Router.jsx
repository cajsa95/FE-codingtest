import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import Restaurant from './Restaurant';

const Router = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/restaurant/:id' component={Restaurant} />
        </Switch>

    </BrowserRouter>
);

export default Router;