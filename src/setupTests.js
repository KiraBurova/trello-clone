import '@testing-library/jest-dom/extend-expect';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const App = {
  authenticate: async (email, password) => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  },
};

export default App;
