import React, { useContext } from "react";
import Logo from "../Image/logo.js";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import { useStyles } from "./styles/lightStyles/NavbarStyle";
import { useDarkStyles } from "./styles/darkStyles/DarkNavbarStyle";
import { ThemeContext } from "../Profile/contexts/Theme.context";
// import classes from "./Nav.module.css";

function Navbar() {
  const { isDarkMode } = useContext(ThemeContext);
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;

  return (
    <Paper className={classes.container}>
      <div className={classes.Brand}>
        <Logo height="2rem" color={isDarkMode ? "white" : "black"} />
        <Divider orientation="vertical" className={classes.divider} />
        <h3 className={classes.title}>Cheng</h3>
      </div>
      <div className={classes.self}>
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon
            className={classes.icon}
            style={{ fontSize: "1.75rem" }}
          />
        </a>
        <a
          href="https://github.com/chenghsj"
          className={classes.icon}
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon
            className={classes.icon}
            style={{ fontSize: "1.45rem" }}
          />
        </a>
        <a href="mailto:chengjohnsonhs@gmail.com">
          <EmailIcon className={classes.icon} />
        </a>
      </div>
    </Paper>
  );
}

export default Navbar;
