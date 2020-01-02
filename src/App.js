import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NewSignUp from './components/NewSignUp'
import SignIn from './components/SignIn'
import Legal from './components/Legal'
import GlobalStlye from './styles/GlobalStyles'
import Emergency from './components/Emergency'
import SearchConversations from './components/SearchConversations'
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
       <Route exact path='/' component={NewSignUp} />
       <Route path='/emergency-contact' component={Emergency} />
       <Route path='/legal' component={Legal} />

      <Switch>
        <PrivateRoute path='/conversations' component={SearchConversations} />
        <Route path='/welcome' component={SignIn} />
       
      </Switch>

      <GlobalStlye />

    </div>
  );
}





const mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {})(App);
