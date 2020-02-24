import React, { useContext } from "react";
import Avatar from "@material-ui/core/Avatar";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import avatarUrl from "../Image/avatar";
import { useStyles } from "./styles/lightStyles/NavbarStyle";
import { useDarkStyles } from "./styles/darkStyles/DarkNavbarStyle";
import { ThemeContext } from "../Profile/contexts/Theme.context";
// import classes from "./Nav.module.css";

function Navbar() {
  const theme = useContext(ThemeContext);
  const { isDarkMode } = theme;
  const light = useStyles();
  const dark = useDarkStyles();
  const classes = isDarkMode ? dark : light;

  return (
    <Paper className={classes.container}>
      <div className={classes.Brand}>
        <i className={`${classes.icon} fab fa-instagram`}></i>
        <Divider orientation="vertical" className={classes.divider} />
        <h3 className={classes.title}>Instagram</h3>
      </div>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          inputProps={{ "aria-label": "search" }}
        />
      </div>
      <div className={classes.self}>
        <i className={`${classes.icon} far fa-compass`}></i>
        <i className={`${classes.icon} far fa-heart`}></i>
        <Avatar className={classes.avatar} src={avatarUrl} />
      </div>
    </Paper>
  );
}

export default Navbar;
