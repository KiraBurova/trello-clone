import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { CypressHistorySupport } from 'cypress-react-router';

import { Container } from './App.styles';

import { ROUTES } from './constants';

import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import Boards from './screens/Boards';
import Board from './screens/Board';
import Header from './components/Header';
import Footer from './components/Footer';

import ProtectedRoute from './components/ProtectedRoute';

import useAuth from './hooks/useAuth';

const App = () => {
  const { user } = useAuth();
  return (
    <Router>
      <CypressHistorySupport />
      <Header />
      <Container>
        <Switch>
          <Route exact path={ROUTES.SIGNUP}>
            <SignUp />
          </Route>
          <Route exact path={ROUTES.SIGNIN}>
            <SignIn />
          </Route>
          <ProtectedRoute user={user} exact path={ROUTES.BOARDS}>
            <Boards />
          </ProtectedRoute>
          <ProtectedRoute user={user} exact path={`${ROUTES.BOARD}/:id`}>
            <Board />
          </ProtectedRoute>
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
