import React, { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { auth } from "../config/firebase.config";
import { useStyles } from "./styles/lightStyles/signStyle";
import ImageUpload from "./ImageUpload";

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

export default function SimpleModal() {
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openUpload, setOpenUpload] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
    return () => {
      //perform some cleanup actions
      unsubscribe();
    };
  }, [user, username]);

  const signUp = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        return authUser.user.updateProfile({ displayName: username });
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
          {openSignUp ? (
            <Grid item>
              <TextField
                fullWidth
                required
                id="standard-required"
                label="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
          ) : null}
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
              classes={{ root: classes.btnText }}
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
        {user?.displayName ? (
          <ImageUpload
            username={user.displayName}
            openUpload={openUpload}
            setOpenUpload={setOpenUpload}
          />
        ) : (
          <button
            className={classes.button}
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
              auth.signOut();
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
