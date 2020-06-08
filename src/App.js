import React from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Login from './Auth/Login';
import Dashboard from './Components/dashboard'


function App() {
  return (
    <BrowserRouter>
      <Route>
        <div className="App">
          <Route path="/" exact component={Login} />
          <Route path="/dashboard" exact component={Dashboard} />
        </div>
      </Route>
    </BrowserRouter>

  );
}

export default App;
