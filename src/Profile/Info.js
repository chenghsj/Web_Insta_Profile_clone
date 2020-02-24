import React from "react";
import Avatar from "@material-ui/core/Avatar";
import avatarUrl from "../Image/avatar";
import { useStyles } from "./styles/InfoStyle";

const randNum = () => Math.floor(Math.random() * 500);

function Head() {
  const classes = useStyles();
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
            <strong>{randNum()}</strong> posts
          </p>
          <p>
            <strong>{randNum()}</strong> followers
          </p>
          <p>
            <strong>{randNum()}</strong> following
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
