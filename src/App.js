import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './screens/SignUp';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <SignUp />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
