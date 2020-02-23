import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    position: "sticky",
    top: 0,
    left: 0,
    width: "calc(100%-5px)",
    height: "6%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 0,
    padding: "10px 20px 10px 20px",
    zIndex: 20
  },
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  Brand: {
    display: "flex",
    alignItems: "center",
    width: "33%"
  },
  divider: {
    height: "2rem",
    width: 0,
    margin: "10px",
    border: "0.5px solid #565656"
  },
  title: {
    fontFamily: "Grand Hotel",
    fontSize: "1.5rem",
    cursor: "pointer"
  },
  self: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "33%",
    "& i": {
      marginRight: "10px"
    }
  },
  avatar: {
    height: "2rem",
    width: "2rem"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#ededed",
    marginLeft: 0,
    width: "30%",
    height: "70%",
    display: "flex",
    alignItems: "center"
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#8a8a8a"
  },
  inputRoot: {
    color: "#8a8a8a"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 6),
    transition: theme.transitions.create("width"),
    width: "100%"
  }
}));
