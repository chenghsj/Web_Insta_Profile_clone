import React, { useContext } from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import PhotoList from "./PhotoList";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import { useStyles } from "./styles/lightStyles/InstaStyle";
import { useDarkStyles } from "./styles/darkStyles/darkInstaStyle";
import { ThemeContext } from "./contexts/Theme.context";
import SignModal from "./SignModal";

function Insta() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;

  return (
    <>
      <SignModal />
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
