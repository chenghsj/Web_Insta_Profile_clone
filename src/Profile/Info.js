import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import avatarUrl from "../Image/IMG_5993.jpg";
import { useStyles } from "./styles/lightStyles/InfoStyle";
import { useDarkStyles } from "./styles/darkStyles/darkInfoStyle";
import { ThemeContext } from "./contexts/Theme.context";

function Head() {
  const { isDarkMode } = useContext(ThemeContext);
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;

  return (
    <div className={classes.container}>
      <div className={classes.avatarContainer}>
        <div className={classes.offCircle}></div>
        <div className={classes.innerCircle}>
          <Avatar className={classes.avatar} src={avatarUrl} />
        </div>
      </div>

      <div className={classes.info}>
        <div className={classes.nameBlock}>
          <h2>Hsiang-Sheng Cheng</h2>
        </div>
        <div>
          <p style={{ fontSize: "0.5rem", fontWeight: "bold" }}>
            2011-2015 東海大學工業工程與經營資訊學系 <br />
            2017-2020 成功大學工業設計研究所
          </p>
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
