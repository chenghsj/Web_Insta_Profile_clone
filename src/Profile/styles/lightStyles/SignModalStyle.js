import { makeStyles } from "@material-ui/core/styles";
import { styles as infoStyles } from "./InfoStyle";

export const styles = {
  loginContainer: {
    height: "1.5rem",
    display: "flex",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    'theme.breakpoints.down("xs")': {
      transform: "scale(0.9)",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
    },
  },
  button: {
    background: " #191919",
    color: "white",
    height: "100%",
    width: "max-content",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    transition: "all 0.2s ease",
    'theme.breakpoints.down("xs")': {
      transform: "scale(0.85)",
      marginRight: 0,
    },
    "&:hover": {
      transform: "scale(1.1)",
    },
    "&:active": {
      boxShadow: "none",
      top: "calc(6vh + 1px)",
      right: "calc(11vw - 1px)",
    },
  },
  btnText: {
    textTransform: "none",
  },
};

export const useStyles = makeStyles((theme) => ({
  paper: {
    ...infoStyles.paper,
    [theme.breakpoints.down("xs")]: {
      ...infoStyles.paper[theme.breakpoints.down("xs")],
    },
    backgroundColor: infoStyles.paper.backgroundColor(theme),
    boxShadow: infoStyles.paper.boxShadow(theme),
    padding: infoStyles.paper.padding(theme),
  },
  loginContainer: {
    ...styles.loginContainer,
    [theme.breakpoints.down("xs")]: {
      ...styles.loginContainer['theme.breakpoints.down("xs")'],
    },
  },
  button: {
    ...styles.button,
    [theme.breakpoints.down("xs")]: {
      ...styles.button['theme.breakpoints.down("xs")'],
    },
  },
  btnText: {
    ...styles.btnText,
  },
}));
