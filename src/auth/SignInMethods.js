import { auth, provider, githubProvider, facebookProvider } from "./firebase";

const googleSignIn = () => {
  auth.signInWithPopup(provider).catch((error) => alert(error.message));
};

const githubSignIn = () => {
  auth.signInWithPopup(githubProvider).catch((error) => alert(error.message));
};

const facebookSignIn = () => {
  auth.signInWithPopup(facebookProvider).catch((error) => alert(error.message));
};

const signup = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

const login = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

const resetPassword = (email) => {
  return auth.sendPasswordResetEmail(email);
};

export {
  resetPassword,
  signup,
  login,
  facebookSignIn,
  githubSignIn,
  googleSignIn,
};
