import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import User from './users/pages/User';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlaces from './places/pages/UpdatePlaces';

function App() {

  return (
    <Router>
      {/* Now switch will stop at the first match and ignore the rest. */}
      <MainNavigation />
      <Switch>
        {/* exact is used to the user componet only show in / path  */}
        <Route path='/' exact>
          <User />
        </Route>
        <Route path='/places/new' exact>
          <NewPlace />
        </Route>
        <Route path='/:userId/places' exact>
          <UserPlaces />
        </Route>
        <Route path="/places/:placeId">
          <UpdatePlaces />
        </Route>
        {/* redirect is used to show when the path doesn't matches */}
        {/* Authentication: If user is not logged in → send them to /login. */}
        <Redirect to='/' />
      </Switch>
    </Router>
  )
}

export default App;
