import { makeStyles } from "@material-ui/core/styles";
import { styles as infoStyles } from "./InfoStyle";
import { styles as signModalStyle } from "./SignModalStyle";

export const useStyles = makeStyles((theme) => ({
  paper: {
    ...infoStyles.paper,
    [theme.breakpoints.down("xs")]: {
      ...infoStyles.paper[theme.breakpoints.down("xs")],
    },
    backgroundColor: infoStyles.paper.backgroundColor(theme),
    boxShadow: infoStyles.paper.boxShadow(theme),
    padding: infoStyles.paper.padding(theme),
  },
  button: {
    ...signModalStyle.button,
    [theme.breakpoints.down("xs")]: {
      ...signModalStyle.button['theme.breakpoints.down("xs")'],
    },
    marginRight: "0.5rem",
  },
  btnText: {
    textTransform: "none",
  },
  fileInput: {
    paddingBottom: "18.5px",
  },
  progressBar: {
    height: "0.4rem",
    borderRadius: "0.4rem",
  },
  colorPrimary: {
    backgroundColor: "#e0e0e0",
  },
  barColorPrimary: {
    backgroundColor: theme.palette.primary,
  },
  bar1Determinate: {
    borderRadius: "0.4rem",
  },
}));
