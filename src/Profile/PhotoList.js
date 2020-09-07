import React, { useState, useEffect, useContext } from "react";
import Photo from "./Photo";
import { makeStyles } from "@material-ui/core/styles";
import { db, auth } from "../config/firebase.config";
import { AuthContext } from "./contexts/Auth.context";

export default function PhotoList() {
  const [posts, setPosts] = useState([]);
  const { isAuth } = useContext(AuthContext);
  const classes = useStyles(!!isAuth);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        db.collection(authUser.displayName)
          .doc(authUser.uid)
          .collection("posts")
          .orderBy("timestamp", "desc")
          .onSnapshot((snapshot) => {
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                post: doc.data(),
              }))
            );
          });
      }
      return;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.root}>
      {isAuth ? (
        posts.map(({ post, id }, i) => (
          <Photo
            index={i}
            coverImage={post.coverImage}
            images={post.images}
            title={post.title}
            desc={post.description}
            key={id}
            id={id}
          />
        ))
      ) : (
        <div className={classes.intro}>
          <h2>Sign Up/In and Upload Something</h2>
          <p>The web is for testing. Do not use any real email.</p>
        </div>
      )}
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: (isAuth) => (isAuth ? "flex-start" : "center"),
    width: "100%",
    left: (isAuth) => (isAuth ? "5%" : "5px"),
    [theme.breakpoints.down("xs")]: {
      left: "3%",
    },
  },
  intro: {
    color: "#b2b2b2",
    position: "relative",
    left: "-5px",
    margin: "0 1rem",
  },
}));
