import React from "react";
import Logo from "../Image/logo.js";
import { useStyles } from "./styles/NavbarStyle";
import SignModal from "./SignModal";
import { Paper } from "@material-ui/core";
import {
  GitHub as GitHubIcon,
  Email as EmailIcon,
  Facebook as FacebookIcon,
} from "@material-ui/icons";
import { useAuthContext } from "./contexts/Auth.context";

// import classes from "./Nav.module.css";

function Navbar() {
  const [{ isDark }] = useAuthContext();
  const classes = useStyles(isDark);

  return (
    <Paper
      square={true}
      style={{ background: isDark && "#2a2a2a" }}
      className={classes.container}
    >
      <div className={classes.Brand}>
        <Logo height="2rem" color={isDark ? "white" : "black"} />
        <div
          style={{
            borderLeft: `1px solid ${isDark ? "white" : "#565656"}`,
          }}
          className={classes.divider}
        />
        <h3 className={classes.title}>Cheng</h3>
      </div>
      <div className={classes.iconContainer}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            top: "2px",
          }}
        >
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
            <EmailIcon
              className={classes.icon}
              style={{ fontSize: "1.65rem" }}
            />
          </a>
        </div>
        <SignModal />
      </div>
    </Paper>
  );
}

export default Navbar;
