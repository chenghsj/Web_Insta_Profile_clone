import { makeStyles } from "@material-ui/core/styles";
import { paperStyle, buttonStyle } from "./reuseableStyle";

export const useStyles = makeStyles((theme) => ({
  paper: paperStyle(theme),
  button: {
    ...buttonStyle(theme),
    marginRight: "0.5rem",
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
