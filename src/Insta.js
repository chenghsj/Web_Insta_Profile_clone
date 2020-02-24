import React, { useContext } from "react";
import Navbar from "./Profile/Navbar";
import Info from "./Profile/Info";
import PhotoList from "./Profile/PhotoList";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import { useStyles } from "./Profile/styles/InstaStyle";
import { useDarkStyles } from "./Profile/styles/darkStyles/darkInstaStyle";
import { ThemeContext } from "./Profile/contexts/Theme.context";

function Insta() {
  const theme = useContext(ThemeContext);
  const { isDarkMode, toggleTheme } = theme;
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;

  return (
    <>
      <Switch
        onChange={toggleTheme}
        color="default"
        inputProps={{ "aria-label": "default checkbox" }}
        className={classes.toggle}
      />
      <div className={classes.container}>
        <Navbar />
        <Info />
        <Divider className={classes.divider} />
        <PhotoList Num={18} />
      </div>
    </>
  );
}

export default Insta;
