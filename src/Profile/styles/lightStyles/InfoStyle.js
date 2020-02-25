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
  avatarContainer: {
    position: "relative",
    width: "120px",
    height: "120px",
    marginLeft: "7%"
  },
  offCircle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    // backgroundColor: "#FAFAFA",
    background: "linear-gradient(90deg, #ee0979 0%,#ff6a00 100% )",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    animation: "$rotate 2s linear infinite",
    [theme.breakpoints.down("xs")]: {
      margin: 0
    }
  },
  innerCircle: {
    position: "absolute",
    top: "3.5%",
    left: "3.5%",
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
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)"
    },
    "25%": {
      transform: "rotate(90deg)"
    },
    "50%": {
      transform: "rotate(180deg)"
    },
    "75%": {
      transform: "rotate(270deg)"
    },
    "100%": {
      transform: "rotate(360deg)"
    }
  }
}));
