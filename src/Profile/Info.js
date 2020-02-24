import React, { useState, useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import avatarUrl from "../Image/avatar";
import { useStyles } from "./styles/lightStyles/InfoStyle";
import { useDarkStyles } from "./styles/darkStyles/darkInfoStyle";
import { ThemeContext } from "./contexts/Theme.context";

const randNum = () => Math.floor(Math.random() * 500);

function Head() {
  const theme = useContext(ThemeContext);
  const { isDarkMode } = theme;
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;
  // eslint-disable-next-line no-unused-vars
  const [state, setState] = useState({
    posts: randNum(),
    followers: randNum(),
    following: randNum()
  });
  const { posts, followers, following } = state;

  return (
    <div className={classes.container}>
      <div className={classes.offCircle}>
        <div className={classes.innerCircle}>
          <Avatar className={classes.avatar} src={avatarUrl} />
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.nameBlock}>
          <p>Lorem</p>
          <button className={classes.followBtn}>Flowing</button>
          <button className={`fas fa-caret-down ${classes.caretDown}`}></button>
          <i className={`fas fa-ellipsis-h ${classes.more}`}></i>
        </div>
        <div className={classes.followInfo}>
          <p>
            <strong>{posts}</strong> posts
          </p>
          <p>
            <strong>{followers}</strong> followers
          </p>
          <p>
            <strong>{following}</strong> following
          </p>
        </div>
        <div>
          <strong>Lorem dolor</strong>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quia
            sequi tempora! Nulla enim officia saepe quidem error, ad veritatis.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Head;
