import { makeStyles } from "@material-ui/core/styles";
import { styles as infoStyles } from "../lightStyles/InfoStyle";
import { styles } from "../lightStyles/SignModalStyle";

export const useDarkStyles = makeStyles((theme) => ({
  paper: {
    ...infoStyles.paper,
    [theme.breakpoints.down("xs")]: {
      ...infoStyles.paper[theme.breakpoints.down("xs")],
    },
    backgroundColor: infoStyles.paper.backgroundColor(theme),
    boxShadow: infoStyles.paper.boxShadow(theme),
    padding: infoStyles.paper.padding(theme),
  },
  loginContainer: {
    ...styles.loginContainer,
    [theme.breakpoints.down("xs")]: {
      ...styles.loginContainer['theme.breakpoints.down("xs")'],
    },
  },
  button: {
    ...styles.button,
    [theme.breakpoints.down("xs")]: {
      ...styles.button['theme.breakpoints.down("xs")'],
    },
    background: "white",
    color: "black",
  },
  btnText: {
    ...styles.btnText,
  },
}));
