import React, { useState, useEffect, useContext } from "react";
import Photo from "./Photo";
import { makeStyles } from "@material-ui/core/styles";
import { db, auth } from "../config/firebase.config";
import { AuthContext } from "./contexts/Auth.context";

export default function PhotoList() {
  const [posts, setPosts] = useState([]);
  const { isAuth } = useContext(AuthContext);

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
  const useStyles = makeStyles((theme) => ({
    root: {
      position: "relative",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      width: "100%",
      left: "5%",
      [theme.breakpoints.down("xs")]: {
        left: "3%",
      },
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {isAuth &&
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
        ))}
    </div>
  );
}
