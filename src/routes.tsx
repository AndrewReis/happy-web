import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanegesMap from './pages/OrphanegesMap';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/orphanagesMap" component={OrphanegesMap} />
    </Switch>
  </BrowserRouter>
  )

export default Routes;
