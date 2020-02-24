import { makeStyles } from "@material-ui/core/styles";

const backgroundColor = "#393939";

export const useDarkStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    height: "70vh",
    width: "90vw",
    backgroundColor,
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.7)",
    borderRadius: "5px",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px"
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(0deg, #ee0979 0%,#ff6a00 100% )",
      height: "33%",
      // border: "1px solid rgba(0,0,0,0)",
      // backgroundClip: "padding-box",
      borderRadius: "0px 5px 5px 0px",
      margin: "5px"
    },
    "&::-webkit-scrollbar-track": {
      borderLeft: "1px solid #2a2a2a",
      borderRadius: "0px 5px 5px 0px"
    }
  },
  divider: {
    margin: "2%",
    border: "0.01rem solid #888888"
  },
  toggle: {
    position: "absolute",
    top: "10vh",
    right: "4vw"
  }
}));
