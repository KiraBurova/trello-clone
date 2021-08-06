const mockFirebase = {
  auth: jest.fn(() => mockFirebase),
  signInWithEmailAndPassword: jest.fn(() => Promise.resolve('fakeResponse')),
};

export default mockFirebase;
