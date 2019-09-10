import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import Login from './components/Login'; 
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">Simple app (React + .NET Core)</a>
        <Header />
      </header>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/login' component={Login} />
      </Switch>
    </div>
  );
}

export default App;
