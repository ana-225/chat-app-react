import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from '../componentes/Login';
import ConversationsList from '../containers/ConversationsList';

function AppRouter() {

    return (
      <Router>
       <Switch>
          <Route  path='/chat' component={ConversationsList} />
          <Route exact path="/">
            <Login/> 
          </Route>
          {/* <Route path="*">
            console.log()
          </Route> */}
        </Switch>
      </Router>
    );
}
 
export default AppRouter;