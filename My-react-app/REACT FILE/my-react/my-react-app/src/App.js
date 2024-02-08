import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

import ILogin from './Pages/ILogin';
import ISignup from './Pages/ISignup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={ILogin} />
        <Route path="/signup" component={ISignup} />
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
