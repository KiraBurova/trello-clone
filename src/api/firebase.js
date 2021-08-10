import firebase from '../lib/firebase.prod';

export const signUp = (data) => {
  const { email, password } = data;

  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const userId = userCredentials.user.uid;
        const userData = { email, uid: userId };
        firebase
          .firestore()
          .collection('users')
          .doc(userId)
          .set(userData)
          .then(() => {
            resolve();
          })
          .catch((error) => reject(error.message));
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

export const signIn = (data) => {
  const { email, password } = data;

  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        resolve();
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

export const logOut = () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => resolve())
      .catch((error) => reject(error.message));
  });
};

export const createBoard = async (boardData) => {
  const { userId } = boardData;
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('boards')
      .doc(userId)
      .set(boardData, { marge: true })
      .then(() => {
        resolve();
      })
      .catch((error) => reject(error.message));
  });
};
