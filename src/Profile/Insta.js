import React, { useContext } from "react";
import Navbar from "./Navbar";
import Info from "./Info";
import PhotoList from "./PhotoList";
import Divider from "@material-ui/core/Divider";
import Switch from "@material-ui/core/Switch";
import { useStyles } from "./styles/InstaStyle";
import { ThemeContext } from "./contexts/Theme.context";
// import { AuthContext } from "./contexts/Auth.context";

function Insta() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  // const { isAuth } = useContext(AuthContext);
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
        {/* {isAuth ? (
          <> */}
        <Info />
        <Divider className={classes.divider} />
        <PhotoList Num={18} />
        {/* </>
        ) : null} */}
      </div>
    </>
  );
}

export default Insta;
