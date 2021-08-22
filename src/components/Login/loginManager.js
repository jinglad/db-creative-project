import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFramework = () =>
  firebase.initializeApp(firebaseConfig);

export const handleGoogleSignIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      const { displayName, photoURL, email } = res.user;
      const newUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
      };
      loginToken();
      return newUser;
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
    });
};

export const loginToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {
      // Handle error
    });
};

export const handleSignOut = () => {
  // console.log("sign out clicked");
  return firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("sign out successfull");
      const signedOutuser = {
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
      };
      return signedOutuser;
    })
    .catch((err) => {
      console.log(err);
    });
};
