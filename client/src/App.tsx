import React from 'react';
import Home from './components/Home';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.css';

const App: React.FC = () => {
  return (
    <div className="container">
      <header className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Simple app (React + .NET Core)</a>
        <Header />
      </header>
      <Home />
    </div>
  );
}

export default App;
