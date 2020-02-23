import { makeStyles } from "@material-ui/core/styles";

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
  avatar: {
    width: "90%",
    height: "90%",
    border: "2px solid #FAFAFA"
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
  follow: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& p": {
      marginRight: "10px"
    }
  }
}));
