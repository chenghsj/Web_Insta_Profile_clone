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
        <Avatar className={classes.avatar} src={avatarUrl} />
      </div>
      <div className={classes.info}>
        <div className={classes.nameBlock}>
          <p>Lorem</p>
          <button
            style={{
              marginLeft: "-1rem",
              border: "1px solid #b5b5b5",
              borderRadius: "4px",
              padding: "4px 5px",
              fontWeight: "600",
              fontSize: "1rem",
              cursor: "pointer"
            }}
          >
            Flowing
          </button>
          <button
            class="fas fa-caret-down"
            style={{
              marginLeft: "0.5rem",
              border: "1px solid #b5b5b5",
              borderRadius: "4px",
              padding: "7px 10px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          ></button>
          <i
            class="fas fa-ellipsis-h"
            style={{
              fontSize: "1rem",
              marginLeft: "1rem",
              cursor: "pointer"
            }}
          ></i>
        </div>
        <div className={classes.follow}>
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
