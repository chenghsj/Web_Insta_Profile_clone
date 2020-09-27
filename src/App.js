import React, { useEffect } from "react";
import Insta from "./Profile/Insta";
import "./App.scss";
import PageBackground from "./Profile/PageBackground";
import { auth } from "./config/firebase.config";
import { useAuthContext } from "./Profile/contexts/Auth.context";
import { db } from "./config/firebase.config";

function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{}, dispatch] = useAuthContext();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: {
            displayName: authUser.displayName,
            email: authUser.email,
            uid: authUser.uid,
          },
        });
        dispatch({
          type: "SET_THEME",
          isDark: db
            .collection(authUser.displayName)
            .doc(authUser.uid)
            .get()
            .then((doc) => doc.data().isDark),
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
        dispatch({
          type: "SET_Theme",
          isDark: false,
        });
      }
    });
    return () => {
      //perform some cleanup actions
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <PageBackground></PageBackground>
      <Insta />
    </div>
  );
}

export default App;
