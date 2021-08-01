import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.ROOT}>
          <SignUp />
        </Route>
        <Route exact path={ROUTES.SIGNIN}>
          <SignIn />
        </Route>
        <Route exact path={ROUTES.DASHBOARD}>
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
