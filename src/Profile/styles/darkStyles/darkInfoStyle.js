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
  avatar: {
    ...styles.avatar,
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
}));
