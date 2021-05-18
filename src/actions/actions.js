import { auth, provider } from "../firebase/firebase";
import { SET_USER } from "./actionTypes";

// set user
const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

// sign user in functionality
const signInAPI = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider) // display popup when user chooses to sign in with Google
      .then((payload) => dispatch(setUser(payload)))
      .catch((error) => console.log(error.message));

    console.log("signing user in");
  };
};

// get user authentication details

const getAuthDetails = () => {
  return (dispatch) => {
    //   if user is authenticated, pass user information to the set user function declared above
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user));
      }
    });
  };
};

// sign user out functionality
const signOutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => dispatch(setUser(null)))
      .catch((error) => console.log(error.message));

    console.log("signing user out");
  };
};

export { signInAPI, getAuthDetails, signOutAPI };
