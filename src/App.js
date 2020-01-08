import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import NewSignUp from './components/NewSignUp'
import SignIn from './components/SignIn'
import Legal from './components/Legal'
import GlobalStlye from './styles/GlobalStyles'
import Emergency from './components/Emergency'
import SearchConversations from './components/SearchConversations'
import PrivateRoute from './components/PrivateRoute';
import UserProfile from './components/UserProfile';
import ModalConversationTopic from './components/ModalConversationTopic'


function App() {
  return (
    <div className="App">
       <Route exact path='/' component={NewSignUp} />
       <Route path='/emergency-contact' component={Emergency} />
       <Route path='/legal' component={Legal} />
       <Route path='/user-profile' component={UserProfile} />

      <Switch>
        <PrivateRoute path='/conversations' component={SearchConversations} />
        <Route path='/welcome' component={SignIn} />
       
      </Switch>

      <Route exact  path='/loggedin/conversations/Topic' component={ModalConversationTopic} />
      <Route exact  path='/loggedin/conversations' component={SearchConversations} />

      <GlobalStlye />

    </div>
  );
}



export default App;
