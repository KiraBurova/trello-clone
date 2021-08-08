import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ROUTES } from './constants';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Dashboard from './screens/Dashboard';
import Header from './components/Header';

import ProtectedRoute from './components/ProtectedRoute';

import useAuth from './hooks/useAuth';

const App = () => {
  const { user } = useAuth();
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={ROUTES.ROOT}>
          <SignUp />
        </Route>
        <Route exact path={ROUTES.SIGNIN}>
          <SignIn />
        </Route>
        <ProtectedRoute user={user} exact path={ROUTES.DASHBOARD}>
          <Dashboard />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default App;