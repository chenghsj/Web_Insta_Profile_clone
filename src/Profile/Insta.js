/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import PhotoList from "./PhotoList";
import { Divider, Switch } from "@material-ui/core";
import { useStyles } from "./styles/InstaStyle";
import { useAuthContext } from "./contexts/Auth.context";
import { db } from "../config/firebase.config";
// import { AuthContext } from "./contexts/Auth.context";

function Insta() {
  const [{ user, isDark }, dispatch] = useAuthContext();
  const classes = useStyles(isDark);
<<<<<<< HEAD

=======
>>>>>>> 2678180e9e127e6ba727df6ce998edd5c75ab9b6
  return (
    <>
      <Switch
        checked={!!isDark}
        onChange={() => {
          dispatch({ type: "SET_THEME", isDark: !isDark });
          if (user) {
            db.collection(user?.displayName)
              .doc(user.uid)
              .update({ isDark: !isDark });
          }
        }}
        color="default"
        inputProps={{ "aria-label": "default checkbox" }}
        className={classes.toggle}
      />
      <div className={classes.container}>
        <Navbar />
        <Info />
        <Divider className={classes.divider} />
        <PhotoList Num={18} />
      </div>
    </>
  );
}

export default Insta;
