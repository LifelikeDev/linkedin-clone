import { auth, provider } from "../firebase/firebase";
import { SET_USER } from "./actionTypes";

// set user
const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

// init sign in popup
const signInAPI = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider)
      .then((payload) => dispatch(setUser(payload)))
      .catch((error) => alert(error.message));
  };
};

export { signInAPI };
