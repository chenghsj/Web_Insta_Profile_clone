import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    height: "70vh",
    width: "90vw",
    background: "#FAFAFA",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.7)",
    borderRadius: "5px",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #36d1dc 0%,#5b86e5 100% )",
      height: "33%",
      borderRadius: "0px 5px 5px 0px",
      margin: "5px"
    },
    "&::-webkit-scrollbar-track": {
      borderLeft: "1px solid #d6d6d7",
      borderRadius: "0px 5px 5px 0px"
    }
  },
  divider: {
    margin: "2%"
  },
  toggle: {
    position: "absolute",
    top: "10vh",
    right: "4vw"
  }
}));
