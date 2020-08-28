import { makeStyles } from "@material-ui/core/styles";

export const styles = {
  container: {
    position: "relative",
    width: "1000px",
    height: "80vh",
    background: "#FAFAFA",
    boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.7)",
    borderRadius: "5px",
    overflowY: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #36d1dc 0%,#5b86e5 100% )",
      height: "33%",
      borderRadius: "0px 5px 5px 0px",
      margin: "5px",
    },
    "&::-webkit-scrollbar-track": {
      borderLeft: "1px solid #d6d6d7",
      borderRadius: "0px 5px 5px 0px",
    },
  },
  themeWidth: {
    md: { width: "80vw" },
    xs: { width: "90vw", height: "90vh" },
  },
  divider: {
    margin: "2%",
  },
  themeToggle: {
    top: "0",
    transform: "scale(0.9)",
    left: "5%",
  },
  toggle: {
    position: "absolute",
    top: "5vh",
  },
};

export const useStyles = makeStyles((theme) => ({
  container: {
    ...styles.container,
    [theme.breakpoints.down("md")]: {
      ...styles.themeWidth.md,
    },
    [theme.breakpoints.down("xs")]: {
      ...styles.themeWidth.xs,
    },
  },
  divider: { ...styles.divider },
  toggle: {
    ...styles.toggle,
    [theme.breakpoints.down("xs")]: {
      ...styles.themeToggle,
    },
  },
}));
