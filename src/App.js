import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import NewSignUp from './components/NewSignUp';
import SignIn from './components/SignIn';
import Legal from './components/Legal';
import GlobalStlye from './styles/GlobalStyles';
import NewSignUp2 from './components/NewSignUp2';


function App() {
  return (

    <div className="App">

      
      <Route path='/'>
        <Header />
      </Route>
      <Route exact path='/'>
        <SignIn />
      </Route>
      <Route exact path='/newsignup'>
        <NewSignUp />
      </Route>
      <Route exact path='/newsignup2'>
        <NewSignUp2 />
      </Route>

      <Route exact path='/legal'>
        <Legal />
      </Route>
      
     
      <GlobalStlye />

    </div>

  );
}





const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(App);
