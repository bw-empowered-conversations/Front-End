import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Link } from 'react-router-dom'
import Header from './components/Header'
import NewSignUp from './components/NewSignUp'
import SignIn from './components/SignIn'
import Legal from './components/Legal'
import GlobalStlye from './styles/GlobalStyles'
import NewSignUp2 from './components/NewSignUp2'


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <NewSignUp/> */}
      {/* <NewSignUp2/> */}
       {/* <SignIn/> */}
      <Legal/> 
      <GlobalStlye/>
       
    </div>
  );
}



const mapStateToProps = (state) => {
  return {
    
  }
}

export default connect(mapStateToProps, {})(App);
