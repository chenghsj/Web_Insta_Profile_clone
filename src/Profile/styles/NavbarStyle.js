import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: (isDark) => isDark && "#2a2a2a",
    position: "sticky",
    top: 0,
    left: 0,
    width: "calc(100%-5px)",
    height: "6%",
    borderRadius: 0,
    padding: "10px 20px",
    zIndex: 20,
    [theme.breakpoints.down("xs")]: {
      padding: "10px",
    },
  },
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: (isDark) => (isDark ? "white" : "black"),
  },
  Brand: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    width: "33%",
    color: (isDark) => (isDark ? "white" : "black"),
    "& $divider": {
      width: 0,
      height: "80%",
      margin: "0.5rem",
      // border: (isDark) => `0.5px solid ${isDark ? "#fff" : "#565656"}`,
    },
  },
  divider: {},
  logo: {
    height: "2rem",
  },
  title: {
    fontFamily: "Grand Hotel",
    fontSize: "1.5rem",
    fontWeight: (isDark) => isDark && 400,
    color: (isDark) => isDark && "white",
  },
  iconContainer: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    width: "33%",
    "& a": {
      marginRight: "10px",
      [theme.breakpoints.down("xs")]: {
        marginRight: "7px",
      },
    },
  },
}));
