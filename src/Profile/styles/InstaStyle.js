import { makeStyles } from "@material-ui/core/styles";

export const styles = {};

export const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    width: "80vw",
    height: "80vh",
    background: (isDark) => (isDark ? "#393939" : "#FAFAFA"),
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.7)",
    borderRadius: "5px",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: (isDark) =>
        isDark
          ? "linear-gradient(0deg, #ee0979 0%,#ff6a00 100% )"
          : "linear-gradient(180deg, #36d1dc 0%,#5b86e5 100% )",
      height: "33%",
      borderRadius: "0px 5px 5px 0px",
      margin: "5px",
    },
    "&::-webkit-scrollbar-track": {
      borderLeft: (isDark) => `1px solid 
      ${isDark ? "#2a2a2a" : "#d6d6d7"}`,
      borderRadius: "0px 5px 5px 0px",
    },
    [theme.breakpoints.down("md")]: {
      width: "80vw",
    },
    [theme.breakpoints.down("xs")]: {
      width: "90vw",
      height: "90vh",
    },
  },
  divider: {
    margin: "2%",
    background: (isDark) => isDark && "#888888",
  },
  toggle: {
    position: "absolute",
    top: "5vh",
    [theme.breakpoints.down("xs")]: {
      top: "0",
      transform: "scale(0.8)",
      left: "4vw",
    },
  },
}));
