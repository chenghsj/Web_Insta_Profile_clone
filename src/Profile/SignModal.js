import React, { useState } from "react";
import { useStyles } from "./styles/SignModalStyle";
import { useDarkTheme } from "./contexts/Theme.context";
import { auth } from "../config/firebase.config";
import { getModalStyle } from "./styles/reuseableStyle";
import { Button, Grid, Modal, TextField } from "@material-ui/core";
import ImageUpload from "./ImageUpload";
import { useAuthContext } from "./contexts/Auth.context";

export default function SimpleModal() {
  const { isDarkMode } = useDarkTheme();
  const classes = useStyles(isDarkMode);
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [{ user }, dispatch] = useAuthContext();
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({ displayName: username }).then(() => {
          dispatch({
            type: "SET_USER",
            user: {
              displayName: authUser.user.displayName,
              email: authUser.user.email,
              uid: authUser.user.uid,
            },
          });
        });
      })
      .catch((error) => alert(error.message));
    setOpenSignUp(false);
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error.message));
    setOpenSignIn(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <form>
        <Grid container direction="column" spacing={2}>
          {openSignUp && (
            <Grid item>
              <TextField
                fullWidth
                required
                id="standard-required"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
          )}
          <Grid item>
            <TextField
              fullWidth
              required
              id="standard-email-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              required
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              disableElevation
              type="submit"
              onClick={openSignUp ? signUp : signIn}
            >
              {openSignUp ? "Sign Up" : "Sign In"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
  return (
    <div>
      <div className={classes.loginContainer}>
        {user ? (
          <ImageUpload
            username={user.displayName}
            udi={user.uid}
            openUpload={openUpload}
            setOpenUpload={setOpenUpload}
          />
        ) : (
          <button
            className={classes.button}
            style={{ marginRight: "0.5rem" }}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              if (user) {
                setOpenUpload(true);
              } else {
                setOpenSignIn(true);
              }
            }}
          >
            Sign In
          </button>
        )}
        <button
          className={classes.button}
          type="button"
          onClick={(e) => {
            e.preventDefault();
            if (user) {
              auth
                .signOut()
                .then(() => {
                  console.log("Signed Out");
                  dispatch({ type: "STE_USER", user: null });
                })
                .catch((error) => error.message);
            } else {
              setOpenSignUp(true);
            }
          }}
        >
          {user ? "Logout" : "Sign Up"}
        </button>
      </div>
      <Modal
        open={openSignUp || openSignIn}
        onClose={() => {
          setOpenSignUp(false);
          setOpenSignIn(false);
        }}
      >
        {body}
      </Modal>
    </div>
  );
}
