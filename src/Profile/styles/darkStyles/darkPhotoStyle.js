import { makeStyles } from "@material-ui/core/styles";
import { styles } from "../lightStyles/PhotoStyle";

const backgroundColor = "#393939";

export const useDarkStyles = makeStyles((theme) => ({
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
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  active: {},
  lightBoxContainer: {
    ...styles.lightBoxContainer,
    backgroundColor,
    color: "white",
    "&::-webkit-scrollbar-thumb": {
      ...styles.lightBoxContainer["&::-webkit-scrollbar-thumb"],
      background: "linear-gradient(0deg, #ee0979 0%,#ff6a00 100% )",
    },
    "&::-webkit-scrollbar-track": {
      ...styles.lightBoxContainer["&::-webkit-scrollbar-track"],
      borderLeft: "1px solid #2a2a2a",
    },
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
