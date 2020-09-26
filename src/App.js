import React, { useEffect } from "react";
import Insta from "./Profile/Insta";
import "./App.scss";
import PageBackground from "./Profile/PageBackground";
import { auth } from "./config/firebase.config";
import { useAuthContext } from "./Profile/contexts/Auth.context";

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
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
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
