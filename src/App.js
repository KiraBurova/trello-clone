import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

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
      </Switch>
    </Router>
  );
};

export default App;
