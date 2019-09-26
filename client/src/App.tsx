import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Users from './components/Users';
import Login from './components/Login'; 
import Header from './components/Header';
import Board from './components/squares/Board';
import 'bootstrap/dist/css/bootstrap.css';
import TimePicker from './components/time/TimePicker';

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark" style={{marginBottom: '20px'}}>
        <a className="navbar-brand" href="/">Simple app (React + .NET Core)</a>
        <Header />
      </header>
      <Switch>
        <Route exact path='/' component={Users} />
        <Route path='/login' component={Login} />
        <Route path='/squares' component={Board} />
        <Route path='/time' component={TimePicker} />
      </Switch>
    </div>
  );
}

export default App;
