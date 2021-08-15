import firebase from '../lib/firebase.prod';
import firebaseApp from 'firebase/app';

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
  const { id, name } = boardData;
  return new Promise((resolve, reject) => {
    //:todo break up a little
    firebase
      .firestore()
      .collection('boards')
      .where('name', '==', name)
      .get()
      .then((value) => {
        if (value.docs.length) {
          reject('Board with this name already exists');
        } else {
          firebase
            .firestore()
            .collection('boards')
            .doc(id)
            .set(boardData)
            .then(() => {
              resolve();
            })
            .catch((error) => reject(error.message));
        }
      });
  });
};

export const getCreatedBoards = (userId) => {
  const boards = [];
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('boards')
      .where('userId', '==', userId)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          boards.push(doc.data());
          resolve(boards);
        });
      })
      .catch((error) => {
        reject(error.message);
      });
  });
};

export const createList = async (listData) => {
  const { boardId } = listData;
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('boards')
      .where('id', '==', boardId)
      .get()
      .then((value) => {
        if (value.docs.length) {
          firebase
            .firestore()
            .collection('boards')
            .doc(boardId)
            .update({
              lists: firebaseApp.firestore.FieldValue.arrayUnion(listData),
            })
            .then(() => {
              resolve();
            })
            .catch((error) => reject(error.message));
        }
      })
      .catch((error) => reject(error.message));
  });
};
