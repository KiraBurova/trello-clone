import '@testing-library/cypress/add-commands';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';
import { attachCustomCommands } from 'cypress-firebase';

import 'cypress-react-router/add-commands';

const projectId = Cypress.env('CYPRESS_FIREBASE_PROJECT_ID');
const apiKey = Cypress.env('CYPRESS_FIREBASE_API_KEY');

const config = {
  apiKey: apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  databaseURL: `https://${projectId}.firebaseio.com`,
  projectId: `${projectId}`,
  storageBucket: `${projectId}.appspot.com`,
};

firebase.initializeApp(config);

attachCustomCommands({ Cypress, cy, firebase });
