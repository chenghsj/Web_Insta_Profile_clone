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
  avatar: {
    width: "90%",
    height: "90%",
    border: "1px solid #71716f",
  },
  info: {
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
  avatar: {
    ...styles.avatar,
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
}));
