import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../lightStyles/InfoStyle";

const backgroundColor = "#474747";
const fontColor = "white";

export const useDarkStyles = makeStyles((theme) => ({
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
    backgroundColor: backgroundColor,
  },
  avatarRoot: {
    ...styles.avatarRoot,
    border: "1px solid #d3d3d3",
  },
  info: {
    ...styles.info,
    color: fontColor,
    [theme.breakpoints.down("xs")]: {
      ...styles.info.themeBreakpoints.xs,
    },
  },
  "@keyframes rotate": {
    ...styles["@keyframes rotate"],
  },
  profileIcon: {
    ...styles.profileIcon,
    border: "1px solid white",
    color: "white",
  },
  editIcon: {
    ...styles.editIcon,
  },
  nameInputRoot: {
    ...styles.nameInputRoot,
    color: "white",
  },
  infoInputRoot: {
    ...styles.infoInputRoot,
    color: "white",
  },
  inputMultiline: {
    ...styles.inputMultiline,
    color: "white",
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
