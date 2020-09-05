import { makeStyles } from "@material-ui/core/styles";
import { paperStyle, buttonStyle } from "./reuseableStyle";

export const useStyles = makeStyles((theme) => ({
  paper: paperStyle(theme),
  loginContainer: {
    height: "1.5rem",
    display: "flex",
    justifyContent: "flex-end",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      transform: "scale(0.9)",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "end",
    },
  },
  button: (isDark) => buttonStyle(theme, isDark),
}));
