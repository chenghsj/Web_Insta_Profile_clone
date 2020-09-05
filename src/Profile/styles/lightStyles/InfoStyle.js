import { makeStyles } from "@material-ui/core/styles";

const backgroundColor = "#FAFAFA";

export const styles = {
  container: {
    marginTop: "1%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    themeBreakpoints: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      marginTop: "7%",
    },
  },
  avatarContainer: {
    position: "relative",
    width: "120px",
    height: "120px",
    marginLeft: "7%",
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
    themeBreakpoints: {
      xs: { margin: "0" },
    },
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
    alignItems: "center",
  },
  avatarRoot: {
    border: "1px solid #71716f",
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    position: "relative",
    width: "50%",
    marginLeft: "-10%",
    themeBreakpoints: {
      xs: {
        margin: "0",
        width: "85%",
      },
    },
  },
  "@keyframes rotate": {
    "0%": {
      transform: "rotate(0deg)",
    },
    "25%": {
      transform: "rotate(90deg)",
    },
    "50%": {
      transform: "rotate(180deg)",
    },
    "75%": {
      transform: "rotate(270deg)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
  profileIcon: {
    borderRadius: "20%",
    margin: "0.2rem",
    border: "1px solid black",
  },
  editIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameInputRoot: {
    width: "80%",
    fontSize: "1.5rem",
    color: "gray",
  },
  infoInputRoot: {
    fontSize: "1rem",
    color: "gray",
  },
  inputMultiline: {
    padding: "10px 0 2px",
  },
  fileInput: {
    paddingBottom: "18.5px",
  },
  paper: {
    outline: "none",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    width: "30%",
    'theme.breakpoints.down("xs")': { width: "50%" },
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[5],
    padding: (theme) => theme.spacing(2, 4, 3),
    opacity: 1,
    visibility: "visible",
  },
};

export const useStyles = makeStyles((theme) => ({
  container: {
    ...styles.container,
    [theme.breakpoints.down("xs")]: {
      ...styles.container.themeBreakpoints,
    },
  },
  avatarContainer: {
    ...styles.avatarContainer,
  },
  offCircle: {
    ...styles.offCircle,
    [theme.breakpoints.down("xs")]: {
      ...styles.offCircle.themeBreakpoints.xs,
    },
  },
  innerCircle: {
    ...styles.innerCircle,
  },
  avatarRoot: {
    ...styles.avatarRoot,
  },
  info: {
    ...styles.info,
    [theme.breakpoints.down("xs")]: {
      ...styles.info.themeBreakpoints.xs,
    },
  },
  "@keyframes rotate": {
    ...styles["@keyframes rotate"],
  },
  profileIcon: {
    ...styles.profileIcon,
  },
  editIcon: {
    ...styles.editIcon,
  },
  nameInputRoot: {
    ...styles.NameInputRoot,
  },
  infoInputRoot: {
    ...styles.infoInputRoot,
  },
  inputMultiline: {
    ...styles.inputMultiline,
  },
  fileInput: { ...styles.fileInput },
  paper: {
    ...styles.paper,
    [theme.breakpoints.down("xs")]: {
      ...styles.paper[theme.breakpoints.down("xs")],
    },
    backgroundColor: styles.paper.backgroundColor(theme),
    boxShadow: styles.paper.boxShadow(theme),
    padding: styles.paper.padding(theme),
  },
}));
