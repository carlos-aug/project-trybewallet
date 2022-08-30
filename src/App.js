import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <h1>Hello, TrybeWallet!</h1>
      <Route exact path="/" component={ Login } />
      <Route exact path="/carteira" component={ Header } />
    </div>
  );
}

export default App;
