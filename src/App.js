import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Link, Switch } from 'react-router-dom'
import NewSignUp from './components/NewSignUp'
import SignIn from './components/SignIn'
import Legal from './components/Legal'
import GlobalStlye from './styles/GlobalStyles'
import Emergency from './components/Emergency'
import Header2 from './components/Header2'
import SearchConversations from './components/SearchConversations'



function App() {
  return (
    <div className="App">
       <Route exact path='/' component={NewSignUp} />
       <Route path='/welcome' component={SignIn} />
       <Route path='/emergency-contact' component={Emergency} />
       <Route path='/legal' component={Legal} />
        
      <Route path ='/loggedin/conversations'>
        <Header2 />
        <SearchConversations/>
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
