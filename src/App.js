import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <SignUp />
        </Route>
        <Route exact path='/signin'>
          <SignIn />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
