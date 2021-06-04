import { auth, provider, storage } from "../firebase/firebase";
import db from "../firebase/firebase";
import { GET_ARTICLES, SET_LOADING_STATUS, SET_USER } from "./actionTypes";

// set user
const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

// set activity loading
const setLoading = (status) => {
  return {
    type: SET_LOADING_STATUS,
    status: status,
  };
};

// sign user in functionality
const signInAPI = () => {
  return (dispatch) => {
    auth
      .signInWithPopup(provider) // display popup when user chooses to sign in with Google
      .then((payload) => dispatch(setUser(payload)))
      .catch((error) => console.log(error.message));
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
  };
};

// post media functionality
const postMediaAPI = (payload) => {
  return (dispatch) => {
    // set activity loading before image is updated on the UI
    dispatch(setLoading(true));
    // check for image or video
    if (payload.image !== "") {
      const uploadFunc = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);

      // uploading image
      uploadFunc.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}%`);

          // show progress bar in console when image is being uploaded
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        // handle post information in firebase database
        async () => {
          const downloadURL = await uploadFunc.snapshot.ref.getDownloadURL();

          // add information to database
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            content: payload.description,
          });

          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        content: payload.description,
      });

      dispatch(setLoading(false));
    }
  };
};

// show articles
const displayArticles = (payload) => {
  return {
    type: GET_ARTICLES,
    payload: payload,
  };
};

// fetch articles from database
const fetchArticlesAPI = () => {
  return (dispatch) => {
    let payload;

    db.collection("articles")
      .orderBy("actor.date", "desc") // sort in a descending manner according to the date
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch(displayArticles(payload));
      });
  };
};

export {
  signInAPI,
  getAuthDetails,
  signOutAPI,
  postMediaAPI,
  fetchArticlesAPI,
  setLoading,
  displayArticles,
};
