import { makeStyles } from "@material-ui/core/styles";
import { paperStyle } from "./reuseableStyle";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "1%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "7%",
    },
  },
  avatarContainer: {
    position: "relative",
    width: "120px",
    height: "120px",
    marginLeft: "7%",
  },
  offCircle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    background: "linear-gradient(90deg, #ee0979 0%,#ff6a00 100% )",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "$rotate 2s linear infinite",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
    },
  },
  innerCircle: {
    position: "absolute",
    top: "3.5%",
    left: "3.5%",
    width: "93%",
    height: "93%",
    borderRadius: "50%",
    backgroundColor: (isDark) => (isDark ? "#474747" : "#FAFAFA"),
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  avatarRoot: {
    border: (isDark) => `1px solid ${isDark ? "#d3d3d3" : "#71716f"}`,
  },
  info: {
    wordBreak: "break-word",
    whiteSpace: "pre-wrap",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    position: "relative",
    width: "50%",
    marginLeft: "-10%",
    color: (isDark) => isDark && "white",
    [theme.breakpoints.down("xs")]: {
      margin: "0",
      width: "85%",
    },
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "25%": {
      transform: "rotate(90deg)",
    },
    "50%": {
      transform: "rotate(180deg)",
    },
    "75%": {
      transform: "rotate(270deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  profileIcon: {
    borderRadius: "20%",
    margin: "0.2rem",
    border: (isDark) => `1px solid ${isDark ? "white" : "black"}`,
    color: (isDark) => isDark && "white",
  },
  editIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameInputRoot: {
    width: "80% !important",
    fontSize: "1.5rem !important",
    color: (isDark) => `${isDark ? "lightgray" : "gray"} !important`,
  },
  infoInputRoot: {
    fontSize: "1rem !important",
    color: (isDark) => `${isDark ? "lightgray" : "gray"} !important`,
  },
  inputMultiline: {
    padding: "10px 0 2px !important",
    color: (isDark) => `${isDark ? "lightgray" : "gray"} !important`,
  },
  fileInput: {
    paddingBottom: "18.5px !important",
  },
  inputUnderline: {
    borderBottom: "thin solid #e7e7e7 !important",
  },
  paper: paperStyle(theme),
}));
