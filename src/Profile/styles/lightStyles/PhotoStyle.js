import { makeStyles } from "@material-ui/core/styles";

export const styles = {
  root: {
    position: "relative",
    width: "29%",
    margin: "0.3rem",
    borderRadius: "7px",
    transition: "transform 0.3s",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "50% 50%",
    "&:after": {
      content: '""',
      display: "block",
      paddingBottom: "100%",
    },
    "&:hover": {
      transform: "scale(0.95)",
    },
    themeBreakpoints: {
      xs: { width: "44%" },
    },
  },
  filterNoneIcon: {
    position: "absolute",
    right: 0,
    margin: "0.5rem",
    color: "black",
    opacity: 0.5,
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
      opacity: 0.5,
    },
    "& p": {
      marginRight: "10px",
      marginLeft: "7px",
    },
  },
  lightBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    opacity: 0,
    zIndex: -1,
    // opacity: 1,
    // zIndex: 100,
    transition: "opacity 0.3s",
    "&$active": {
      opacity: 1,
      zIndex: 100,
    },
  },
  lightBoxContainer: {
    display: "inline-block",
    position: "relative",
    width: "40%",
    height: "85%",
    backgroundColor: "white",
    borderRadius: "5px",
    color: "black",
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "linear-gradient(180deg, #36d1dc 0%,#5b86e5 100% )",
      borderRadius: "0px 5px 5px 0px",
      margin: "5px",
    },
    "&::-webkit-scrollbar-track": {
      borderLeft: "1px solid #d6d6d7",
      borderRadius: "0px 5px 5px 0px",
    },
    themeBreakpoints: {
      md: { width: "50%" },
      sm: { width: "60%" },
      xs: { width: "70%" },
    },
  },
  lightBoxImg: {
    position: "relative",
    top: 0,
    width: "100%",
    backgroundSize: "contain",
    "&:after": {
      content: '""',
      display: "block",
      paddingBottom: "100%",
    },
  },
  lightBoxTitle: {
    margin: "1rem",
  },
  lightBoxDesc: {
    margin: "1rem",
  },
};

export const useStyles = makeStyles((theme) => ({
  root: {
    ...styles.root,
    [theme.breakpoints.down("xs")]: {
      ...styles.root.themeBreakpoints.xs,
    },
  },
  filterNoneIcon: {
    ...styles.filterNoneIcon,
  },
  mask: {
    ...styles.mask,
  },
  lightBox: {
    ...styles.lightBox,
  },
  active: {},
  lightBoxContainer: {
    ...styles.lightBoxContainer,
    [theme.breakpoints.down("md")]: {
      ...styles.lightBoxContainer.themeBreakpoints.md,
    },
    [theme.breakpoints.down("sm")]: {
      ...styles.lightBoxContainer.themeBreakpoints.sm,
    },
    [theme.breakpoints.down("xs")]: {
      ...styles.lightBoxContainer.themeBreakpoints.xs,
    },
  },
  lightBoxImg: {
    ...styles.lightBoxImg,
  },
  lightBoxTitle: {
    ...styles.lightBoxTitle,
  },
  lightBoxDesc: {
    ...styles.lightBoxDesc,
  },
}));
