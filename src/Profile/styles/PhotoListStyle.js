import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: "1rem"
  },
  gridList: {
    display: "inline-block",
    width: "100%",
    height: "inherit",
    padding: "3rem"
  },
  // row: {
  //   position: "absolute",
  //   right: "1rem",
  //   margin: "0.5rem"
  // },
  // col: {
  //   marginBottom: "0.5rem"
  // },
  gridListTile: {
    position: "relative",
    width: "30%",
    // height: "237px",
    margin: "0.5rem",
    borderRadius: "7px",
    "&:after": {
      content: '""',
      display: "block",
      paddingBottom: "100%"
    },
    [theme.breakpoints.down("xs")]: {
      width: "45%"
    }
  },
  mask: {
    position: "absolute",
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "1rem",
    color: "white",
    backgroundColor: "black",
    borderRadius: "7px",
    opacity: 0,
    transition: "opacity 0.3s",
    "&:hover": {
      opacity: 0.8
    },
    "& p": {
      marginRight: "10px",
      marginLeft: "7px"
    }
  }
}));
