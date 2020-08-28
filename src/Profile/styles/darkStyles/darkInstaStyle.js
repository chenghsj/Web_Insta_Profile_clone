import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../lightStyles/InstaStyle.js";

const backgroundColor = "#393939";

export const useDarkStyles = makeStyles((theme) => ({
  container: {
    ...styles.container,
    backgroundColor,
    "&::-webkit-scrollbar-thumb": {
      ...styles.container["&::-webkit-scrollbar-thumb"],
      background: "linear-gradient(0deg, #ee0979 0%,#ff6a00 100% )",
    },
    "&::-webkit-scrollbar-track": {
      ...styles.container["&::-webkit-scrollbar-track"],
      borderLeft: "1px solid #2a2a2a",
    },
    [theme.breakpoints.down("md")]: {
      ...styles.themeWidth.md,
    },
    [theme.breakpoints.down("xs")]: {
      ...styles.themeWidth.xs,
    },
  },
  divider: {
    ...styles.divider,
    backgroundColor: "#888888",
  },
  toggle: {
    ...styles.toggle,
    [theme.breakpoints.down("xs")]: {
      ...styles.themeToggle,
    },
  },
}));
