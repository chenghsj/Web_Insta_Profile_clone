import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    backgroundColor: "rgba(255, 255, 255, 0)",
    padding: "2%"
  },
  gridListTile: {
    position: "relative",
    width: "30%",
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
