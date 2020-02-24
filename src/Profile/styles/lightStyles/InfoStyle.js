import { makeStyles } from "@material-ui/core/styles";

const backgroundColor = "#FAFAFA";

export const useStyles = makeStyles(theme => ({
  container: {
    marginTop: "1%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
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
    width: "93%",
    height: "93%",
    borderRadius: "50%",
    backgroundColor: backgroundColor,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  avatar: {
    width: "93%",
    height: "93%",
    border: "1px solid #d3d3d3"
  },

  info: {
    position: "relative",
    width: "50%",
    marginLeft: "-10%",
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
    outline: "none"
  },
  caretDown: {
    marginLeft: "0.5rem",
    border: "1px solid #b5b5b5",
    borderRadius: "4px",
    padding: "7px 10px",
    fontWeight: "600",
    cursor: "pointer",
    outline: "none"
  },
  more: {
    fontSize: "1rem",
    marginLeft: "1rem",
    cursor: "pointer"
  },
  followInfo: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& p": {
      marginRight: "10px"
    }
  }
}));
