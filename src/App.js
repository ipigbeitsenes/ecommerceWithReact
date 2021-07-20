/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
 */


import React from 'react';
import {Switch,Route} from 'react-router-dom' 
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage  from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndsignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';


function App() {
return (
    <div>
     <Header />   
      <Switch>     
      <Route exact path='/' component={HomePage} />     
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component= {SignInAndsignUpPage} /> 
      </Switch>
    </div>
  );
}
export default App;
