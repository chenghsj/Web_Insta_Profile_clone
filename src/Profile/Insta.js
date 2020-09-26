import React from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import PhotoList from "./PhotoList";
import { Divider, Switch } from "@material-ui/core";
import { useStyles } from "./styles/InstaStyle";
import { useDarkTheme } from "./contexts/Theme.context";
// import { AuthContext } from "./contexts/Auth.context";

function Insta() {
  const { isDarkMode, toggleTheme } = useDarkTheme();
  const classes = useStyles(isDarkMode);

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
