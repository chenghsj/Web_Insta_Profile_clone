import React, { createContext, useState, useEffect } from "react";
import { auth } from "../../config/firebase.config";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setIsAuth({
          displayName: authUser.displayName,
          email: authUser.email,
          uid: authUser.uid,
        });
      } else {
        setIsAuth(null);
      }
    });
    return () => {
      //perform some cleanup actions
      unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {props.children}
    </AuthContext.Provider>
  );
};
