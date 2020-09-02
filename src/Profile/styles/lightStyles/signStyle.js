import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  paper: {
    outline: "none",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "30%",
    [theme.breakpoints.down("xs")]: { width: "50%" },
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    opacity: 1,
    visibility: "visible",
  },
  loginContainer: {
    position: "absolute",
    top: "6vh",
    right: "11vw",
    width: "50%",
    height: "1.5rem",
    display: "flex",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      top: "1vh",
      right: "5vw",
      transform: "scale(0.9)",
    },
  },
  button: {
    background: "white",
    color: "black",
    // background: "#393939",
    // color: "white",
    borderRadius: "5px",
    border: "none",
    outline: "none",
    padding: "0.2rem 0.5rem",
    cursor: "pointer",
    boxShadow: "1px 1px 5px -2px",
    // boxShadow: "1px 1px 8px -2px black",
    marginLeft: "0.5rem",
    transition: "background 0.2s ease",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.85)",
      marginLeft: "0rem",
    },
    "&:hover": {
      background: "lightgray",
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
}));
