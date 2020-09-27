import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../config/firebase.config";
import { useAuthContext } from "./contexts/Auth.context";

function PhotoList() {
  const [posts, setPosts] = useState([]);
  const [{ user }] = useAuthContext();
  const classes = useStyles(!!user);

  useEffect(() => {
    if (user?.displayName) {
      db.collection(user.displayName)
        .doc(user.uid)
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div className={classes.root}>
      {user ? (
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
          <h2>Sign Up and Upload Something</h2>
          <p>
            ( or try sign in with email: <strong>test@gmail.com</strong> with
            password: <strong>123456</strong> )
          </p>
          <p>This web is for testing. Do not use any real email.</p>
        </div>
      )}
    </div>
  );
}
export default PhotoList;

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: (user) => (user ? "flex-start" : "center"),
    width: "100%",
    left: (user) => (user ? "5%" : "5px"),
    [theme.breakpoints.down("xs")]: {
      left: "0 !important",
      justifyContent: "flex-start !important",
      padding: "0 3.3%",
    },
  },
  intro: {
    color: "#b2b2b2",
    position: "relative",
    left: "-5px",
    margin: "0 1rem",
  },
}));
