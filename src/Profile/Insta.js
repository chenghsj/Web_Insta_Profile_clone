import React, { useContext } from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import PhotoList from "./PhotoList";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import { useStyles } from "./styles/InstaStyle";
import { useDarkStyles } from "./styles/darkStyles/darkInstaStyle";
import { ThemeContext } from "./contexts/Theme.context";

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
