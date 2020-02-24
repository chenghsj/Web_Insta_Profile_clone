import { makeStyles } from "@material-ui/core/styles";

const backgroundColor = "#474747";
const fontColor = "white";

export const useDarkStyles = makeStyles(theme => ({
  container: {
    marginTop: "1%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    fontWeight: "250",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "7%"
    }
  },
  offCircle: {
    width: "120px",
    height: "120px",
    // backgroundColor: "#FAFAFA",
    background: "linear-gradient(90deg, #ee0979 0%,#ff6a00 100% )",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "7%",
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  },
  innerCircle: {
    width: "95%",
    height: "95%",
    borderRadius: "50%",
    backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: "91%",
    height: "91%",
    border: "1px solid #d3d3d3"
  },

  info: {
    position: "relative",
    width: "50%",
    marginLeft: "-10%",
    color: fontColor,
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  },
  nameBlock: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    height: "3rem",
    fontSize: "1.5rem",
    marginTop: "1rem",
    "& p": {
      marginRight: "2rem"
    }
  },
  followBtn: {
    marginLeft: "-1rem",
    border: "1px solid #b5b5b5",
    borderRadius: "4px",
    padding: "4px 5px",
    fontWeight: "600",
    fontSize: "1rem",
    cursor: "pointer",
    outline: "none",
    backgroundColor,
    color: fontColor
  },
  caretDown: {
    marginLeft: "0.5rem",
    border: "1px solid #b5b5b5",
    borderRadius: "4px",
    padding: "7px 10px",
    fontWeight: "600",
    cursor: "pointer",
    outline: "none",
    backgroundColor,
    color: fontColor
  },
  more: {
    fontSize: "1rem",
    marginLeft: "1rem",
    cursor: "pointer",
    color: fontColor
  },
  followInfo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: fontColor,
    "& p": {
      marginRight: "10px"
    }
  }
}));
