import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: (isDark) => isDark && "#2a2a2a",
    position: "sticky",
    top: 0,
    left: 0,
    width: "calc(100%-5px)",
    height: "6%",
    borderRadius: 0,
    padding: "10px 20px",
    zIndex: 20,
    'theme.breakpoints.down("xs")': {
      padding: "10px",
    },
  },
  icon: {
    fontSize: "1.5rem",
    cursor: "pointer",
    color: (isDark) => (isDark ? "white" : "black"),
  },
  Brand: {
    display: "flex",
    alignItems: "center",
    width: "33%",
    color: (isDark) => (isDark ? "white" : "black"),
  },
  logo: {
    height: "2rem",
  },
  divider: {
    height: "2rem",
    width: 0,
    margin: "10px",
    border: (isDark) => `0.5px solid ${isDark ? "#fff" : "#565656"}`,
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
      'theme.breakpoints.down("xs")': {
        marginRight: "7px",
      },
    },
  },
}));
