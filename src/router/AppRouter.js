import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../componentes/Login';
import PrivateRoute from '../componentes/PrivateRoute';
import ConversationsList from '../containers/ConversationsList';

function AppRouter() {

    return (
      <Router>
       <Switch>
          <Route exact path="/" component ={Login} />
          <PrivateRoute exact path='/chat' component={ConversationsList} />
          {/* <Route path="*">
            console.log()
          </Route> */}
        </Switch>
      </Router>
    );
}
 
export default AppRouter;