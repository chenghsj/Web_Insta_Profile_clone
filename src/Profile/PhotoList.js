import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import { makeStyles } from "@material-ui/core/styles";
import { db } from "../config/firebase.config";

export default function PhotoList({ Num }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("test").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          post: doc.data(),
        }))
      );
    });
    console.log("photoList");
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
      {posts.map(({ post, id }, i) => (
        <Photo
          index={i}
          imgURL={post.imgURL}
          title={post.title}
          desc={post.description}
          key={id}
          id={id}
        />
      ))}
    </div>
  );
}
